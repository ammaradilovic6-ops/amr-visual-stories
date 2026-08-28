'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

export function YouTubeEmbed({
  id,
  title,
}: {
  id: string
  title: string
}) {
  const [active, setActive] = useState(false)

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-md border border-border bg-surface">
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 h-full w-full cursor-pointer"
          aria-label={`Play ${title}`}
        >
          {/* Real YouTube thumbnail — no generated imagery */}
          <img
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt={`${title} — long-form video thumbnail`}
            className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget
              if (!img.dataset.fallback) {
                img.dataset.fallback = '1'
                img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
              }
            }}
          />
          <span className="absolute inset-0 bg-background/20 transition-colors group-hover:bg-background/10" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/60 bg-background/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
            <Play size={24} className="translate-x-0.5 fill-foreground text-foreground" />
          </span>
        </button>
      )}
    </div>
  )
}
