import Reveal from "@/components/Reveal";
import SignalTrace from "@/components/SignalTrace";

const stats = [
  { label: "Location", value: "Belo Horizonte, Brazil" },
  { label: "Experience", value: "3+ years" },
  { label: "Stack", value: "Android • Full-Stack • DevOps" },
];

export default function Hero() {
  return (
    <section id="top" className="relative px-6 pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto max-w-5xl grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <Reveal>
            <p className="font-mono text-[13px] text-signal-amber tracking-wide">
              SOFTWARE ENGINEER
            </p>
          </Reveal>

          <Reveal delayMs={80}>
            <h1 className="mt-4 font-display font-bold text-4xl sm:text-5xl md:text-[3.4rem] leading-[1.05] tracking-tight text-paper">
              Marconi Maciel
              <br />
              Guimaraes Junior
            </h1>
          </Reveal>

          <Reveal delayMs={160}>
            <p className="mt-6 max-w-lg text-lg text-mute leading-relaxed">
              I am a{" "}
              <span className="text-signal-amber">Software Engineer</span> building
              Android, backend and enterprise applications with{" "}
              <span className="text-signal-cyan"> Kotlin, TypeScript and
              modern engineering practices</span>. From enterprise ERPs to scalable web and
              mobile platforms, I focus on creating reliable software that delivers real
              business impact.
            </p>
          </Reveal>

          <Reveal delayMs={240}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center rounded-full bg-paper text-ink px-6 py-3 font-medium text-sm hover:bg-signal-cyan transition-colors"
              >
                View my work
              </a>
              <a
                href="/resume.pdf"
                download="Marconi-Guimaraes-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-sm text-paper hover:border-signal-amber/60 hover:text-signal-amber transition-colors"
              >
                Download resume
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={320}>
            <dl className="mt-12 grid grid-cols-3 max-w-md gap-6 border-t border-white/10 pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-mono text-[11px] uppercase tracking-wide text-mute">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-sm text-paper">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delayMs={200} className="hidden md:block">
          <div className="rounded-2xl border border-white/10 bg-surface/60 p-6">
            <SignalTrace className="w-full h-auto" />
            <p className="mt-4 font-mono text-[11px] text-mute leading-relaxed">
              Turning complex business logic into modern software experiences.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
