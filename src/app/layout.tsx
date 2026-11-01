import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import Nav from "@/components/Nav";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const cormorant_garamond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
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
      className={`${cormorant_garamond.variable} ${poppins.variable}`}
    >
      <body className="bg-neutral-100 text-neutral-900 min-h-screen flex flex-col">
        <Nav />
        <main className="grow">{children}</main>
        <footer className="mx-auto max-w-3xl w-full px-6 py-10 font-poppins text-sm text-neutral-500">
          © {new Date().getFullYear()} {portfolio.name}
        </footer>
      </body>
    </html>
  );
}
