import Image from "next/image"
import type { Project } from "@/types"

interface Props {
  project: Pick<Project, "name" | "image" | "color">
  sizes: string
  className?: string
  imageClassName?: string
}

/** The project's cover image, or a soft wash of its color when there isn't one. */
const ProjectCover = ({ project, sizes, className = "", imageClassName = "" }: Props) => {
  const { name, image, color = "#000" } = project

  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden ${className}`}
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
          sizes={sizes}
          className={`object-cover ${imageClassName}`}
        />
      )}
    </div>
  )
}

export default ProjectCover
