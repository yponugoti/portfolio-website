import { Cormorant_Garamond, Poppins } from "next/font/google";
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant_garamond.variable} ${poppins.variable}`}
    >
      <body className="bg-neutral-100">
        {children}
      </body>
    </html>
  );
}
