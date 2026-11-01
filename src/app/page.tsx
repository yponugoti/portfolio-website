import Link from "next/link"
import { ArrowRightIcon, MapPinIcon } from "@heroicons/react/24/solid"
import ArticleRow from "@/components/ArticleRow"
import ExperienceItem from "@/components/ExperienceItem"
import ExternalLink from "@/components/ExternalLink"
import ProjectCard from "@/components/ProjectCard"
import Section from "@/components/Section"
import { portfolio } from "@/data/portfolio"
import { getRecentArticles } from "@/lib/articles"

const RECENT_ARTICLE_COUNT = 3

const HomePage = () => {
  const recentArticles = getRecentArticles(RECENT_ARTICLE_COUNT)

  return (
    <div className="mx-auto max-w-3xl px-6 flex flex-col gap-28 pt-20 pb-10">
      {/* Hero / About */}
      <section id="about" className="scroll-mt-24 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p className="font-poppins text-amber-700">Hi, I&apos;m</p>
          <h1 className="font-cormorantGaramond text-6xl md:text-7xl text-neutral-900">
            {portfolio.name}
          </h1>
          <p className="font-poppins text-xl text-neutral-600">
            {portfolio.tagline}
          </p>
          {portfolio.location && (
            <p className="flex items-center gap-1.5 font-poppins text-neutral-500">
              <MapPinIcon width={18} />
              {portfolio.location}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-4 font-poppins text-lg text-neutral-700 leading-relaxed">
          {portfolio.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="flex flex-wrap gap-5 font-poppins text-neutral-700">
          {portfolio.socials.map((social) => (
            <ExternalLink key={social.href} href={social.href}>
              {social.label}
            </ExternalLink>
          ))}
          {portfolio.resume && (
            <ExternalLink href={portfolio.resume}>Resume</ExternalLink>
          )}
        </div>
      </section>

      <Section id="experience" title="Experience">
        <div className="flex flex-col gap-12">
          {portfolio.experience.map((experience) => (
            <ExperienceItem
              key={`${experience.organization}-${experience.role}`}
              experience={experience}
            />
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-5">
          {portfolio.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Section>

      <Section
        id="writing"
        title="Writing"
        action={
          !portfolio.writingComingSoon && (
            <Link
              href="/writing"
              className="flex items-center gap-1 font-poppins text-sm text-neutral-600 hover:text-amber-700 transition duration-150"
            >
              All writing <ArrowRightIcon width={14} />
            </Link>
          )
        }
      >
        {portfolio.writingComingSoon ? (
          <p className="font-poppins text-lg text-neutral-500">Coming soon.</p>
        ) : recentArticles.length > 0 ? (
          <div className="flex flex-col">
            {recentArticles.map((article) => (
              <ArticleRow key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <p className="font-poppins text-neutral-500">
            Nothing published yet — check back soon.
          </p>
        )}
      </Section>
    </div>
  )
}

export default HomePage
