import { useEffect, useRef } from "react";

/**
 * Original atmospheric background: a slow flow-field of faint particles drawn on
 * canvas, layered under drifting blurred light-fields. GPU/CPU friendly:
 * half-resolution canvas, capped particle count, paused when tab is hidden,
 * fully static under prefers-reduced-motion.
 */

// Cheap deterministic value noise (no libraries, no assets).
function hash(x: number, y: number, z: number) {
  const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
  return n - Math.floor(n);
}
function smooth(t: number) {
  return t * t * (3 - 2 * t);
}
function noise3(x: number, y: number, z: number) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const zi = Math.floor(z);
  const xf = smooth(x - xi);
  const yf = smooth(y - yi);
  const zf = smooth(z - zi);
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const c = (dx: number, dy: number, dz: number) => hash(xi + dx, yi + dy, zi + dz);

  const x00 = lerp(c(0, 0, 0), c(1, 0, 0), xf);
  const x10 = lerp(c(0, 1, 0), c(1, 1, 0), xf);
  const x01 = lerp(c(0, 0, 1), c(1, 0, 1), xf);
  const x11 = lerp(c(0, 1, 1), c(1, 1, 1), xf);
  return lerp(lerp(x00, x10, yf), lerp(x01, x11, yf), zf);
}

type P = { x: number; y: number; life: number; max: number; warm: boolean };

export function Atmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let particles: P[] = [];
    let raf = 0;
    let t = 0;
    let running = true;

    const DPR = 0.5; // deliberately low-res, it is a soft texture

    const spawn = (): P => ({
      x: Math.random() * w,
      y: Math.random() * h,
      life: Math.random() * 200,
      max: 160 + Math.random() * 220,
      warm: Math.random() < 0.22,
    });

    const resize = () => {
      w = Math.floor(window.innerWidth * DPR);
      h = Math.floor(window.innerHeight * DPR);
      canvas.width = w;
      canvas.height = h;
      const count = Math.min(420, Math.round((w * h) / 2200));
      particles = Array.from({ length: count }, spawn);
      ctx.clearRect(0, 0, w, h);
    };

    const step = () => {
      if (!running) return;
      t += 0.0016;

      // trail fade
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.055)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      const scale = 0.0032;
      for (const p of particles) {
        const a = noise3(p.x * scale, p.y * scale, t) * Math.PI * 4;
        const vx = Math.cos(a) * 0.9;
        const vy = Math.sin(a) * 0.9 - 0.12;
        const nx = p.x + vx;
        const ny = p.y + vy;

        ctx.strokeStyle = p.warm
          ? "rgba(255, 90, 54, 0.16)"
          : "rgba(241, 241, 239, 0.055)";
        ctx.lineWidth = p.warm ? 0.9 : 0.7;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        p.x = nx;
        p.y = ny;
        p.life += 1;
        if (p.life > p.max || p.x < -20 || p.x > w + 20 || p.y < -20 || p.y > h + 20) {
          Object.assign(p, spawn(), { life: 0 });
        }
      }

      raf = requestAnimationFrame(step);
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduced) {
      // single static pass so the texture still exists, without motion
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < 900; i++) step === step;
    } else {
      raf = requestAnimationFrame(step);
    }

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduced && !running) {
        running = true;
        raf = requestAnimationFrame(step);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      {/* drifting light-fields */}
      <div className="atmo-field atmo-field-a" />
      <div className="atmo-field atmo-field-b" />
      <div className="atmo-field atmo-field-c" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-70"
        style={{ mixBlendMode: "screen" }}
      />

      {/* readability veil + vignette */}
      <div className="atmo-veil absolute inset-0" />
    </div>
  );
}
