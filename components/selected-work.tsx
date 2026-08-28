import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/projects'
import { Reveal } from '@/components/reveal'

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-20 px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="flex items-end justify-between border-b border-border pb-6">
          <h2 className="font-display text-sm font-medium tracking-[0.3em] text-muted-foreground">
            SELECTED WORK
          </h2>
          <span className="font-display text-sm tabular-nums text-muted-foreground">
            {String(projects.length).padStart(2, '0')}
          </span>
        </Reveal>

        <ul>
          {projects.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={i * 60}>
                <Link
                  href={`/work/${p.slug}`}
                  className="group grid grid-cols-[auto_1fr] items-baseline gap-x-4 gap-y-3 border-b border-border py-8 transition-colors hover:bg-surface/40 md:grid-cols-[6rem_1fr_auto] md:gap-x-8 md:py-10"
                >
                  <span className="font-display text-sm tabular-nums text-muted-foreground md:text-base">
                    {p.index}
                  </span>

                  <div className="col-start-2 flex flex-col gap-3">
                    <h3 className="font-display text-4xl font-semibold uppercase leading-none tracking-tight text-foreground transition-transform duration-500 group-hover:translate-x-2 md:text-6xl lg:text-7xl">
                      {p.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-xs tracking-[0.2em] text-accent">{p.role}</span>
                      <span className="hidden text-muted-foreground md:inline">·</span>
                      <span className="text-xs tracking-[0.15em] text-muted-foreground">
                        {p.categories.join(' · ')}
                      </span>
                    </div>
                  </div>

                  <span className="col-span-2 mt-2 inline-flex items-center gap-2 text-xs font-medium tracking-[0.25em] text-muted-foreground transition-colors group-hover:text-foreground md:col-span-1 md:col-start-3 md:mt-0 md:self-center">
                    VIEW PROJECT
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
