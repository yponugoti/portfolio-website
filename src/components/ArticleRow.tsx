import Link from "next/link"
import { formatArticleDate } from "@/lib/articles"
import type { ArticleItem } from "@/types"

const ArticleRow = ({ article }: { article: ArticleItem }) => {
  return (
    <Link
      href={`/writing/${article.id}`}
      className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-4 border-b border-neutral-900/10 font-poppins"
    >
      <span className="text-lg text-neutral-900 group-hover:text-amber-700 transition duration-150">
        {article.title}
      </span>
      <span className="text-sm text-neutral-500 shrink-0">
        {article.category} · {formatArticleDate(article.date, "MMM D, YYYY")}
      </span>
    </Link>
  )
}

export default ArticleRow
