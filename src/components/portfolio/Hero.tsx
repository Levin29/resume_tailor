import Image from "next/image";
import { portfolio } from "@/data/portfolio";

const stats = [
  { label: "Records processed", value: "70M+", sub: "annually" },
  { label: "Runtime reduction", value: "~25%", sub: "pipeline optimization" },
  { label: "Workflows validated", value: "15+", sub: "downstream systems" },
  { label: "Experience", value: "3+", sub: "years in data engineering" },
];

export function Hero() {
  const { name, title, location, tagline, avatar, links } = portfolio;

  return (
    <section className="px-6 pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <Image
            src={avatar}
            alt={name}
            width={96}
            height={96}
            className="mx-auto rounded-2xl object-cover shadow-[var(--shadow)] ring-1 ring-border"
            priority
          />
          <p className="mt-8 text-sm font-medium tracking-wide text-accent">{title}</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
            {name}
          </h1>
          <p className="mt-3 text-sm text-muted">{location}</p>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            {tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#experience"
              className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              View Experience
            </a>
            {links.resume && (
              <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-surface px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-border"
              >
                Download Resume
              </a>
            )}
            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-surface px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-border"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow)] md:p-5"
            >
              <p className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs font-medium text-foreground">{stat.label}</p>
              <p className="text-[11px] text-muted">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
