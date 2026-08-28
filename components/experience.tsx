import { Reveal } from '@/components/reveal'

const items = [
  {
    name: 'GORDON KAST',
    role: 'VIDEO EDITOR · VIDEOGRAPHER',
    note: 'Currently working with the client.',
  },
  {
    name: 'ADMIR SHERA',
    role: 'VIDEO EDITOR',
    note: 'Currently working with the client.',
  },
  {
    name: 'YURII',
    role: 'SHORT-FORM VIDEO EDITOR',
    note: 'TikTok and influencer content.',
  },
  {
    name: 'KENNY MARSHALL',
    role: 'FILMED & EDITED',
    note: 'Independent production.',
  },
  {
    name: 'FOOTBALL PLAYER PROFILE',
    role: 'VIDEOGRAPHY · EDITING',
    note: 'Sports player profile / CV project.',
  },
]

export function Experience() {
  return (
    <section className="px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="border-b border-border pb-6">
          <h2 className="font-display text-sm font-medium tracking-[0.3em] text-muted-foreground">
            EXPERIENCE
          </h2>
        </Reveal>

        <ul>
          {items.map((item, i) => (
            <li key={item.name}>
              <Reveal delay={i * 50}>
                <div className="grid grid-cols-1 gap-2 border-b border-border py-8 md:grid-cols-[1fr_1fr_1fr] md:items-center md:gap-8">
                  <h3 className="font-display text-2xl font-semibold uppercase tracking-tight md:text-3xl">
                    {item.name}
                  </h3>
                  <p className="text-xs tracking-[0.2em] text-accent md:text-center md:text-foreground">
                    {item.role}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-right">
                    {item.note}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
