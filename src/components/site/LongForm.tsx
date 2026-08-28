import { useState } from "react";
import type { LongFormProject } from "@/data/projects";

export function LongFormPlayer({
  project,
  ratio = "aspect-video",
}: {
  project: LongFormProject;
  ratio?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`media-block ${ratio} group transition-colors duration-500 hover:border-[var(--brand)]/60`}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${project.id}?autoplay=1&rel=0`}
          title={`${project.client} — ${project.title}`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          data-cursor="WATCH"
          aria-label={`Play ${project.client} — ${project.title}`}
          className="absolute inset-0 h-full w-full cursor-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
        >
          <img
            src={`https://i.ytimg.com/vi/${project.id}/maxresdefault.jpg`}
            alt={`${project.client} — ${project.title}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover opacity-80 transition-all duration-[900ms] ease-out group-hover:scale-[1.03] group-hover:opacity-100"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                `https://i.ytimg.com/vi/${project.id}/hqdefault.jpg`;
            }}
          />
          <span className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--brand)] text-[var(--brand)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--brand)] group-hover:text-background md:h-20 md:w-20">
            <svg viewBox="0 0 12 14" className="ml-1 h-5 w-5 fill-current">
              <path d="M0 0l12 7-12 7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

export function LongFormMeta({
  project,
  large = false,
}: {
  project: LongFormProject;
  large?: boolean;
}) {
  return (
    <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <h3
          className={`display text-foreground ${large ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"}`}
        >
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          <span className="text-foreground">{project.client}</span>
          <span className="mx-2 text-[var(--brand)]">/</span>
          {project.role}
        </p>
        {large ? (
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {project.categories.map((c) => (
          <span key={c} className="eyebrow">
            {c}
          </span>
        ))}
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer noopener"
          className="link-underline text-[11px] uppercase tracking-[0.18em] text-[var(--brand)]"
        >
          Watch on YouTube ↗
        </a>
      </div>
    </div>
  );
}
