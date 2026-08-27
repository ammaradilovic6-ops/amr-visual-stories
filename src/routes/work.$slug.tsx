import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, projects, clipsFor } from "@/data/projects";
import { PlaceholderMedia, YouTubeMedia } from "@/components/site/Media";
import { ShortFormCard } from "@/components/site/ShortForm";
import { Reveal } from "@/components/site/Reveal";


export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Not found — .AMR" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — .AMR · Ammar Adilović`;
    return {
      meta: [
        { title },
        { name: "description", content: project.description },
        { property: "og:title", content: title },
        { property: "og:description", content: project.description },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <article className="shell pt-16 md:pt-24">
      <Reveal>
        <Link to="/work" className="eyebrow link-underline text-foreground">
          ← Work
        </Link>
        <h1 className="display mt-8 text-[13vw] leading-[0.9] md:text-[7.5vw]">
          {project.title}
        </h1>
      </Reveal>

      {/* Large media — CSS only until real media for this project is supplied */}
      <Reveal delay={80} className="mt-10 md:mt-14">
        <PlaceholderMedia
          title={project.title}
          meta={project.categories.join(" / ")}
          cta="Media coming soon"
          ratio="aspect-[16/10] md:aspect-[21/9]"
          size="lg"
        />
      </Reveal>

      <div className="mt-14 grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="eyebrow">Categories</p>
          <ul className="mt-3 space-y-1 text-sm text-foreground">
            {project.categories.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="eyebrow mt-10">Credit</p>
          <p className="mt-3 text-sm text-muted-foreground">Edited by .AMR</p>
        </Reveal>

        <Reveal delay={80} className="md:col-span-8">
          <p className="max-w-2xl text-lg leading-relaxed text-foreground md:text-2xl">
            {project.description}
          </p>

          <h2 className="display hairline mt-14 pt-6 text-2xl md:text-4xl">What I Did</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-2 text-sm text-muted-foreground sm:grid-cols-2">
            {project.role.map((r) => (
              <li key={r} className="border-t border-border pt-2">
                {r}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <section className="mt-24 md:mt-32">
        <Reveal>
          <h2 className="display hairline pt-6 text-2xl md:text-4xl">Related Projects</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                data-cursor="VIEW PROJECT"
                className="group block cursor-none"
              >
                <div className="media-block aspect-[4/3] transition-colors duration-500 group-hover:border-foreground/30">
                  <div className="flex h-full flex-col justify-end p-5">
                    <span className="eyebrow">{p.categories[0]}</span>
                    <p className="display mt-1 text-2xl">{p.title}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </article>
  );
}
