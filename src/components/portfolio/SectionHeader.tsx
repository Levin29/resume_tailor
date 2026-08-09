export function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="text-sm font-medium text-accent">{label}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
