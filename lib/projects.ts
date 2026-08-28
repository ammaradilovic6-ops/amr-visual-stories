export type Project = {
  slug: string
  index: string
  title: string
  role: string
  categories: string[]
  summary: string
  work: string[]
  description: string
  youtubeId?: string
  shortForm?: string[]
}

export const projects: Project[] = [
  {
    slug: 'gordon-kast',
    index: '01',
    title: 'GORDON KAST',
    role: 'VIDEO EDITOR · VIDEOGRAPHER',
    categories: ['LONG-FORM', 'SHORT-FORM', 'VIDEOGRAPHY'],
    summary:
      'Editing and filming across interviews, vlogs and event content around crypto and Binance events.',
    work: [
      'Long-form editing',
      'Short-form editing',
      'Interview filming',
      'Vlog filming',
      'Event filming',
      'Post-production',
    ],
    description:
      'I worked on both editing and filming content, including interviews, vlogs and event-related content around crypto and Binance events. The work spans full post-production as well as on-location capture.',
    shortForm: [
      'gordon-shortform-01.mp4',
      'gordon-shortform-02.mp4',
      'gordon-shortform-03.mp4',
    ],
  },
  {
    slug: 'admir-shera',
    index: '02',
    title: 'ADMIR SHERA',
    role: 'VIDEO EDITOR',
    categories: ['LONG-FORM', 'SHORT-FORM', 'SOCIAL'],
    summary:
      'Long-form and short-form editing focused on storytelling, pacing and visual enhancement.',
    work: [
      'Long-form editing',
      'Short-form editing',
      'Social media editing',
      'Storytelling',
      'Pacing',
      'Visual enhancement',
    ],
    description:
      'Editing across long-form and short-form deliverables with a focus on storytelling, pacing and visual enhancement for social platforms.',
    shortForm: ['admir-shortform-01.mp4', 'admir-shortform-02.mp4'],
  },
  {
    slug: 'kenny-marshal',
    index: '03',
    title: 'KENNY MARSHAL',
    role: 'FILMED & EDITED',
    categories: ['VIDEOGRAPHY', 'EDITING', 'PRODUCTION'],
    summary: 'A long-form piece, filmed and edited end to end.',
    work: ['Videography', 'Editing', 'Production', 'Post-production'],
    description:
      'An independent long-form production — filmed and edited end to end, covering videography, editing and production.',
    youtubeId: 'LRIP0yRXU20',
  },
  {
    slug: 'yurii',
    index: '04',
    title: 'YURII',
    role: 'SHORT-FORM VIDEO EDITOR',
    categories: ['SHORT-FORM', 'TIKTOK', 'INFLUENCER'],
    summary: 'Short-form and TikTok editing for influencer content.',
    work: ['Short-form editing', 'TikTok editing', 'Influencer content'],
    description:
      'Short-form editing built for TikTok and influencer content — fast, retention-focused cuts made for vertical feeds.',
  },
  {
    slug: 'football-player-profile',
    index: '05',
    title: 'FOOTBALL PLAYER PROFILE',
    role: 'VIDEOGRAPHY · EDITING',
    categories: ['SPORTS', 'VIDEOGRAPHY', 'EDITING'],
    summary: 'Filmed and edited a football CV / player profile video.',
    work: ['Sports videography', 'Filming', 'Editing', 'Post-production'],
    description:
      'Filmed and edited a football CV / player profile video — a sports-focused piece built to present a player on camera.',
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export type ShortFormVideo = {
  src: string
  client: string
  label: string
}

export type LongFormVideo = {
  youtubeId: string
  featured?: boolean
}

// Real long-form / featured videos. Kenny Marshal is the featured piece and
// also appears on the home page. Titles are pulled live from YouTube — none invented.
export const longFormVideos: LongFormVideo[] = [
  { youtubeId: 'LRIP0yRXU20', featured: true },
  { youtubeId: 'l7b7hpGra8U' },
  { youtubeId: 'mi5nyErchKA' },
  { youtubeId: 'd2uj8zEG9EA' },
]

export const shortFormVideos: ShortFormVideo[] = [
  { src: 'gordon-shortform-01.mp4', client: 'GORDON KAST', label: 'SHORT-FORM EDITING' },
  { src: 'gordon-shortform-02.mp4', client: 'GORDON KAST', label: 'SHORT-FORM EDITING' },
  { src: 'gordon-shortform-03.mp4', client: 'GORDON KAST', label: 'SHORT-FORM EDITING' },
  { src: 'admir-shortform-01.mp4', client: 'ADMIR SHERA', label: 'SHORT-FORM EDITING' },
  { src: 'admir-shortform-02.mp4', client: 'ADMIR SHERA', label: 'SHORT-FORM EDITING' },
]
