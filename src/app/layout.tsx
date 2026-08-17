import type { Metadata } from "next";
import { Baskervville, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/data";

const baskerville = Baskervville({ weight: ["400"], subsets: ["latin"], variable: "--font-baskerville", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://zahiruddinzaki.my"),
  title: {
    default: `${site.name} | Operations Professional`,
    template: `%s | ${site.name}`,
  },
  description:
    "Zahiruddin Zaki | operations professional with a technical background. Process improvement, finance, and digital transformation. Built on operations. Led by purpose.",
  openGraph: {
    title: `${site.name} | Operations Professional`,
    description: "Built on operations. Led by purpose.",
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark');}catch(e){}`,
          }}
        />
      </head>
      <body className={`${baskerville.variable} ${inter.variable} font-sans min-h-screen flex flex-col bg-bg text-ink`}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
