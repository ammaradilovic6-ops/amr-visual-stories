'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Play, Volume2, VolumeX } from 'lucide-react'
import type { ShortFormVideo } from '@/lib/projects'
import { Reveal } from '@/components/reveal'

export function ShortFormGrid({ videos }: { videos: ShortFormVideo[] }) {
  const refs = useRef<(HTMLVideoElement | null)[]>([])
  const [playing, setPlaying] = useState<number | null>(null)
  const [sound, setSound] = useState<number | null>(null)
  const [hoverCapable, setHoverCapable] = useState(true)

  useEffect(() => {
    setHoverCapable(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
  }, [])

  const playOnly = useCallback((index: number) => {
    refs.current.forEach((v, i) => {
      if (!v) return
      if (i === index) void v.play().catch(() => {})
      else v.pause()
    })
    setPlaying(index)
  }, [])

  const pause = useCallback((index: number) => {
    const v = refs.current[index]
    if (v) v.pause()
    setPlaying((p) => (p === index ? null : p))
  }, [])

  const toggleTap = useCallback(
    (index: number) => {
      if (playing === index) pause(index)
      else playOnly(index)
    },
    [playing, pause, playOnly],
  )

  const toggleSound = useCallback(
    (index: number, e: React.MouseEvent) => {
      e.stopPropagation()
      setSound((prev) => {
        const next = prev === index ? null : index
        refs.current.forEach((v, i) => {
          if (v) v.muted = i !== next
        })
        return next
      })
      if (sound !== index) playOnly(index)
    },
    [sound, playOnly],
  )

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
      {videos.map((vid, i) => {
        const isPlaying = playing === i
        const isUnmuted = sound === i
        return (
          <Reveal key={vid.src + i} delay={i * 60}>
            <figure
              className="group flex flex-col gap-3"
              onMouseEnter={hoverCapable ? () => playOnly(i) : undefined}
              onMouseLeave={hoverCapable ? () => pause(i) : undefined}
            >
              <div
                className="relative aspect-[9/16] cursor-pointer overflow-hidden rounded-md border border-border bg-black"
                onClick={() => toggleTap(i)}
                role="button"
                tabIndex={0}
                aria-label={`${vid.client} short-form video — ${isPlaying ? 'pause' : 'play'}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggleTap(i)
                  }
                }}
              >
                <video
                  ref={(el) => {
                    refs.current[i] = el
                  }}
                  src={`/videos/${vid.src}`}
                  className="h-full w-full object-contain"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />

                {!isPlaying && (
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/25 transition-opacity duration-300 group-hover:opacity-0">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/50 bg-background/40 backdrop-blur-sm">
                      <Play size={18} className="translate-x-0.5 fill-foreground text-foreground" />
                    </span>
                  </span>
                )}

                <button
                  type="button"
                  onClick={(e) => toggleSound(i, e)}
                  aria-label={isUnmuted ? 'Mute video' : 'Unmute video'}
                  className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur-sm transition-colors hover:border-foreground"
                >
                  {isUnmuted ? <Volume2 size={15} /> : <VolumeX size={15} />}
                </button>
              </div>

              <figcaption className="flex flex-col gap-0.5">
                <span className="font-display text-xs font-medium tracking-[0.15em] text-foreground">
                  {vid.client}
                </span>
                <span className="text-[11px] tracking-[0.15em] text-muted-foreground">
                  {vid.label}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        )
      })}
    </div>
  )
}
