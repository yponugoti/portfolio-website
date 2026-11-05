import fs from "fs"
import matter from "gray-matter"
import path from "path"

import type { Project } from "../types"
import { markdownToHtml } from "./markdown"

const projectsDirectory = path.join(process.cwd(), "src", "projects")

export const getProjectSlugs = (): string[] =>
  fs.existsSync(projectsDirectory)
    ? fs
        .readdirSync(projectsDirectory)
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => fileName.replace(/\.md$/, ""))
    : []

const readProjectFile = (slug: string) => {
  const fullPath = path.join(projectsDirectory, `${slug}.md`)
  const { data, content } = matter(fs.readFileSync(fullPath, "utf-8"))
  const project: Project = {
    slug,
    name: data.name ?? slug,
    description: data.description ?? "",
    color: data.color,
    image: data.image,
    cover: data.cover,
    tech: data.tech,
    links: data.links,
    order: data.order,
  }
  return { project, content }
}

/** All projects, sorted by `order` (then name). */
export const getProjects = (): Project[] =>
  getProjectSlugs()
    .map((slug) => readProjectFile(slug).project)
    .sort(
      (a, b) =>
        (a.order ?? Infinity) - (b.order ?? Infinity) ||
        a.name.localeCompare(b.name),
    )

/** Returns null if no project with this slug exists. */
export const getProjectData = async (slug: string) => {
  if (!getProjectSlugs().includes(slug)) {
    return null
  }

  const { project, content } = readProjectFile(slug)
  return { ...project, contentHtml: await markdownToHtml(content) }
}
