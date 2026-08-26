import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ratio =
    project.layout === "tall"
      ? "aspect-[3/4]"
      : project.layout === "full"
        ? "aspect-[16/9] md:aspect-[21/9]"
        : "aspect-[4/3] md:aspect-[16/10]";

  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      data-cursor="VIEW PROJECT"
      className="group block cursor-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-foreground"
    >
      <div className={`media-block ${ratio} transition-colors duration-500 group-hover:border-foreground/30`}>
        <div
          aria-hidden="true"
          className="absolute inset-0 transition-transform duration-[1100ms] ease-out group-hover:scale-[1.02]"
          style={{
            background:
              "linear-gradient(155deg, oklch(0.205 0 0) 0%, oklch(0.15 0 0) 60%, oklch(0.178 0 0) 100%)",
          }}
        />
        <div className="relative flex h-full flex-col justify-between p-5 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="eyebrow">{String(index + 1).padStart(2, "0")}</span>
            <span className="eyebrow text-right">{project.categories[0]}</span>
          </div>
          <div>
            <h3 className="display text-3xl text-foreground md:text-5xl">
              {project.title}
            </h3>
            <span className="eyebrow mt-4 block text-foreground/70">
              View project →
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
        {project.categories.map((c) => (
          <span key={c} className="eyebrow">
            {c}
          </span>
        ))}
      </div>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
    </Link>
  );
}
