import { createFileRoute, Link } from "@tanstack/react-router";
import {
  projects,
  capabilities,
  experience,
  EMAIL,
  INSTAGRAM,
  INSTAGRAM_URL,
} from "@/data/projects";
import { ProjectCard } from "@/components/site/ProjectCard";
import { AdditionalWork } from "@/components/site/AdditionalWork";
import { ShortFormGrid } from "@/components/site/ShortForm";
import { Reveal } from "@/components/site/Reveal";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: ".AMR — Ammar Adilović · Video Editor & Motion Designer" },
      {
        name: "description",
        content:
          "Editing stories, social content and visual experiences — long-form YouTube, short-form and motion-driven work. Sarajevo, Bosnia & Herzegovina.",
      },
      { property: "og:title", content: ".AMR — Ammar Adilović" },
      {
        property: "og:description",
        content:
          "Video editor, videographer and motion designer based in Sarajevo. Selected editing, production and motion work.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="shell pt-16 md:pt-24">
        <Reveal>
          <p className="text-sm font-semibold tracking-[-0.03em] text-muted-foreground">
            .AMR
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="display mt-6 text-[15vw] leading-[0.86] md:text-[9.5vw]">
            Ammar
            <br />
            Adilović
          </h1>
        </Reveal>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12">
          <Reveal delay={140} className="md:col-span-5">
            <ul className="space-y-1">
              {["Video Editor", "Videographer", "Motion Designer"].map((t) => (
                <li
                  key={t}
                  className="text-[11px] uppercase tracking-[0.22em] text-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
            <p className="eyebrow mt-8">Sarajevo, Bosnia &amp; Herzegovina</p>
          </Reveal>

          <Reveal delay={200} className="md:col-span-7">
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Editing stories, social content and visual experiences — from long-form
              YouTube to short-form and motion-driven work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="inline-flex items-center border border-foreground bg-foreground px-6 py-4 text-[11px] uppercase tracking-[0.18em] text-background transition-colors hover:bg-transparent hover:text-foreground"
              >
                View selected work
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center border border-border px-6 py-4 text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:border-foreground"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>

      </section>

      {/* SELECTED WORK */}
      <section className="shell mt-28 md:mt-40" id="work">
        <Reveal>
          <div className="hairline flex flex-col gap-3 pt-8 md:flex-row md:items-end md:justify-between">
            <h2 className="display text-4xl md:text-7xl">Selected Work</h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              A selection of editing, production and motion work.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-x-6 gap-y-14 md:grid-cols-12">
          <Reveal className="md:col-span-12">
            <ProjectCard project={projects[0]!} index={0} />
          </Reveal>
          <Reveal delay={60} className="md:col-span-7">
            <ProjectCard project={projects[1]!} index={1} />
          </Reveal>
          <Reveal delay={120} className="md:col-span-5">
            <ProjectCard project={projects[2]!} index={2} />
          </Reveal>
          <Reveal delay={60} className="md:col-span-6">
            <ProjectCard project={projects[3]!} index={3} />
          </Reveal>
          <Reveal delay={120} className="md:col-span-6">
            <ProjectCard project={projects[4]!} index={4} />
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <Link to="/work" className="eyebrow link-underline text-foreground">
            All work →
          </Link>
        </Reveal>
      </section>

      <ShortFormGrid />

      <AdditionalWork />

      {/* WHAT I DO */}
      <section className="shell mt-28 md:mt-40">
        <Reveal>
          <h2 className="display hairline pt-8 text-4xl md:text-6xl">What I Do</h2>
        </Reveal>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.key} delay={i * 80}>
              <div className="border-t border-border pt-5">
                <p className="text-xl font-semibold tracking-[-0.03em]">{c.key}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="shell mt-28 md:mt-40">
        <Reveal>
          <h2 className="display hairline pt-8 text-4xl md:text-6xl">Experience</h2>
        </Reveal>
        <ul className="mt-10">
          {experience.map((e, i) => (
            <Reveal key={e.name} delay={i * 60} as="li">
              <div className="flex flex-col gap-1 border-t border-border py-6 md:flex-row md:items-baseline md:justify-between">
                <p className="text-xl font-semibold tracking-[-0.03em] md:text-2xl">
                  {e.name}
                </p>
                <p className="text-sm text-muted-foreground">{e.meta}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-8">
          <Link to="/experience" className="eyebrow link-underline text-foreground">
            Full experience →
          </Link>
        </Reveal>
      </section>

      {/* ABOUT teaser */}
      <section className="shell mt-28 md:mt-40">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <h2 className="display hairline pt-8 text-4xl md:text-6xl">About</h2>
          </Reveal>
          <Reveal delay={80} className="md:col-span-8">
            <p className="max-w-2xl text-lg leading-relaxed text-foreground md:text-2xl">
              I&apos;m Ammar Adilović, a video editor, videographer and motion designer
              based in Sarajevo. I work across long-form YouTube, short-form social
              content, commercial-style projects and on-location production — combining
              editing, storytelling and motion to turn raw footage into finished content.
            </p>
            <Link to="/about" className="eyebrow link-underline mt-8 inline-block text-foreground">
              More about me →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CONTACT teaser */}
      <section className="shell mt-28 md:mt-40">
        <Reveal>
          <div className="hairline pt-8">
            <h2 className="display text-[11vw] leading-[0.9] md:text-[6.5vw]">
              Let&apos;s make
              <br />
              something good.
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Have a project in mind? Let&apos;s talk.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center border border-foreground bg-foreground px-6 py-4 text-[11px] uppercase tracking-[0.18em] text-background transition-colors hover:bg-transparent hover:text-foreground"
              >
                Get in touch
              </Link>
              <a href={`mailto:${EMAIL}`} className="link-underline text-sm text-muted-foreground hover:text-foreground">
                {EMAIL}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline text-sm text-muted-foreground hover:text-foreground"
              >
                @{INSTAGRAM}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

