import type { Metadata } from "next"
import ArticleItemList from "@/components/ArticleListItem"
import { portfolio } from "@/data/portfolio"
import { getCategorisedArticles } from "@/lib/articles"

export const metadata: Metadata = {
  title: "Writing",
}

const WritingPage = () => {
  const articles = getCategorisedArticles()
  const categories = Object.keys(articles)

  return (
    <section className="mx-auto max-w-3xl px-6 mt-20 flex flex-col gap-16 mb-20">
      <header className="flex flex-col gap-3">
        <h1 className="font-cormorantGaramond text-6xl text-neutral-900">
          Writing
        </h1>
        <p className="font-poppins text-lg text-neutral-600">
          Notes, ideas, and things I&apos;ve learned along the way.
        </p>
      </header>
      {portfolio.writingComingSoon ? (
        <p className="font-poppins text-lg text-neutral-500">Coming soon.</p>
      ) : categories.length > 0 ? (
        <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
          {categories.map((category) => (
            <ArticleItemList
              category={category}
              articles={articles[category]}
              key={category}
            />
          ))}
        </section>
      ) : (
        <p className="font-poppins text-neutral-500">
          Nothing published yet — check back soon.
        </p>
      )}
    </section>
  )
}

export default WritingPage
