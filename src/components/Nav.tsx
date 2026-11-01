import Link from "next/link"
import { portfolio } from "@/data/portfolio"

const links = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Writing", href: "/#writing" },
  { label: "Contact", href: "/#contact" },
]

const Nav = () => {
  return (
    <header className="sticky top-0 z-10 bg-neutral-100/85 backdrop-blur border-b border-neutral-900/5">
      <nav className="mx-auto max-w-3xl px-6 h-16 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="font-cormorantGaramond text-3xl text-neutral-900 shrink-0"
        >
          {portfolio.name}
        </Link>
        <ul className="flex gap-5 min-w-0 overflow-x-auto font-poppins text-sm text-neutral-600">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-amber-700 transition duration-150 whitespace-nowrap"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav
