import Image from "next/image"
import type { Project } from "@/types"
import { slugify } from "@/lib/slug"
import Square from "./Square"

const ProjectEntry = ({ project }: { project: Project }) => {
  const { name, description, year, color, links, credits, media } = project
  const href = links?.[0]?.href

  return (
    <article id={slugify(name)} className="scroll-mt-16 flex flex-col gap-3">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="flex items-baseline gap-1.5">
          <span className="self-center">
            <Square color={color} />
          </span>
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-500 transition-colors"
            >
              {name}
              <span className="font-mono text-[11px]"> ↗</span>
            </a>
          ) : (
            name
          )}
        </h3>
        {year && (
          <span className="font-mono text-[11px] text-neutral-500 tabular-nums">
            {year}
          </span>
        )}
      </div>

      {description && <p className="leading-snug">{description}</p>}

      {credits && (
        <>
          <hr className="w-4 border-neutral-200" />
          <p className="leading-snug">{credits}</p>
        </>
      )}

      {media && (
        <div
          className="relative w-full overflow-hidden bg-neutral-50 mt-2"
          style={{ aspectRatio: media.aspectRatio ?? "4 / 3" }}
        >
          {media.type === "video" ? (
            <video
              src={media.src}
              aria-label={media.alt}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 size-full object-cover"
            />
          ) : (
            <Image
              src={media.src}
              alt={media.alt ?? name}
              fill
              sizes="(min-width: 576px) 544px, 100vw"
              className="object-cover"
            />
          )}
        </div>
      )}
    </article>
  )
}

export default ProjectEntry
