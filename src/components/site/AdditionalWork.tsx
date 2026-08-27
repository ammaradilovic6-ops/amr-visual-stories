import { youtubeWork } from "@/data/projects";
import { YouTubeMedia } from "./Media";
import { Reveal } from "./Reveal";

export function AdditionalWork() {
  return (
    <section className="shell mt-28 md:mt-40" id="more-work">
      <Reveal>
        <div className="hairline flex flex-col gap-3 pt-8 md:flex-row md:items-end md:justify-between">
          <h2 className="display text-4xl md:text-6xl">More Work</h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            A secondary selection of long-form edits.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {youtubeWork.map((v, i) => (
          <Reveal key={v.id} delay={i * 80}>
            <YouTubeMedia id={v.id} title="Long-form edit" />
            <div className="mt-3 flex items-center justify-between">
              <span className="eyebrow">Long-form · YouTube</span>
              <a
                href={v.url}
                target="_blank"
                rel="noreferrer noopener"
                className="eyebrow link-underline text-foreground/80"
              >
                Watch on YouTube
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
