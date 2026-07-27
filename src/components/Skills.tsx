import Reveal from "@/components/Reveal";
import { languages, skillGroups } from "@/lib/content";

const trackDot: Record<string, string> = {
  legacy: "bg-signal-amber",
  modern: "bg-signal-cyan",
  neutral: "bg-mute",
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:py-32 bg-surface/30">
      <div className="mx-auto max-w-5xl grid md:grid-cols-[0.6fr_0.4fr] gap-14">
        <div>
          <Reveal>
            <h2 className="font-display font-semibold text-2xl text-paper">
              Skills
            </h2>
            <div className="mt-3 h-px w-12 hairline" />
          </Reveal>

          <div className="mt-10 space-y-7">
            {skillGroups.map((group, i) => (
              <Reveal key={group.label} delayMs={i * 50}>
                <div className="flex items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${trackDot[group.track]}`}
                  />
                  <p className="font-mono text-[12px] uppercase tracking-wide text-mute">
                    {group.label}
                  </p>
                </div>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-ink/40 px-3 py-1.5 text-sm text-paper"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <h2 className="font-display font-semibold text-2xl text-paper">
              Languages
            </h2>
            <div className="mt-3 h-px w-12 hairline" />
          </Reveal>

          <div className="mt-10 space-y-6">
            {languages.map((lang, i) => (
              <Reveal key={lang.name} delayMs={i * 60}>
                <div className="flex items-baseline justify-between">
                  <p className="text-paper font-medium">{lang.name}</p>
                  <p className="font-mono text-[11px] text-mute">
                    {lang.level}
                  </p>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-signal-amber to-signal-cyan"
                    style={{ width: `${lang.value}%` }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
