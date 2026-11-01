import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
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
    <section className="mx-auto max-w-2xl px-6 mt-16 flex flex-col gap-5">
      <div className="flex justify-between font-poppins text-neutral-600">
        <Link
          href="/writing"
          className="flex flex-row gap-1 place-items-center hover:text-amber-700 transition duration-150"
        >
          <ArrowLeftIcon width={20} />
          <p>all writing</p>
        </Link>
        <p>{articleData.date}</p>
      </div>
      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
      />
    </section>
  )
}

export default Article
