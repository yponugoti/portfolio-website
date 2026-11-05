export type ArticleItem = {
  id: string
  title: string
  date: string
  category: string
}

export type Link = {
  label: string
  href: string
}

export type Experience = {
  role: string
  /** Color of the little square next to the entry, e.g. "#d03027". Defaults to black. */
  color?: string
  organization: string
  location?: string
  start: string
  end: string
  highlights: string[]
  tech?: string[]
}

export type Media = {
  type: "image" | "video"
  /** Path under /public, e.g. "/projects/demo.mp4" */
  src: string
  alt?: string
  /** CSS aspect ratio for the frame, e.g. "4 / 5". Defaults to "4 / 3". */
  aspectRatio?: string
}

export type Project = {
  name: string
  description: string
  tech: string[]
  year?: string
  /** Color of the little square next to the title. Defaults to black. */
  color?: string
  /** The project title links to the first link. */
  links?: Link[]
  /** e.g. "With Jane Doe and John Smith" */
  credits?: string
  media?: Media
}

export type Portfolio = {
  name: string
  tagline: string
  about: string[]
  location?: string
  email: string
  socials: Link[]
  resume?: string
  experience: Experience[]
  projects: Project[]
  writingComingSoon?: boolean
}
