import Image from "next/image";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  const { name, title, location, tagline, avatar, links } = portfolio;

  return (
    <section className="relative px-6 pb-24 pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue-50/80 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-14">
        <div className="relative shrink-0">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100" />
          <Image
            src={avatar}
            alt={name}
            width={200}
            height={200}
            className="relative rounded-2xl object-cover shadow-xl"
            priority
          />
        </div>

        <div className="text-center md:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
            {title}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {name}
          </h1>
          <p className="mt-2 text-sm text-muted">{location}</p>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-muted">{tagline}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#experience"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              View Experience
            </a>
            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                LinkedIn
              </a>
            )}
            {links.resume && (
              <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                Download Resume
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
