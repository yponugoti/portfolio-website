import Link from "next/link"
import type { ReactNode } from "react"
import Marker from "./Marker"

interface Props {
  title: string
  n: number
  /** Optional page the title links to, e.g. "/writing". */
  href?: string
  /** Classes for the list itself. Defaults to a tight vertical list. */
  listClassName?: string
  children: ReactNode
}

/** A titled list with a "[n]" marker on the right, e.g. Contact or Experience. */
const IndexBlock = ({
  title,
  n,
  href,
  listClassName = "flex flex-col",
  children,
}: Props) => (
  <section className="flex-1 min-w-0 flex flex-col gap-1.5">
    <div className="flex items-baseline justify-between">
      <h2>
        {href ? (
          <Link href={href} className="hover:text-neutral-500 transition-colors">
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      <Marker n={n} />
    </div>
    <ul className={listClassName}>{children}</ul>
  </section>
)

export default IndexBlock
