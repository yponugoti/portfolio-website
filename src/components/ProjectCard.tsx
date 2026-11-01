import type { Project } from "@/types"
import ExternalLink from "./ExternalLink"
import TechList from "./TechList"

const ProjectCard = ({ project }: { project: Project }) => {
  const { name, description, tech, links } = project

  return (
    <article className="flex flex-col gap-4 p-6 bg-white/60 border border-neutral-900/5 rounded-lg font-poppins">
      <h3 className="text-lg font-semibold text-neutral-900">{name}</h3>
      <p className="text-neutral-700 grow">{description}</p>
      <TechList items={tech} />
      {links && links.length > 0 && (
        <div className="flex gap-4 text-sm text-neutral-600">
          {links.map((link) => (
            <ExternalLink key={link.href} href={link.href}>
              {link.label}
            </ExternalLink>
          ))}
        </div>
      )}
    </article>
  )
}

export default ProjectCard
