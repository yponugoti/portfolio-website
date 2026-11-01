import type { Portfolio } from "@/types"

/**
 * All of the content on the portfolio lives here.
 * Edit this file to update the site — no component changes needed.
 *
 * Blog posts still live as markdown files in `src/articles/`.
 */
export const portfolio: Portfolio = {
  name: "Yaswanth",
  tagline: "Software engineering student building thoughtful, reliable software.",
  location: "Your City, Country",
  about: [
    "I'm a software engineering student at [Your University], graduating in [Year]. I enjoy working across the stack — from designing clean APIs to crafting interfaces that feel effortless to use.",
    "Lately I've been exploring [an area you're interested in, e.g. distributed systems, ML, developer tooling]. Outside of code, you'll find me [a hobby or two].",
  ],
  email: "you@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-username" },
  ],
  // Drop a PDF into /public (e.g. public/resume.pdf) and point to it here,
  // or remove this line to hide the resume link.
  resume: "/resume.pdf",
  skills: {
    Languages: ["TypeScript", "Python", "Java", "C++", "SQL"],
    Frameworks: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    Tools: ["Git", "Docker", "PostgreSQL", "Linux"],
  },
  experience: [
    {
      role: "Software Engineering Intern",
      organization: "Company Name",
      location: "City, Country",
      start: "May 2026",
      end: "Aug 2026",
      highlights: [
        "Describe something you built and the impact it had — numbers help (e.g. reduced load time by 40%).",
        "Describe a second accomplishment, a system you worked on, or a skill you developed.",
      ],
      tech: ["TypeScript", "React", "AWS"],
    },
    {
      role: "Teaching Assistant",
      organization: "Your University",
      start: "Sep 2025",
      end: "Present",
      highlights: [
        "Led weekly lab sections for 30+ students in an introductory programming course.",
      ],
    },
  ],
  projects: [
    {
      name: "This Portfolio",
      description:
        "A personal site and markdown-powered blog built with the Next.js App Router and Tailwind CSS.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: [{ label: "Source", href: "https://github.com/your-username/portfolio" }],
    },
    {
      name: "Project Two",
      description:
        "A one or two sentence summary of what the project does, the problem it solves, and anything technically interesting about it.",
      tech: ["Python", "FastAPI", "PostgreSQL"],
      links: [
        { label: "Source", href: "https://github.com/your-username/project-two" },
        { label: "Live", href: "https://example.com" },
      ],
    },
    {
      name: "Project Three",
      description:
        "Another project summary. Hackathon projects, class projects, and side projects are all great here.",
      tech: ["React", "Node.js"],
      links: [{ label: "Source", href: "https://github.com/your-username/project-three" }],
    },
  ],
}
