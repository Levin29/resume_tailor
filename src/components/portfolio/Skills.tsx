import { portfolio } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border bg-white px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
          Skills
        </h2>
        <h3 className="mb-10 text-2xl font-bold tracking-tight text-foreground">
          Technical expertise
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          {portfolio.skills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-border bg-surface/30 p-5"
            >
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-white px-2.5 py-1 text-xs text-muted ring-1 ring-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
