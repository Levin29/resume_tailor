import { portfolio } from "@/data/portfolio";

export function Contact() {
  const { links, name } = portfolio;

  return (
    <section id="contact" className="scroll-mt-20 bg-accent px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
          Contact
        </h2>
        <h3 className="mb-3 text-2xl font-bold tracking-tight">Let&apos;s connect</h3>
        <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-slate-300">
          Open to new opportunities in data engineering and cloud data platforms.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {links.email && (
            <a
              href={`mailto:${links.email}`}
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-slate-100"
            >
              {links.email}
            </a>
          )}
          {links.phone && (
            <a
              href={`tel:${links.phone.replace(/\s/g, "")}`}
              className="rounded-lg border border-slate-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-slate-300"
            >
              {links.phone}
            </a>
          )}
          {links.linkedin && (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-slate-300"
            >
              LinkedIn
            </a>
          )}
        </div>

        <p className="mt-16 text-xs text-slate-500">
          © {new Date().getFullYear()} {name}
        </p>
      </div>
    </section>
  );
}
