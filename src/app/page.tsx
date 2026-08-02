"use client";

import { useState } from "react";
import { JobDescriptionInput } from "@/components/JobDescriptionInput";
import { ResumeUploader } from "@/components/ResumeUploader";
import { TailoredResume } from "@/components/TailoredResume";

export default function Home() {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [tailoredResume, setTailoredResume] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = resume.trim().length > 0 && jobDescription.trim().length > 0 && !loading;

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setTailoredResume(null);

    try {
      const response = await fetch("/api/tailor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resume, jobDescription }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to tailor resume");
      }

      setTailoredResume(data.tailoredResume);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b border-border bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-foreground">Resume Tailor</h1>
            <p className="text-sm text-muted">
              Upload your resume and a job description to get a customized version
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-base font-semibold text-foreground">Your Resume</h2>
            <ResumeUploader value={resume} onChange={setResume} disabled={loading} />
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-base font-semibold text-foreground">Target Role</h2>
            <JobDescriptionInput
              value={jobDescription}
              onChange={setJobDescription}
              disabled={loading}
            />
          </section>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={() => void handleSubmit()}
            disabled={!canSubmit}
            className="rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Tailoring your resume...
              </span>
            ) : (
              "Generate Tailored Resume"
            )}
          </button>

          {error && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
              {error}
            </p>
          )}
        </div>

        {tailoredResume && (
          <section className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <TailoredResume content={tailoredResume} />
          </section>
        )}
      </main>
    </div>
  );
}
