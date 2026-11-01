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
}
