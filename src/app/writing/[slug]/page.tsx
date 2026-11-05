import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getArticleData, getArticleIds } from "@/lib/articles"

// Only articles that exist at build time are valid; anything else 404s.
export const dynamicParams = false

export const generateStaticParams = () =>
  getArticleIds().map((slug) => ({ slug }))

export const generateMetadata = async ({
  params,
}: PageProps<"/writing/[slug]">): Promise<Metadata> => {
  const { slug } = await params
  const articleData = await getArticleData(slug)
  return { title: articleData?.title }
}

const Article = async ({ params }: PageProps<"/writing/[slug]">) => {
  const { slug } = await params
  const articleData = await getArticleData(slug)

  if (!articleData) {
    notFound()
  }

  return (
    <section className="flex flex-col">
      <header className="flex items-baseline justify-between gap-4 pb-[31px] mb-[31px] border-b border-[rgba(225,228,232,0.8)]">
        <Link
          href="/writing"
          className="text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          ← Writing
        </Link>
        <span className="font-mono text-[11px] text-neutral-500">
          {articleData.category} · {articleData.date}
        </span>
      </header>
      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
      />
    </section>
  )
}

export default Article
