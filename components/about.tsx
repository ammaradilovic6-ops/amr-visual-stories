import { Reveal } from '@/components/reveal'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="border-b border-border pb-6">
          <h2 className="font-display text-sm font-medium tracking-[0.3em] text-muted-foreground">
            ABOUT
          </h2>
        </Reveal>

        <div className="grid gap-10 pt-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <Reveal>
            <div className="flex flex-col gap-4">
              <p className="font-display text-3xl font-semibold uppercase leading-none tracking-tight md:text-5xl">
                Ammar
                <br />
                Adilović
              </p>
              <p className="text-xs tracking-[0.2em] text-accent">
                VIDEO EDITOR · VIDEOGRAPHER · MOTION DESIGNER
              </p>
              <p className="text-xs tracking-[0.2em] text-muted-foreground">
                SARAJEVO, BOSNIA &amp; HERZEGOVINA
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-pretty text-2xl font-light leading-snug text-foreground md:text-3xl">
              I work across editing, videography and motion design, helping creators and brands
              turn ideas and footage into engaging visual stories.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
