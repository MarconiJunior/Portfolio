import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl grid md:grid-cols-[0.4fr_0.6fr] gap-12">
        <Reveal>
          <div className="rounded-full p-[3px] w-32 bg-gradient-to-br from-signal-amber to-signal-cyan">
            <div className="rounded-full overflow-hidden border-4 border-ink">
              <Image
                src="/images/marconi.jpg"
                alt="Marconi Maciel Guimaraes Junior"
                width={512}
                height={512}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>

          <h2 className="mt-6 font-display font-semibold text-2xl text-paper">
            About
          </h2>
          <div className="mt-3 h-px w-12 hairline" />
        </Reveal>

        <div className="space-y-6 text-mute leading-relaxed">
          <Reveal>
            <p>
              I&apos;m a system programmer at{" "}
              <span className="text-paper">Multitecnica Industrial</span>,
              where most of the codebase predates me by twenty years and none
              of the SLAs care about that. My job is making legacy ERP logic
              and modern web tooling agree on the same source of truth —
              customizing TOTVS Protheus in ADVPL on one side, and shipping
              Next.js, Angular and NestJS applications on the other.
            </p>
          </Reveal>

          <Reveal delayMs={80}>
            <p>
              Before that, at Alghorit Tecnologia, I worked across native
              Android with Kotlin and Jetpack Compose, cross-platform mobile,
              and real-time backend systems — including a custom SFU server
              for an industrial field-communication platform. I care about
              the same thing in every stack: does the interface tell the
              truth about what the system is actually doing.
            </p>
          </Reveal>

          <Reveal delayMs={160}>
            <div className="rounded-xl border border-white/10 bg-surface/50 p-5">
              <p className="font-mono text-[11px] uppercase tracking-wide text-signal-amber">
                Education
              </p>
              <p className="mt-2 text-paper font-medium">
                B.Sc. in Computer Science — UNA University Center
              </p>
              <p className="mt-1 text-sm">
                Feb 2022 – Dec 2025 · Algorithms &amp; Data Structures,
                Optimization, Computer Theory, Complexity Analysis, Operating
                Systems, Programming Languages, Software Engineering, AI.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
