import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { YouTubeEmbed } from '@/components/youtube-embed'
import { Reveal } from '@/components/reveal'
import { longFormVideos } from '@/lib/projects'

export function FeaturedWork() {
  const featured = longFormVideos.find((v) => v.featured)
  const rest = longFormVideos.filter((v) => !v.featured)

  return (
    <section className="px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="flex items-end justify-between border-b border-border pb-6">
          <h2 className="font-display text-sm font-medium tracking-[0.3em] text-muted-foreground">
            MORE WORK · LONG-FORM
          </h2>
        </Reveal>

        {/* Featured — Kenny Marshal */}
        {featured && (
          <Reveal className="mt-10 grid gap-8 lg:grid-cols-[1fr_20rem] lg:gap-12">
            <YouTubeEmbed id={featured.youtubeId} title="Kenny Marshal — Filmed & Edited" />

            <div className="flex flex-col justify-center gap-6">
              <div>
                <p className="text-xs tracking-[0.25em] text-accent">FEATURED</p>
                <h3 className="mt-3 font-display text-4xl font-semibold uppercase leading-none tracking-tight md:text-5xl">
                  Kenny
                  <br />
                  Marshal
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm tracking-[0.2em] text-foreground">FILMED &amp; EDITED</p>
                <p className="text-xs tracking-[0.15em] text-muted-foreground">
                  VIDEOGRAPHY · EDITING · PRODUCTION
                </p>
              </div>
              <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
                An independent long-form production, filmed and edited end to end.
              </p>
              <Link
                href="/work/kenny-marshal"
                className="group inline-flex w-fit items-center gap-2 text-xs font-medium tracking-[0.25em] text-foreground"
              >
                VIEW PROJECT
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </Reveal>
        )}

        {/* Additional real long-form videos */}
        <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-3 md:gap-6">
          {rest.map((v, i) => (
            <Reveal key={v.youtubeId} delay={i * 80}>
              <YouTubeEmbed id={v.youtubeId} title="Long-form video" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
