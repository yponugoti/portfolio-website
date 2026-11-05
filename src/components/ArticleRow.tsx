import Link from "next/link"
import { formatArticleDate } from "@/lib/articles"
import type { ArticleItem } from "@/types"

const ArticleRow = ({ article }: { article: ArticleItem }) => (
  <li>
    <Link
      href={`/writing/${article.id}`}
      className="flex items-baseline justify-between gap-4 hover:text-neutral-500 transition-colors"
    >
      <span>{article.title}</span>
      <span className="font-mono text-[11px] text-neutral-500 tabular-nums shrink-0">
        {formatArticleDate(article.date, "MM.DD.YY")}
      </span>
    </Link>
  </li>
)

export default ArticleRow
