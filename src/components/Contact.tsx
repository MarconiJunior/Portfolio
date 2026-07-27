import Reveal from "@/components/Reveal";
import { contact } from "@/lib/content";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-mono text-[13px] text-signal-amber tracking-wide">
            OPEN TO NEW OPPORTUNITIES
          </p>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-paper max-w-xl">
            Building something that needs a bridge between old systems and
            new ones? Let&apos;s talk.
          </h2>

          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-flex items-center gap-3 font-display text-xl sm:text-2xl text-paper hover:text-signal-cyan transition-colors"
          >
            {contact.email}
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm text-mute">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-paper transition-colors">
              GitHub
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-paper transition-colors">
              LinkedIn
            </a>
            <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className="hover:text-paper transition-colors">
              {contact.phone}
            </a>
            <span>{contact.location}</span>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto max-w-5xl mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between font-mono text-[11px] text-mute/70">
        <p>© {year} Marconi Maciel Guimaraes Junior.</p>
        <p>Built with Next.js &amp; Tailwind CSS.</p>
      </div>
    </section>
  );
}
