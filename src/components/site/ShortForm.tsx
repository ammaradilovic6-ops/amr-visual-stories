import { useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { shortForm, type ShortFormClip } from "@/data/projects";
import { Reveal } from "./Reveal";

let currentlyPlaying: HTMLVideoElement | null = null;

function playExclusively(el: HTMLVideoElement) {
  if (currentlyPlaying && currentlyPlaying !== el) {
    currentlyPlaying.pause();
  }
  currentlyPlaying = el;
  void el.play().catch(() => undefined);
}

export function ShortFormCard({ clip }: { clip: ShortFormClip }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const finePointer = () =>
    typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

  const start = () => {
    const el = videoRef.current;
    if (!el) return;
    playExclusively(el);
    setPlaying(true);
  };

  const stop = () => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    setPlaying(false);
  };

  return (
    <div className="group">
      <div
        className="media-block aspect-[9/16] transition-colors duration-500 group-hover:border-foreground/30"
        onMouseEnter={() => finePointer() && start()}
        onMouseLeave={() => finePointer() && stop()}
      >
        <video
          ref={videoRef}
          src={clip.src}
          muted
          loop
          playsInline
          preload="none"
          onPause={() => setPlaying(false)}
          className="absolute inset-0 h-full w-full object-contain"
        />
        <button
          type="button"
          aria-label={playing ? `Pause ${clip.client} short-form video` : `Play ${clip.client} short-form video`}
          onClick={() => (playing ? stop() : start())}
          className="absolute inset-0 h-full w-full focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <span
            className={`absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-[11px] uppercase tracking-[0.18em] transition-opacity duration-500 ${
              playing ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="text-foreground">Play</span>
            <span className="text-muted-foreground">→</span>
          </span>
        </button>
      </div>

      <div className="mt-3">
        <Link
          to="/work/$slug"
          params={{ slug: clip.slug }}
          className="link-underline text-sm font-semibold tracking-[-0.02em] text-foreground"
        >
          {clip.client}
        </Link>
        <p className="eyebrow mt-1">{clip.label}</p>
      </div>
    </div>
  );
}

export function ShortFormGrid({
  clips = shortForm,
  heading = "Short-form",
  intro,
}: {
  clips?: ShortFormClip[];
  heading?: string;
  intro?: ReactNode;
}) {
  return (
    <section className="shell mt-28 md:mt-40" id="short-form">
      <Reveal>
        <div className="hairline flex flex-col gap-3 pt-8 md:flex-row md:items-end md:justify-between">
          <h2 className="display text-4xl md:text-6xl">{heading}</h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            {intro ?? "Vertical edits for social — hover or tap to preview."}
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
        {clips.map((c, i) => (
          <Reveal key={c.id} delay={(i % 5) * 60}>
            <ShortFormCard clip={c} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
