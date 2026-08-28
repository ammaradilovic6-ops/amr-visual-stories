import { useRef, useState, type ReactNode } from "react";
import { shortForm, type ShortFormClip } from "@/data/projects";
import { Reveal } from "./Reveal";

let currentlyPlaying: HTMLVideoElement | null = null;
let currentlyAudible: HTMLVideoElement | null = null;

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
  const [muted, setMuted] = useState(true);

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

  const toggleSound = () => {
    const el = videoRef.current;
    if (!el) return;
    const next = !el.muted;
    if (!next) {
      // unmuting: silence any other audible clip so only one plays sound
      if (currentlyAudible && currentlyAudible !== el) currentlyAudible.muted = true;
      currentlyAudible = el;
      el.muted = false;
      setMuted(false);
      if (el.paused) start();
    } else {
      el.muted = true;
      setMuted(true);
      if (currentlyAudible === el) currentlyAudible = null;
    }
  };

  return (
    <div className="group">
      <div
        className="media-block aspect-[9/16] transition-colors duration-500 group-hover:border-[var(--brand)]"
        onMouseEnter={() => finePointer() && start()}
        onMouseLeave={() => finePointer() && muted && stop()}
      >
        <video
          ref={videoRef}
          src={clip.src}
          muted={muted}
          loop
          playsInline
          preload="metadata"
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
          className="absolute inset-0 h-full w-full object-contain transition-transform duration-[900ms] ease-out group-hover:scale-[1.02]"
        />

        <button
          type="button"
          aria-label={playing ? `Pause ${clip.client} clip` : `Play ${clip.client} clip`}
          onClick={() => (playing ? stop() : start())}
          className="absolute inset-0 h-full w-full focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
        >
          <span
            className={`absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--brand)] text-[var(--brand)] backdrop-blur-sm transition-opacity duration-500 ${
              playing ? "opacity-0" : "opacity-100"
            }`}
          >
            <svg viewBox="0 0 12 14" className="ml-[2px] h-3.5 w-3.5 fill-current">
              <path d="M0 0l12 7-12 7z" />
            </svg>
          </span>
        </button>

        <button
          type="button"
          onClick={toggleSound}
          aria-pressed={!muted}
          aria-label={muted ? `Unmute ${clip.client} clip` : `Mute ${clip.client} clip`}
          className={`absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center border backdrop-blur-sm transition-colors duration-300 ${
            muted
              ? "border-border bg-background/60 text-foreground hover:border-[var(--brand)] hover:text-[var(--brand)]"
              : "border-[var(--brand)] bg-[var(--brand)] text-background"
          }`}
        >
          {muted ? (
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M11 5L6.5 9H3v6h3.5L11 19V5z" />
              <path d="M15.5 9.5l5 5m0-5l-5 5" stroke="currentColor" strokeWidth="1.6" fill="none" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M11 5L6.5 9H3v6h3.5L11 19V5z" />
              <path
                d="M15 9c1.2 1 1.2 5 0 6M17.6 7c2.3 2 2.3 8 0 10"
                stroke="currentColor"
                strokeWidth="1.6"
                fill="none"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="mt-3 flex items-baseline justify-between gap-2">
        <p className="text-sm font-semibold tracking-[-0.02em] text-foreground">
          {clip.client}
        </p>
        <p className="eyebrow-brand">{clip.label}</p>
      </div>
    </div>
  );
}

export function ShortFormGrid({
  clips = shortForm,
  heading = "Short-Form",
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
          <div className="flex items-baseline gap-4">
            <span className="index-num">02</span>
            <h2 className="display text-4xl md:text-6xl">{heading}</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            {intro ?? (
              <>
                Vertical edits for social. Hover or tap to play —{" "}
                <span className="text-[var(--brand)]">turn the sound on</span> with the
                speaker control.
              </>
            )}
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
