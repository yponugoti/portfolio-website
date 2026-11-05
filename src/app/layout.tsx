import type { Metadata } from "next";
import { Geist_Mono, Newsreader } from "next/font/google";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: portfolio.name,
    template: `%s · ${portfolio.name}`,
  },
  description: portfolio.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${newsreader.variable} ${geistMono.variable}`}
    >
      <body className="bg-white text-neutral-800 font-serif text-[14px] tracking-[-0.01em] min-h-screen flex flex-col">
        <main className="grow w-full max-w-[34rem] mx-auto px-4 pt-20 md:pt-[22vh] pb-32">
          {children}
        </main>
      </body>
    </html>
  );
}
