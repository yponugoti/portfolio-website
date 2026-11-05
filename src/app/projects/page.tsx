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
      <header className="flex items-baseline justify-between pb-[31px] border-b border-[rgba(225,228,232,0.8)]">
        <h1 className="text-[18px] leading-[22px] tracking-[-0.03em]">
          <Link href="/" className="text-neutral-400 hover:text-neutral-900 transition-colors">
            {portfolio.name}
          </Link>
          <span className="text-neutral-300"> / </span>
          Projects
        </h1>
      </header>

      <div className="pt-[31px]">
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
