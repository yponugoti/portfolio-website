import fs from "fs"
import matter from "gray-matter"
import path from "path"
import moment from "moment"
import { remark } from "remark"
import html from "remark-html"

import type { ArticleItem } from "../types"

const articlesDirectory = path.join(process.cwd(), "src", "articles")

// Dates in article front matter are written as MM-DD-YYYY.
const DATE_FORMAT = "MM-DD-YYYY"

export const formatArticleDate = (date: string, format = "MMMM Do YYYY") =>
  moment(date, DATE_FORMAT).format(format)

export const getArticleIds = (): string[] =>
  fs
    .readdirSync(articlesDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""))

/** All articles, newest first. */
export const getSortedArticles = (): ArticleItem[] => {
  const allArticlesData = getArticleIds().map((id) => {
    const fullPath = path.join(articlesDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf-8")
    const matterResult = matter(fileContents)

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: matterResult.data.category,
    }
  })

  return allArticlesData.sort(
    (a, b) =>
      moment(b.date, DATE_FORMAT).valueOf() -
      moment(a.date, DATE_FORMAT).valueOf(),
  )
}

export const getRecentArticles = (count: number): ArticleItem[] =>
  getSortedArticles().slice(0, count)

export const getCategorisedArticles = (): Record<string, ArticleItem[]> => {
  const categorisedArticles: Record<string, ArticleItem[]> = {}

  getSortedArticles().forEach((article) => {
    if (!categorisedArticles[article.category]) {
      categorisedArticles[article.category] = []
    }
    categorisedArticles[article.category].push(article)
  })

  return categorisedArticles
}

/** Returns null if no article with this id exists. */
export const getArticleData = async (id: string) => {
  if (!getArticleIds().includes(id)) {
    return null
  }

  const fullPath = path.join(articlesDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf-8")
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  return {
    id,
    contentHtml: processedContent.toString(),
    title: matterResult.data.title as string,
    category: matterResult.data.category as string,
    date: formatArticleDate(matterResult.data.date),
  }
}
