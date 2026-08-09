import { portfolio } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="About"
          title="Building reliable data platforms at scale."
        />
        <p className="max-w-3xl text-lg leading-[1.8] text-muted md:text-xl">
          {portfolio.bio}
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {portfolio.certifications.length > 0 && (
            <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow)]">
              <h3 className="text-sm font-semibold text-foreground">Certifications</h3>
              <ul className="mt-5 space-y-4">
                {portfolio.certifications.map((cert) => (
                  <li key={cert} className="text-sm leading-relaxed text-muted">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {portfolio.education.length > 0 && (
            <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow)]">
              <h3 className="text-sm font-semibold text-foreground">Education</h3>
              {portfolio.education.map((edu) => (
                <div key={edu.degree} className="mt-5">
                  <p className="text-sm font-medium text-foreground">{edu.degree}</p>
                  <p className="mt-1 text-sm text-muted">
                    {edu.school} · {edu.year}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
