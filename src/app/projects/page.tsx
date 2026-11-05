import type { Metadata } from "next"
import Link from "next/link"
import ProjectCard from "@/components/ProjectCard"
import { portfolio } from "@/data/portfolio"
import { getProjects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Projects",
}

const ProjectsPage = () => {
  const projects = getProjects()

  return (
    <section className="flex flex-col">
      <header className="flex items-baseline justify-between pb-6 border-b border-neutral-200/70">
        <h1 className="text-lg">
          <Link href="/" className="text-neutral-400 hover:text-neutral-900 transition-colors">
            {portfolio.name}
          </Link>
          <span className="text-neutral-300"> / </span>
          Projects
        </h1>
      </header>

      <div className="pt-6">
        {projects.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </ul>
        ) : (
          <p className="text-neutral-500">Nothing here yet — check back soon.</p>
        )}
      </div>
    </section>
  )
}

export default ProjectsPage
