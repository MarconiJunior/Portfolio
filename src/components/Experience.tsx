import Reveal from "@/components/Reveal";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:py-32 bg-surface/30">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-display font-semibold text-2xl text-paper">
            Experience
          </h2>
          <div className="mt-3 h-px w-12 hairline" />
        </Reveal>

        <ol className="mt-14 relative">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-signal-amber/50 via-white/10 to-signal-cyan/50"
            aria-hidden="true"
          />

          {experience.map((role, i) => (
            <Reveal as="li" key={role.company + role.period} delayMs={i * 60}>
              <div className="relative pl-10 pb-14 last:pb-0">
                <span
                  className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-ink ${
                    role.track === "legacy" ? "bg-signal-amber" : "bg-signal-cyan"
                  } ${role.current ? "ring-2 ring-offset-2 ring-offset-surface/30 ring-current" : ""}`}
                />

                <p className="font-mono text-[12px] text-mute tracking-wide">
                  {role.period}
                  {role.current && (
                    <span className="ml-2 rounded-full bg-signal-cyan/15 text-signal-cyan px-2 py-0.5 text-[10px] uppercase tracking-wide">
                      Current
                    </span>
                  )}
                </p>

                <h3 className="mt-1.5 font-display font-semibold text-lg text-paper">
                  {role.role}
                </h3>
                <p className="text-sm text-mute">{role.company}</p>

                <p className="mt-3 text-sm text-mute/90 italic">
                  {role.context}
                </p>
                <p className="mt-2 max-w-2xl text-mute leading-relaxed">
                  {role.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
