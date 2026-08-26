import { createFileRoute, Link } from "@tanstack/react-router";
import { capabilities } from "@/data/projects";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — .AMR · Ammar Adilović" },
      {
        name: "description",
        content:
          "Ammar Adilović is a video editor, videographer and motion designer based in Sarajevo, Bosnia & Herzegovina.",
      },
      { property: "og:title", content: "About — .AMR · Ammar Adilović" },
      {
        property: "og:description",
        content:
          "Editing, videography and motion design across long-form, short-form and on-location production.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="shell pt-16 md:pt-24">
      <Reveal>
        <h1 className="display text-[14vw] leading-[0.9] md:text-[8vw]">About</h1>
      </Reveal>

      <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12">
        <Reveal className="md:col-span-8">
          <p className="max-w-3xl text-xl leading-relaxed text-foreground md:text-3xl md:leading-[1.35]">
            I&apos;m Ammar Adilović, a video editor, videographer and motion designer based
            in Sarajevo. I work across long-form YouTube, short-form social content,
            commercial-style projects and on-location production — combining editing,
            storytelling and motion to turn raw footage into finished content.
          </p>
          <p className="mt-8 text-sm text-muted-foreground">
            .AMR is the creative portfolio of Ammar Adilović.
          </p>
        </Reveal>

        <Reveal delay={80} className="md:col-span-4">
          <div className="border-t border-border pt-5">
            <p className="eyebrow">Based in</p>
            <p className="mt-2 text-sm">Sarajevo, Bosnia &amp; Herzegovina</p>
          </div>
          <div className="mt-10 border-t border-border pt-5">
            <p className="eyebrow">Specialties</p>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              {[
                "Video Editing",
                "Videography",
                "Motion Design",
                "Short-form",
                "Long-form",
              ].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="mt-10 border-t border-border pt-5">
            <p className="eyebrow">Software</p>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              <li>Adobe Premiere Pro</li>
              <li>Adobe After Effects</li>
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="mt-24 md:mt-32">
        <Reveal>
          <h2 className="display hairline pt-6 text-3xl md:text-5xl">What I Do</h2>
        </Reveal>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
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
      </div>

      <Reveal className="mt-20">
        <Link to="/contact" className="eyebrow link-underline text-foreground">
          Get in touch →
        </Link>
      </Reveal>
    </section>
  );
}
