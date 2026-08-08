import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl grid md:grid-cols-[0.4fr_0.6fr] gap-12 items-start">
        <Reveal className="md:sticky md:top-28">
          <div className="rounded-full p-[3px] w-36 bg-gradient-to-br from-signal-amber to-signal-cyan">
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
              I&apos;m a{" "}
              <span className="text-paper">Software Engineer</span> working across
              Android, backend and enterprise systems. At Multitecnica Industrial,
              I build and maintain software around TOTVS Protheus, ADVPL and
              Microsoft SQL Server while developing modern applications with
              Next.js, Angular and NestJS. Most of the codebase predates me by
              twenty years, and none of the SLAs care about that.
            </p>
          </Reveal>

          <Reveal delayMs={80}>
            <p>
              Before that, at Alghorit Tecnologia, I built native Android
              applications with Kotlin and Jetpack Compose, applying Clean
              Architecture, SOLID and automated testing. I also worked across
              backend systems and CI/CD, designing GitLab pipelines with Docker,
              as well as real-time communication systems using a custom WebRTC
              SFU server for an industrial field-communication platform.
            </p>
          </Reveal>

          <Reveal delayMs={160}>
            <p>
              I enjoy working across different layers of a system — from business
              logic and databases to APIs, mobile interfaces and deployment
              pipelines. Whatever the stack, I care about building software that
              is reliable, maintainable and honest about what the system is
              actually doing.
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
