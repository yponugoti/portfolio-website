import Link from "next/link"
import type { Project } from "@/types"
import ProjectCover from "./ProjectCover"
import Square from "./Square"

const ProjectCard = ({ project }: { project: Project }) => {
  const { slug, name, description, color } = project

  return (
    <li>
      <Link
        href={`/projects/${slug}`}
        className="group flex flex-col h-full overflow-hidden rounded-md border border-neutral-200/70 bg-white hover:border-neutral-300 transition-colors"
      >
        <ProjectCover
          project={project}
          sizes="(min-width: 640px) 268px, 100vw"
          className="border-b border-neutral-200/70"
          imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="flex flex-col gap-1.5 p-3.5">
          <div className="flex items-center gap-1.5 min-w-0">
            <Square color={color} />
            <span className="truncate">{name}</span>
          </div>
          {description && (
            <p className="text-[13px] leading-snug text-neutral-500">
              {description}
            </p>
          )}
        </div>
      </Link>
    </li>
  )
}

export default ProjectCard
