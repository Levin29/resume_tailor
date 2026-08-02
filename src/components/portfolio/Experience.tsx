import { portfolio } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
          Experience
        </h2>
        <h3 className="mb-10 text-2xl font-bold tracking-tight text-foreground">
          Professional background
        </h3>

        <div className="space-y-6">
          {portfolio.experience.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h4 className="text-base font-semibold text-foreground">{job.role}</h4>
                  <p className="text-sm font-medium text-accent-light">{job.company}</p>
                  <p className="mt-1 text-xs text-muted">{job.description}</p>
                </div>
                <p className="mt-1 shrink-0 text-sm text-muted sm:mt-0">{job.period}</p>
              </div>
              <ul className="mt-4 space-y-2 border-t border-border pt-4">
                {job.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-light" />
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
