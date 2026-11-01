import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import ArticleRow from "@/components/ArticleRow"
import ExperienceItem from "@/components/ExperienceItem"
import ExternalLink from "@/components/ExternalLink"
import ProjectCard from "@/components/ProjectCard"
import Section from "@/components/Section"
import TechList from "@/components/TechList"
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
        </div>
        <div className="flex flex-col gap-4 font-poppins text-lg text-neutral-700 leading-relaxed">
          {portfolio.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className="flex flex-col gap-3 font-poppins">
          {Object.entries(portfolio.skills).map(([group, items]) => (
            <div key={group} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <dt className="text-sm text-neutral-500 sm:w-24 shrink-0 pt-1">
                {group}
              </dt>
              <dd>
                <TechList items={items} />
              </dd>
            </div>
          ))}
        </dl>
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
          <Link
            href="/writing"
            className="flex items-center gap-1 font-poppins text-sm text-neutral-600 hover:text-amber-700 transition duration-150"
          >
            All writing <ArrowRightIcon width={14} />
          </Link>
        }
      >
        {recentArticles.length > 0 ? (
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

      <Section id="contact" title="Contact">
        <div className="flex flex-col gap-6 font-poppins text-lg text-neutral-700">
          <p>
            I&apos;m currently open to internship and new-grad opportunities.
            Whether you have a role in mind, a question, or just want to say hi,
            my inbox is always open.
          </p>
          <a
            href={`mailto:${portfolio.email}`}
            className="self-start px-6 py-3 bg-neutral-900 text-neutral-50 rounded-md hover:bg-amber-700 transition duration-150"
          >
            Say hello
          </a>
        </div>
      </Section>
    </div>
  )
}

export default HomePage
