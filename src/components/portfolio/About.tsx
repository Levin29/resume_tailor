import { portfolio } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border bg-white px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionLabel>About</SectionLabel>
        <p className="max-w-3xl text-[17px] leading-[1.75] text-muted">{portfolio.bio}</p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {portfolio.certifications.length > 0 && (
            <div className="rounded-xl border border-border bg-surface/50 p-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">
                Certifications
              </h3>
              <ul className="space-y-3">
                {portfolio.certifications.map((cert) => (
                  <li key={cert} className="text-sm leading-relaxed text-muted">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {portfolio.education.length > 0 && (
            <div className="rounded-xl border border-border bg-surface/50 p-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">
                Education
              </h3>
              {portfolio.education.map((edu) => (
                <div key={edu.degree}>
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
      {children}
    </h2>
  );
}
