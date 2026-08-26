import { createFileRoute, Link } from "@tanstack/react-router";
import { experience, projects } from "@/data/projects";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — .AMR · Ammar Adilović" },
      {
        name: "description",
        content:
          "Projects Ammar Adilović has edited, filmed and produced — editing, videography, long-form, short-form and sports work.",
      },
      { property: "og:title", content: "Experience — .AMR · Ammar Adilović" },
      {
        property: "og:description",
        content: "Editing, videography and motion work across creator-led projects.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <section className="shell pt-16 md:pt-24">
      <Reveal>
        <h1 className="display text-[14vw] leading-[0.9] md:text-[8vw]">Experience</h1>
      </Reveal>

      <ul className="mt-14 md:mt-20">
        {experience.map((e, i) => {
          const slug = projects.find((p) => p.title === e.name)?.slug;
          const row = (
            <div className="flex flex-col gap-2 border-t border-border py-7 transition-colors duration-500 group-hover:border-foreground/40 md:flex-row md:items-baseline md:justify-between md:py-9">
              <div className="flex items-baseline gap-4">
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="display text-3xl md:text-5xl">{e.name}</h2>
              </div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {e.meta}
              </p>
            </div>
          );
          return (
            <Reveal as="li" key={e.name} delay={i * 60}>
              {slug ? (
                <Link
                  to="/work/$slug"
                  params={{ slug }}
                  data-cursor="VIEW PROJECT"
                  className="group block cursor-none"
                >
                  {row}
                </Link>
              ) : (
                <div className="group">{row}</div>
              )}
            </Reveal>
          );
        })}
      </ul>

      <Reveal className="mt-16">
        <div className="border-t border-border pt-6">
          <p className="eyebrow">Software</p>
          <p className="mt-3 text-lg">Adobe Premiere Pro · Adobe After Effects</p>
        </div>
      </Reveal>
    </section>
  );
}
