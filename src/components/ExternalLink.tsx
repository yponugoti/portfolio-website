import { ArrowUpRightIcon } from "@heroicons/react/24/solid"
import type { ReactNode } from "react"

interface Props {
  href: string
  children: ReactNode
  className?: string
}

/** A link that opens in a new tab when it points off-site. */
const ExternalLink = ({ href, children, className = "" }: Props) => {
  const isExternal = /^https?:\/\//.test(href)

  return (
    <a
      href={href}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      className={`inline-flex items-center gap-1 hover:text-amber-700 transition duration-150 ${className}`}
    >
      {children}
      <ArrowUpRightIcon width={14} />
    </a>
  )
}

export default ExternalLink
