import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="font-display text-[clamp(2.5rem,10vw,9rem)] font-bold uppercase leading-[0.9] tracking-[-0.02em] text-balance">
            Let&apos;s work
            <br />
            together.
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-14 grid gap-px border-t border-border md:grid-cols-2">
          <a
            href="mailto:ammaradilovic6@gmail.com"
            className="group flex items-center justify-between gap-4 border-b border-border py-8 md:pr-8"
          >
            <span className="flex flex-col gap-1">
              <span className="text-xs tracking-[0.25em] text-muted-foreground">EMAIL</span>
              <span className="font-display text-lg tracking-tight text-foreground transition-colors group-hover:text-accent md:text-2xl">
                ammaradilovic6@gmail.com
              </span>
            </span>
            <ArrowUpRight
              size={22}
              className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
            />
          </a>

          <a
            href="https://instagram.com/ammaradilovicc"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 border-b border-border py-8 md:border-l md:pl-8"
          >
            <span className="flex flex-col gap-1">
              <span className="text-xs tracking-[0.25em] text-muted-foreground">INSTAGRAM</span>
              <span className="font-display text-lg tracking-tight text-foreground transition-colors group-hover:text-accent md:text-2xl">
                @ammaradilovicc
              </span>
            </span>
            <ArrowUpRight
              size={22}
              className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
            />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
