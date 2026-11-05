import Link from "next/link"
import ArticleRow from "@/components/ArticleRow"
import IndexBlock from "@/components/IndexBlock"
import Marker from "@/components/Marker"
import ProjectEntry from "@/components/ProjectEntry"
import Square from "@/components/Square"
import { portfolio } from "@/data/portfolio"
import { getRecentArticles } from "@/lib/articles"
import { formatYearRange } from "@/lib/format"

const RECENT_ARTICLE_COUNT = 5

const HomePage = () => {
  const recentArticles = getRecentArticles(RECENT_ARTICLE_COUNT)
  const showWriting = !portfolio.writingComingSoon && recentArticles.length > 0

  const contactLinks = [
    { label: "Mail", href: `mailto:${portfolio.email}` },
    ...portfolio.socials,
    ...(portfolio.resume ? [{ label: "Resume", href: portfolio.resume }] : []),
  ]

  return (
    <div className="flex flex-col">
      {/* Intro */}
      <header className="flex flex-col gap-4 pb-6 border-b border-neutral-200/70">
        <div className="flex items-baseline justify-between">
          <h1 className="text-lg">{portfolio.name}</h1>
          <Marker n={1} />
        </div>
        <div className="flex flex-col gap-3 leading-snug">
          {portfolio.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </header>

      {/* Index */}
      <div className="pt-6 flex flex-col md:flex-row gap-8 md:gap-0">
        <IndexBlock title="Contact" n={2}>
          {contactLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                {...(/^https?:/.test(link.href) && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="flex items-baseline justify-between hover:text-neutral-500 transition-colors"
              >
                <span>
                  <sup className="text-[0.65em] mr-0.5">{i + 1}</sup>
                  {link.label}
                </span>
                <span className="font-mono text-[11px]">↗</span>
              </a>
            </li>
          ))}
        </IndexBlock>

        {portfolio.experience.length > 0 && (
          <>
            <div
              aria-hidden
              className="hidden md:block w-px mx-8 mt-5 bg-neutral-200/70"
            />
            <IndexBlock title="Experience" n={3}>
              {portfolio.experience.map((experience) => (
                <li
                  key={`${experience.organization}-${experience.role}`}
                  className="flex items-baseline justify-between gap-4"
                  title={experience.role}
                >
                  <span className="flex items-baseline gap-1.5 min-w-0">
                    <span className="self-center">
                      <Square color={experience.color} />
                    </span>
                    <span className="truncate">{experience.organization}</span>
                  </span>
                  <span className="font-mono text-[11px] tabular-nums shrink-0">
                    {formatYearRange(experience.start, experience.end)}
                  </span>
                </li>
              ))}
            </IndexBlock>
          </>
        )}
      </div>

      {/* Writing */}
      {showWriting && (
        <section className="mt-16 flex flex-col gap-1.5">
          <div className="flex items-baseline justify-between">
            <h2>
              <Link
                href="/writing"
                className="hover:text-neutral-500 transition-colors"
              >
                Writing
              </Link>
            </h2>
            <Marker n={4} />
          </div>
          <ul className="flex flex-col leading-[1.15]">
            {recentArticles.map((article) => (
              <ArticleRow key={article.id} article={article} />
            ))}
          </ul>
        </section>
      )}

      {/* Projects */}
      {portfolio.projects.length > 0 && (
        <div className="mt-20 flex flex-col gap-20">
          {portfolio.projects.map((project) => (
            <ProjectEntry key={project.name} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}

export default HomePage
