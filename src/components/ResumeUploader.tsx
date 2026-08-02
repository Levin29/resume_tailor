"use client";

import { useCallback, useRef, useState } from "react";
import { extractResumeText, isAcceptedResumeFile } from "@/lib/parse-resume";

interface ResumeUploaderProps {
  value: string;
  onChange: (text: string) => void;
  disabled?: boolean;
}

export function ResumeUploader({ value, onChange, disabled }: ResumeUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [parsing, setParsing] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleFile = useCallback(
    async (file: File) => {
      if (!isAcceptedResumeFile(file)) {
        alert("Please upload a .txt, .md, or .pdf file.");
        return;
      }

      setParsing(true);
      try {
        const text = await extractResumeText(file);
        onChange(text);
        setFileName(file.name);
      } catch (error) {
        alert(error instanceof Error ? error.message : "Failed to read file");
      } finally {
        setParsing(false);
      }
    },
    [onChange],
  );

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      setDragOver(false);
      if (disabled || parsing) return;

      const file = event.dataTransfer.files[0];
      if (file) void handleFile(file);
    },
    [disabled, parsing, handleFile],
  );

  return (
    <div className="flex flex-col gap-3">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled && !parsing) setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
        onClick={() => !disabled && !parsing && inputRef.current?.click()}
        className={[
          "flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-8 transition-colors",
          dragOver ? "border-accent bg-indigo-50" : "border-border bg-slate-50 hover:border-accent/50",
          disabled || parsing ? "pointer-events-none opacity-60" : "",
        ].join(" ")}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".txt,.md,.pdf"
          className="hidden"
          disabled={disabled || parsing}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) void handleFile(file);
          }}
        />
        <svg className="mb-2 h-8 w-8 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <p className="text-sm font-medium text-foreground">
          {parsing ? "Extracting text..." : "Drop resume here or click to upload"}
        </p>
        <p className="mt-1 text-xs text-muted">PDF, TXT, or MD</p>
        {fileName && <p className="mt-2 text-xs text-accent">{fileName}</p>}
      </div>

      <div className="relative">
        <label htmlFor="resume-text" className="mb-1 block text-sm font-medium text-foreground">
          Or paste your resume
        </label>
        <textarea
          id="resume-text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            if (e.target.value) setFileName(null);
          }}
          disabled={disabled || parsing}
          placeholder="Paste your resume content here..."
          rows={12}
          className="w-full resize-y rounded-xl border border-border bg-card px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
        />
      </div>
    </div>
  );
}
