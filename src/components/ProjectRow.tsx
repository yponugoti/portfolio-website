import type { Project } from "@/types"
import Square from "./Square"

const ProjectRow = ({ project }: { project: Project }) => {
  const { name, description, year, color, links } = project
  const href = links?.[0]?.href

  return (
    <li className="flex flex-col not-last:pb-2">
      <div className="flex items-center justify-between gap-4">
        <span className="flex items-center gap-1.5 min-w-0">
          <Square color={color} />
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="truncate hover:text-neutral-500 transition-colors"
            >
              {name}
              <span className="font-mono text-[11px]"> ↗</span>
            </a>
          ) : (
            <span className="truncate">{name}</span>
          )}
        </span>
        {year && (
          <span className="font-mono text-[11px] tabular-nums shrink-0">
            {year}
          </span>
        )}
      </div>
      {description && (
        <p className="pl-[11px] pt-0.5 leading-snug text-neutral-500">
          {description}
        </p>
      )}
    </li>
  )
}

export default ProjectRow
