import { NextRequest, NextResponse } from "next/server";
import { tailorResume } from "@/lib/anthropic";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const resume = typeof body.resume === "string" ? body.resume.trim() : "";
    const jobDescription = typeof body.jobDescription === "string" ? body.jobDescription.trim() : "";

    if (!resume) {
      return NextResponse.json({ error: "Resume text is required" }, { status: 400 });
    }

    if (!jobDescription) {
      return NextResponse.json({ error: "Job description is required" }, { status: 400 });
    }

    const tailoredResume = await tailorResume(resume, jobDescription);
    return NextResponse.json({ tailoredResume });
  } catch (error) {
    console.error("Tailor error:", error);
    const message = error instanceof Error ? error.message : "Failed to tailor resume";
    const status = message.includes("ANTHROPIC_API_KEY") ? 500 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
