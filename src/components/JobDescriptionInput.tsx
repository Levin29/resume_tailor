"use client";

interface JobDescriptionInputProps {
  value: string;
  onChange: (text: string) => void;
  disabled?: boolean;
}

export function JobDescriptionInput({ value, onChange, disabled }: JobDescriptionInputProps) {
  return (
    <div className="flex h-full flex-col">
      <label htmlFor="job-description" className="mb-1 block text-sm font-medium text-foreground">
        Job description
      </label>
      <textarea
        id="job-description"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder="Paste the full job description — requirements, responsibilities, and qualifications..."
        className="min-h-[320px] flex-1 resize-y rounded-xl border border-border bg-card px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
      />
      <p className="mt-2 text-xs text-muted">
        Include the full posting for best keyword matching and tailoring.
      </p>
    </div>
  );
}
