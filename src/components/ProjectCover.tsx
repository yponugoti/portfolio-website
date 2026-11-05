import Image from "next/image"
import type { Project } from "@/types"
import CoverArt from "./covers/CoverArt"

interface Props {
  project: Pick<Project, "slug" | "name" | "image" | "color" | "cover">
  sizes: string
  className?: string
  imageClassName?: string
}

/** The project's cover image, or generated artwork in its color when there isn't one. */
const ProjectCover = ({
  project,
  sizes,
  className = "",
  imageClassName = "",
}: Props) => {
  const { slug, name, image, color = "#000", cover = "grain" } = project

  return (
    <div className={`relative aspect-[16/10] overflow-hidden ${className}`}>
      {image ? (
        <Image
          src={image}
          alt={name}
          fill
          sizes={sizes}
          className={`object-cover ${imageClassName}`}
        />
      ) : (
        <CoverArt
          style={cover}
          color={color}
          seed={slug}
          name={name}
        />
      )}
    </div>
  )
}

export default ProjectCover
