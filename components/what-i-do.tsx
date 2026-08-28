import { Reveal } from '@/components/reveal'

const services = [
  {
    title: 'VIDEO EDITING',
    body: 'Long-form and short-form editing focused on pacing, storytelling and retention.',
  },
  {
    title: 'VIDEOGRAPHY',
    body: 'Interviews, events, vlogs and cinematic content.',
  },
  {
    title: 'MOTION DESIGN',
    body: 'Motion graphics, animated typography, UI animation and visual effects.',
  },
]

export function WhatIDo() {
  return (
    <section className="px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="border-b border-border pb-6">
          <h2 className="font-display text-sm font-medium tracking-[0.3em] text-muted-foreground">
            WHAT I DO
          </h2>
        </Reveal>

        <div className="grid gap-px border-b border-border md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="flex h-full flex-col gap-6 border-border py-10 md:px-8 md:[&:not(:first-child)]:border-l md:first:pl-0">
                <span className="font-display text-xs tabular-nums text-muted-foreground">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  {s.title}
                </h3>
                <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
