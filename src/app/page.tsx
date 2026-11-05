import ArticleRow from "@/components/ArticleRow"
import IndexBlock from "@/components/IndexBlock"
import Marker from "@/components/Marker"
import ProjectCard from "@/components/ProjectCard"
import Square from "@/components/Square"
import { portfolio } from "@/data/portfolio"
import { getRecentArticles } from "@/lib/articles"
import { formatYearRange } from "@/lib/format"

const RECENT_ARTICLE_COUNT = 5

const HomePage = () => {
  const recentArticles = getRecentArticles(RECENT_ARTICLE_COUNT)
  const showWriting = portfolio.writingComingSoon || recentArticles.length > 0

  const contactLinks = [
    { label: "Mail", href: `mailto:${portfolio.email}` },
    ...portfolio.socials,
    ...(portfolio.resume ? [{ label: "Resume", href: portfolio.resume }] : []),
  ]

  // Sections are numbered in order; hidden sections don't take a number.
  let sectionCount = 1
  const nextNumber = () => ++sectionCount
  const contactNumber = nextNumber()
  const experienceNumber = portfolio.experience.length > 0 ? nextNumber() : 0
  const projectsNumber = portfolio.projects.length > 0 ? nextNumber() : 0
  const writingNumber = showWriting ? nextNumber() : 0

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
        <IndexBlock title="Contact" n={contactNumber}>
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
            <IndexBlock title="Experience" n={experienceNumber}>
              {portfolio.experience.map((experience, i) => (
                <li
                  key={`${experience.organization}-${experience.role}`}
                  className="relative flex items-center justify-between gap-4"
                  title={experience.role}
                >
                  {/* Timeline: a faint line from this square down to the next one */}
                  {i < portfolio.experience.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-[2px] top-1/2 h-full w-px bg-neutral-200"
                    />
                  )}
                  <span className="relative flex items-center gap-1.5 min-w-0">
                    <Square color={experience.color} />
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

      {/* Projects */}
      {portfolio.projects.length > 0 && (
        <div className="mt-16">
          <IndexBlock
            title="Projects"
            n={projectsNumber}
            listClassName="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1.5"
          >
            {portfolio.projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </IndexBlock>
        </div>
      )}

      {/* Writing */}
      {showWriting && (
        <div className="mt-16">
          <IndexBlock title="Writing" n={writingNumber} href="/writing">
            {portfolio.writingComingSoon ? (
              <li className="text-neutral-500">Coming soon</li>
            ) : (
              recentArticles.map((article) => (
                <ArticleRow key={article.id} article={article} />
              ))
            )}
          </IndexBlock>
        </div>
      )}
    </div>
  )
}

export default HomePage
