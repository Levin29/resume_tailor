import { portfolio } from "@/data/portfolio";

export function Contact() {
  const { links, name } = portfolio;

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border bg-surface px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-medium text-accent">Contact</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Let&apos;s connect.
        </h2>

        <p className="mx-auto -mt-6 mb-10 max-w-md text-muted">
          Open to new opportunities in data engineering and cloud data platforms.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {links.email && (
            <a
              href={`mailto:${links.email}`}
              className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {links.email}
            </a>
          )}
          {links.phone && (
            <a
              href={`tel:${links.phone.replace(/\s/g, "")}`}
              className="rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background"
            >
              {links.phone}
            </a>
          )}
          {links.linkedin && (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background"
            >
              LinkedIn
            </a>
          )}
        </div>

        <p className="mt-20 text-xs text-muted">© {new Date().getFullYear()} {name}</p>
      </div>
    </section>
  );
}
