import type { Metadata } from "next"
import Link from "next/link"
import ArticleRow from "@/components/ArticleRow"
import Marker from "@/components/Marker"
import { portfolio } from "@/data/portfolio"
import { getCategorisedArticles } from "@/lib/articles"

export const metadata: Metadata = {
  title: "Writing",
}

const WritingPage = () => {
  const articles = getCategorisedArticles()
  const categories = Object.keys(articles)

  return (
    <section className="flex flex-col">
      <header className="flex items-baseline justify-between pb-[31px] border-b border-[rgba(225,228,232,0.8)]">
        <h1 className="text-[18px] leading-[22px] tracking-[-0.03em]">
          <Link href="/" className="text-neutral-400 hover:text-neutral-900 transition-colors">
            {portfolio.name}
          </Link>
          <span className="text-neutral-300"> / </span>
          Writing
        </h1>
      </header>

      <div className="pt-[31px] flex flex-col gap-[84px]">
        {portfolio.writingComingSoon ? (
          <p className="text-neutral-500">Coming soon.</p>
        ) : categories.length > 0 ? (
          categories.map((category, i) => (
            <div key={category} className="flex flex-col gap-1.5">
              <div className="flex items-baseline justify-between">
                <h2>{category}</h2>
                <Marker n={i + 1} />
              </div>
              <ul className="flex flex-col">
                {articles[category].map((article) => (
                  <ArticleRow key={article.id} article={article} />
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-neutral-500">Nothing published yet — check back soon.</p>
        )}
      </div>
    </section>
  )
}

export default WritingPage
