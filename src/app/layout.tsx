import type { Metadata } from "next";
import { Bricolage_Grotesque, Work_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://marconiguimaraes.dev"),
  title: "Marconi Guimaraes — System Programmer & Full-Stack Developer",
  description:
    "Portfolio of Marconi Maciel Guimaraes Junior — system programmer bridging TOTVS Protheus/ADVPL enterprise systems with modern Next.js, Angular, NestJS and Kotlin stacks.",
  openGraph: {
    title: "Marconi Guimaraes — System Programmer & Full-Stack Developer",
    description:
      "I bridge legacy enterprise systems with modern web and mobile stacks.",
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
      </body>
    </html>
  );
}
