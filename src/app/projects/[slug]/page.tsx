import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import ProjectCover from "@/components/ProjectCover"
import Square from "@/components/Square"
import { getProjectData, getProjectSlugs } from "@/lib/projects"

// Only projects that exist at build time are valid; anything else 404s.
export const dynamicParams = false

export const generateStaticParams = () =>
  getProjectSlugs().map((slug) => ({ slug }))

export const generateMetadata = async ({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> => {
  const { slug } = await params
  const project = await getProjectData(slug)
  return { title: project?.name, description: project?.description }
}

const ProjectPage = async ({ params }: PageProps<"/projects/[slug]">) => {
  const { slug } = await params
  const project = await getProjectData(slug)

  if (!project) {
    notFound()
  }

  return (
    <section className="flex flex-col">
      <header className="flex items-baseline justify-between gap-4 pb-6 mb-6 border-b border-neutral-200/70">
        <Link
          href="/projects"
          className="text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          ← Projects
        </Link>
        {project.tech && project.tech.length > 0 && (
          <span className="font-mono text-[11px] text-neutral-500 text-right">
            {project.tech.join(" · ")}
          </span>
        )}
      </header>

      <div className="flex flex-col gap-3 mb-8">
        <h1 className="flex items-center gap-1.5 text-lg">
          <Square color={project.color} />
          {project.name}
        </h1>
        {project.description && (
          <p className="leading-snug text-neutral-500">{project.description}</p>
        )}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-500 transition-colors"
              >
                {link.label}
                <span className="font-mono text-[11px]"> ↗</span>
              </a>
            ))}
          </div>
        )}
      </div>

      <ProjectCover
        project={project}
        sizes="(min-width: 576px) 544px, 100vw"
        className="rounded-md border border-neutral-200/70 mb-10"
      />

      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: project.contentHtml }}
      />
    </section>
  )
}

export default ProjectPage
