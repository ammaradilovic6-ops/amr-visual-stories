import { Reveal } from '@/components/reveal'

/**
 * CLIENT FEEDBACK
 *
 * This component is intentionally NOT rendered on the live homepage yet.
 * No testimonials are invented. When real testimonials are provided,
 * populate the `testimonials` array below and render <Testimonials /> in app/page.tsx.
 *
 * Each entry: a raw quote, the client name, and their role/creator handle.
 * Do not add fake star ratings or profile pictures.
 */

export type Testimonial = {
  quote: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  // Add real testimonials here, e.g.:
  // { quote: '...', name: 'Gordon Kast', role: 'Creator' },
]

export function Testimonials() {
  if (testimonials.length === 0) return null

  return (
    <section className="px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="border-b border-border pb-6">
          <h2 className="font-display text-sm font-medium tracking-[0.3em] text-muted-foreground">
            CLIENT FEEDBACK
          </h2>
        </Reveal>

        <div className="grid gap-px md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 80}>
              <figure className="flex h-full flex-col justify-between gap-10 border-b border-border py-12 md:px-8 md:[&:nth-child(even)]:border-l">
                <blockquote className="text-pretty text-2xl font-light leading-snug text-foreground md:text-3xl">
                  {t.quote}
                </blockquote>
                <figcaption>
                  <p className="font-display text-sm font-medium tracking-[0.15em] text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs tracking-[0.15em] text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
