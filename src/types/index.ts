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

export type Project = {
  name: string
  description: string
  tech: string[]
  /** Color of the little square next to the title. Defaults to black. */
  color?: string
  /** Cover image, path under /public, e.g. "/projects/my-app.jpg". Without one, the card shows a soft wash of `color`. */
  image?: string
  /** The whole card links to the first link. */
  links?: Link[]
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
