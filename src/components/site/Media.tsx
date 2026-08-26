import { useState } from "react";

/**
 * Real YouTube thumbnail + click-to-load iframe. No generated imagery.
 */
export function YouTubeMedia({
  id,
  title,
  ratio = "aspect-video",
}: {
  id: string;
  title: string;
  ratio?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`media-block ${ratio} group`}>
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          data-cursor="WATCH"
          className="absolute inset-0 h-full w-full cursor-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover opacity-90 transition-all duration-[900ms] ease-out group-hover:scale-[1.03] group-hover:opacity-100"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
            }}
          />
          <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-[11px] uppercase tracking-[0.18em] text-foreground md:p-5">
            <span>{title}</span>
            <span className="text-muted-foreground">Play →</span>
          </span>
        </button>
      )}
    </div>
  );
}

/** CSS-only dark placeholder. No image, ever. */
export function PlaceholderMedia({
  title,
  meta,
  cta,
  href,
  ratio = "aspect-video",
  size = "md",
}: {
  title: string;
  meta?: string;
  cta?: string;
  href?: string;
  ratio?: string;
  size?: "sm" | "md" | "lg";
}) {
  const titleClass =
    size === "lg"
      ? "text-3xl md:text-6xl"
      : size === "sm"
        ? "text-lg md:text-xl"
        : "text-2xl md:text-4xl";

  const inner = (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.20 0 0) 0%, oklch(0.15 0 0) 55%, oklch(0.178 0 0) 100%)",
        }}
      />
      <div className="relative flex h-full flex-col justify-between p-5 md:p-8">
        <span className="eyebrow">{meta}</span>
        <div>
          <p className={`display ${titleClass} text-foreground`}>{title}</p>
          {cta ? (
            <span className="eyebrow mt-4 block text-foreground/80">{cta}</span>
          ) : null}
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        data-cursor="WATCH"
        className={`media-block ${ratio} group block cursor-none transition-colors duration-500 hover:border-foreground/30`}
      >
        {inner}
      </a>
    );
  }

  return <div className={`media-block ${ratio}`}>{inner}</div>;
}
