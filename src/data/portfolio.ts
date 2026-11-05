import type { Portfolio } from "@/types"

/**
 * All of the content on the portfolio lives here.
 * Edit this file to update the site — no component changes needed.
 *
 * Blog posts still live as markdown files in `src/articles/`.
 */
export const portfolio: Portfolio = {
  name: "Yash Ponugoti",
  tagline: "Software Engineer",
  location: "Tempe, AZ",
  about: [
    "I'm a CS student at ASU"
  ],
  email: "yponugoti14@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/yponugoti" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yponugoti/" },
  ],
  experience: [
    {
      role: "Software Engineering Intern",
      // color: "#d03027", // optional: color of the square next to it
      organization: "Capital One",
      start: "June 2026",
      end: "Aug 2026",
      highlights: [
      ],
    },
    {
      role: "Software Engineering Intern",
      organization: "Garmin",
      start: "May 2025",
      end: "Nov 2025",
      highlights: [
      ]
    },
    {
      role: "Software Engineering Intern",
      organization: "Fox Sports",
      start: "Sept 2024",
      end: "Dec 2024",
      highlights: [
      ]
    }
  ],
  // Each project is a card in the Projects grid. The card links to links[0].
  // Put cover images in public/projects/.
  projects: [
    // SAMPLES — replace or delete (and remove public/projects/sample.jpg)
    {
      name: "Sample Project",
      description:
        "A one or two sentence description of what the project does and who it's for.",
      tech: ["Next.js", "TypeScript"],
      color: "#2f7bf5",
      image: "/projects/sample.jpg",
      links: [{ label: "GitHub", href: "https://github.com/yponugoti" }],
    },
    {
      name: "Sample Without Image",
      description:
        "Cards without an image get a soft wash of the project's color instead.",
      tech: ["Python"],
      color: "#7c3aed",
    },
  ],
  // Set to false once you've published your first post in src/articles/.
  writingComingSoon: false,
}
