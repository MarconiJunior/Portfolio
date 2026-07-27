"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-paper hover:text-signal-cyan transition-colors"
        >
          marconi<span className="text-signal-amber">.</span>guimaraes
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-[13px] text-mute">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-paper transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.docx"
          download="Marconi-Guimaraes-Resume.docx"
          className="hidden md:inline-flex items-center rounded-full border border-signal-cyan/30 px-4 py-1.5 font-mono text-[13px] text-signal-cyan hover:bg-signal-cyan/10 transition-colors"
        >
          Resume
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-paper p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? (
              <path d="M4 4L16 16M16 4L4 16" strokeLinecap="round" />
            ) : (
              <path d="M2 5H18M2 10H18M2 15H18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink/95 backdrop-blur-md border-b border-white/5">
          <ul className="flex flex-col px-6 py-4 gap-4 font-mono text-sm text-mute">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 hover:text-paper transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.docx"
                download="Marconi-Guimaraes-Resume.docx"
                onClick={() => setOpen(false)}
                className="block py-1 text-signal-cyan"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
