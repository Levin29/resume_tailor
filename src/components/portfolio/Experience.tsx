import { portfolio } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-surface px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="Experience" title="Where I've built impact." />

        <div className="space-y-4">
          {portfolio.experience.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow)] transition-shadow hover:shadow-[var(--shadow-lg)]"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-foreground">{job.role}</h3>
                  <p className="text-sm text-accent">{job.company}</p>
                  <p className="mt-1 text-xs text-muted">{job.description}</p>
                </div>
                <p className="shrink-0 text-sm text-muted">{job.period}</p>
              </div>
              <ul className="mt-6 space-y-3 border-t border-border pt-6">
                {job.highlights.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
