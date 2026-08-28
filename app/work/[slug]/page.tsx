import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { getProject, projects, shortFormVideos } from '@/lib/projects'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { YouTubeEmbed } from '@/components/youtube-embed'
import { ShortFormGrid } from '@/components/short-form-grid'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Project — AMMAR ADILOVIĆ' }
  return {
    title: `${project.title} — AMMAR ADILOVIĆ`,
    description: project.summary,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const relatedShortForm = project.shortForm
    ? shortFormVideos.filter((v) => project.shortForm?.includes(v.src))
    : []

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <>
      <SiteNav />
      <main className="px-5 pt-28 md:px-10 md:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-xs font-medium tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            ALL WORK
          </Link>

          <header className="mt-10 border-b border-border pb-10">
            <span className="font-display text-sm tabular-nums text-muted-foreground">
              {project.index}
            </span>
            <h1 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.9] tracking-[-0.02em] md:text-8xl">
              {project.title}
            </h1>
            <p className="mt-6 text-xs tracking-[0.2em] text-accent">{project.role}</p>
          </header>

          {/* Media */}
          {project.youtubeId && (
            <div className="mt-12">
              <YouTubeEmbed id={project.youtubeId} title={`${project.title} — long-form video`} />
            </div>
          )}

          {/* Details */}
          <div className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr] md:gap-16 md:py-16">
            <p className="text-pretty text-2xl font-light leading-snug text-foreground md:text-3xl">
              {project.description}
            </p>

            <dl className="flex flex-col gap-8">
              <div>
                <dt className="text-xs tracking-[0.25em] text-muted-foreground">CATEGORIES</dt>
                <dd className="mt-3 text-sm tracking-[0.15em] text-foreground">
                  {project.categories.join(' · ')}
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.25em] text-muted-foreground">WORK</dt>
                <dd className="mt-3 flex flex-col gap-1.5">
                  {project.work.map((w) => (
                    <span key={w} className="text-sm leading-relaxed text-muted-foreground">
                      {w}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          {/* Related short-form */}
          {relatedShortForm.length > 0 && (
            <div className="border-t border-border py-12 md:py-16">
              <h2 className="mb-10 font-display text-sm font-medium tracking-[0.3em] text-muted-foreground">
                SHORT-FORM WORK
              </h2>
              <ShortFormGrid videos={relatedShortForm} />
            </div>
          )}

          {/* Next project */}
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center justify-between gap-4 border-t border-border py-12 md:py-16"
          >
            <span className="flex flex-col gap-3">
              <span className="text-xs tracking-[0.25em] text-muted-foreground">NEXT PROJECT</span>
              <span className="font-display text-3xl font-semibold uppercase tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-6xl">
                {next.title}
              </span>
            </span>
            <ArrowUpRight
              size={28}
              className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground"
            />
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
