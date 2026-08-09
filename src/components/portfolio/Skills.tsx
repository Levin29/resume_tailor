import { portfolio } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="Skills" title="Tools and technologies." />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow)]"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-surface px-3 py-1 text-xs text-foreground"
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
