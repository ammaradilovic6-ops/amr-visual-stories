import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { projects, type Tag } from "@/data/projects";
import { ProjectCard } from "@/components/site/ProjectCard";
import { AdditionalWork } from "@/components/site/AdditionalWork";
import { Reveal } from "@/components/site/Reveal";

const filters: ("ALL" | Tag)[] = [
  "ALL",
  "EDIT",
  "SHOOT",
  "MOTION",
  "SHORT-FORM",
  "LONG-FORM",
  "SPORTS",
];

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — .AMR · Ammar Adilović" },
      {
        name: "description",
        content:
          "Editing, videography and motion projects by Ammar Adilović — long-form, short-form, social and sports work.",
      },
      { property: "og:title", content: "Work — .AMR · Ammar Adilović" },
      {
        property: "og:description",
        content: "A selection of editing, production and motion work.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [active, setActive] = useState<"ALL" | Tag>("ALL");
  const list = useMemo(
    () => (active === "ALL" ? projects : projects.filter((p) => p.tags.includes(active))),
    [active],
  );

  return (
    <>
      <section className="shell pt-16 md:pt-24">
        <Reveal>
          <h1 className="display text-[14vw] leading-[0.9] md:text-[8vw]">Work</h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            A selection of editing, production and motion work.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div
            role="group"
            aria-label="Filter work"
            className="hairline mt-12 flex flex-wrap gap-x-6 gap-y-3 pt-6"
          >
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={active === f}
                onClick={() => setActive(f)}
                className={`text-[11px] uppercase tracking-[0.18em] transition-colors ${
                  active === f
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-12">
          {list.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={(i % 2) * 60}
              className={
                p.layout === "full"
                  ? "md:col-span-12"
                  : p.layout === "tall"
                    ? "md:col-span-5"
                    : p.layout === "wide"
                      ? "md:col-span-7"
                      : "md:col-span-6"
              }
            >
              <ProjectCard project={p} index={projects.indexOf(p)} />
            </Reveal>
          ))}
          {list.length === 0 ? (
            <p className="eyebrow md:col-span-12">No projects in this category yet.</p>
          ) : null}
        </div>
      </section>

      <AdditionalWork />
    </>
  );
}
