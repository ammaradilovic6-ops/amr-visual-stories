import { shortFormVideos } from '@/lib/projects'
import { Reveal } from '@/components/reveal'
import { ShortFormGrid } from '@/components/short-form-grid'

export function ShortForm() {
  return (
    <section className="px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="flex items-end justify-between border-b border-border pb-6">
          <h2 className="font-display text-sm font-medium tracking-[0.3em] text-muted-foreground">
            SHORT-FORM WORK
          </h2>
          <span className="hidden text-xs tracking-[0.15em] text-muted-foreground md:block">
            HOVER OR TAP TO PLAY · TAP ICON FOR SOUND
          </span>
        </Reveal>

        <div className="mt-10">
          <ShortFormGrid videos={shortFormVideos} />
        </div>
      </div>
    </section>
  )
}
