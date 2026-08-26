import { useEffect, useRef, useState } from "react";

/** Desktop-only subtle label cursor for portfolio media. */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (el) el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      const target = (e.target as HTMLElement | null)?.closest?.("[data-cursor]");
      setLabel(target ? (target as HTMLElement).dataset['cursor'] || null : null);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-background transition-all duration-300 ease-out ${
          label ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        {label ?? ""}
      </div>
    </div>
  );
}
