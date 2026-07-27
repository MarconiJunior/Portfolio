import Reveal from "@/components/Reveal";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-display font-semibold text-2xl text-paper">
            Projects
          </h2>
          <div className="mt-3 h-px w-12 hairline" />
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.name} delayMs={i * 60} className="h-full">
              <article className="group h-full rounded-2xl border border-white/10 bg-surface/50 p-6 transition-colors hover:border-signal-cyan/30">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display font-semibold text-lg text-paper">
                    {project.name}
                  </h3>
                  <span className="shrink-0 font-mono text-[11px] text-mute">
                    {project.year}
                  </span>
                </div>

                <p className="mt-3 text-sm text-mute leading-relaxed">
                  {project.summary}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-mute group-hover:text-paper transition-colors"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
