import Image from "next/image"
import type { Project } from "@/types"
import Square from "./Square"

const ProjectCard = ({ project }: { project: Project }) => {
  const { name, description, color = "#000", image, links } = project
  const href = links?.[0]?.href

  const content = (
    <>
      <div
        className="relative aspect-[16/10] overflow-hidden border-b border-neutral-200/70"
        style={
          image
            ? undefined
            : {
                background: `linear-gradient(135deg, color-mix(in srgb, ${color} 22%, white), color-mix(in srgb, ${color} 4%, white))`,
              }
        }
      >
        {image && (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 640px) 268px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="flex flex-col gap-1.5 p-3.5">
        <div className="flex items-center gap-1.5 min-w-0">
          <Square color={color} />
          <span className="truncate">{name}</span>
          {href && <span className="font-mono text-[11px]">↗</span>}
        </div>
        {description && (
          <p className="text-[13px] leading-snug text-neutral-500">
            {description}
          </p>
        )}
      </div>
    </>
  )

  const cardClassName =
    "group flex flex-col h-full overflow-hidden rounded-md border border-neutral-200/70 bg-white transition-colors"

  return (
    <li>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${cardClassName} hover:border-neutral-300`}
        >
          {content}
        </a>
      ) : (
        <div className={cardClassName}>{content}</div>
      )}
    </li>
  )
}

export default ProjectCard
