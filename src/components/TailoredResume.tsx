"use client";

interface TailoredResumeProps {
  content: string;
}

export function TailoredResume({ content }: TailoredResumeProps) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
  };

  const handleDownload = () => {
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "tailored-resume.md";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Tailored Resume</h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => void handleCopy()}
            className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-slate-50"
          >
            Copy
          </button>
          <button
            type="button"
            onClick={handleDownload}
            className="rounded-lg bg-accent px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Download
          </button>
        </div>
      </div>
      <div className="max-h-[70vh] overflow-y-auto rounded-xl border border-border bg-card p-6">
        <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-foreground">
          {content}
        </pre>
      </div>
    </div>
  );
}
