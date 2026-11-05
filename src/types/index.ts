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

/** Front matter of a project markdown file in src/projects/. */
export type Project = {
  /** File name without .md, used in the URL: /projects/<slug> */
  slug: string
  name: string
  /** One or two sentences, shown on the card and at the top of the page. */
  description: string
  /** Color of the little square, and of the cover wash when there's no image. Defaults to black. */
  color?: string
  /** Cover image, path under /public, e.g. "/projects/my-app.jpg". */
  image?: string
  tech?: string[]
  /** External links shown on the project page, e.g. GitHub or a live demo. */
  links?: Link[]
  /** Lower numbers come first. Projects without one go last. */
  order?: number
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
  writingComingSoon?: boolean
}
