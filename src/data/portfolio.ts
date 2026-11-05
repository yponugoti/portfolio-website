import type { Portfolio } from "@/types"

/**
 * All of the content on the portfolio lives here.
 * Edit this file to update the site — no component changes needed.
 *
 * Blog posts still live as markdown files in `src/articles/`.
 */
export const portfolio: Portfolio = {
  name: "Yaswanth",
  tagline: "Software Engineer",
  location: "Tempe, AZ",
  about: [
    "I'm a CS student at ASU"
  ],
  email: "you@example.com",
  socials: [
  ],
  experience: [
    {
      role: "Software Engineering Intern",
      // color: "#d03027", // optional: color of the square next to it
      organization: "Capital One",
      start: "May 2026",
      end: "Aug 2026",
      highlights: [
      ],
    },
  ],
  // Each project shows as an entry with optional media below the index, e.g.
  // {
  //   name: "My App",
  //   year: "2026",
  //   description: "What it does in one or two sentences.",
  //   tech: ["Next.js"],
  //   color: "#2f7bf5",
  //   links: [{ label: "Live", href: "https://..." }],
  //   credits: "With Jane Doe and John Smith",
  //   media: { type: "video", src: "/projects/my-app.mp4", aspectRatio: "4 / 3" },
  // },
  projects: [
  ],
  // Set to false once you've published your first post in src/articles/.
  writingComingSoon: true,
}
