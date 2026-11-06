import type { Portfolio } from "@/types"

/**
 * All of the content on the portfolio lives here.
 * Edit this file to update the site — no component changes needed.
 *
 * Blog posts live as markdown files in `src/articles/`,
 * and projects as markdown files in `src/projects/`.
 */
export const portfolio: Portfolio = {
  name: "Yaswanth Ponugoti",
  tagline: "Software Engineer",
  location: "Tempe, AZ",
  about: [
    "I enjoy finding novel approaches to open problems. These days, I'm exploring the systems and silicon at the frontier of computing.",
    "I'm a computer science and mathematics student at Arizona State University. Along the way, I've interned at Capital One, Garmin, and Fox.",
    "Elsewhere, you'll find me on the climbing wall, the soccer field, or at the poker table."
  ],
  email: "yponugoti14@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/yponugoti" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yponugoti/" },
  ],
  experience: [
    {
      role: "Software Engineering Intern",
      color: "#d03027", // color of the square next to it
      organization: "Capital One",
      start: "June 2026",
      end: "Aug 2026",
      highlights: [
      ],
    },
    {
      role: "Software Engineering Intern",
      color: "#007cc3",
      organization: "Garmin",
      start: "May 2025",
      end: "Nov 2025",
      highlights: [
      ]
    },
    {
      role: "Software Engineering Intern",
      color: "#f5a300",
      organization: "Fox Sports",
      start: "Sept 2024",
      end: "Dec 2024",
      highlights: [
      ]
    }
  ],
  // Set to false once you've published your first post in src/articles/.
  writingComingSoon: true,
}
