import Link from 'next/link'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-between overflow-hidden px-5 pb-10 pt-28 md:px-10 md:pb-14 md:pt-32">
      {/* top meta row */}
      <div className="mx-auto flex w-full max-w-[1400px] items-start justify-between">
        <div className="animate-[fadein_1s_ease_forwards] opacity-0 [animation-delay:120ms]">
          <p className="text-xs tracking-[0.25em] text-muted-foreground">
            PERSONAL PORTFOLIO
          </p>
        </div>
        <div className="hidden text-right text-xs leading-relaxed tracking-[0.2em] text-muted-foreground md:block animate-[fadein_1s_ease_forwards] opacity-0 [animation-delay:200ms]">
          BASED IN
          <br />
          SARAJEVO, BiH
        </div>
      </div>

      {/* headline — centered */}
      <div className="mx-auto w-full max-w-[1400px] text-center">
        <h1 className="font-display font-bold uppercase leading-[0.86] tracking-[-0.03em]">
          <span className="block overflow-hidden">
            <span className="block animate-[rise_1s_cubic-bezier(0.16,1,0.3,1)_forwards] text-[clamp(5rem,26vw,20rem)]">
              AMR
            </span>
          </span>
        </h1>
        <p className="mt-6 animate-[fadein_1s_ease_forwards] text-sm font-medium tracking-[0.35em] text-foreground opacity-0 [animation-delay:400ms] md:text-base">
          AMMAR ADILOVIĆ
        </p>
        <p className="mt-3 animate-[fadein_1s_ease_forwards] text-sm tracking-[0.2em] text-muted-foreground opacity-0 [animation-delay:500ms] md:text-base">
          Video Editor · Videographer · Motion Designer
        </p>
      </div>

      {/* bottom row */}
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 border-t border-border pt-8 md:flex-row md:items-end md:justify-between animate-[fadein_1.2s_ease_forwards] opacity-0 [animation-delay:600ms]">
        <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Crafting stories through editing, motion and film.
        </p>
        <Link
          href="#work"
          className="group inline-flex items-center gap-3 self-start rounded-full border border-border px-6 py-3 text-xs font-medium tracking-[0.25em] text-foreground transition-colors hover:border-foreground md:self-auto"
        >
          VIEW WORK
          <ArrowDown
            size={15}
            className="transition-transform duration-300 group-hover:translate-y-1"
          />
        </Link>
      </div>
    </section>
  )
}
