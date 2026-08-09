import { Analytics } from "@vercel/analytics/next";
import { Bricolage_Grotesque, JetBrains_Mono, Work_Sans } from "next/font/google";

import "./globals.css";

import type { Metadata } from "next";
const display = Bricolage_Grotesque({
  variable: "--font-display-src",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const body = Work_Sans({
  variable: "--font-body-src",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-src",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marconiguimaraes.com"),
  title: "Marconi Guimaraes — Software Engineer",
  description:
    "Software Engineer specializing in Android, backend and enterprise software. Experienced with Kotlin, Jetpack Compose, NestJS, Next.js, CI/CD and scalable system design.",
  openGraph: {
    title: "Marconi Guimaraes — Software Engineer",
    description:
      "Building scalable Android, backend and enterprise solutions with modern software engineering practices.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper font-body antialiased selection:bg-signal-cyan/30 selection:text-paper">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
