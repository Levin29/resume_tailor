import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const pdfParse = (await import("pdf-parse")).default;
    const result = await pdfParse(buffer);

    if (!result.text?.trim()) {
      return NextResponse.json(
        { error: "Could not extract text from PDF. Try a text-based PDF or paste your resume." },
        { status: 400 },
      );
    }

    return NextResponse.json({ text: result.text.trim() });
  } catch (error) {
    console.error("PDF parse error:", error);
    return NextResponse.json({ error: "Failed to parse PDF file" }, { status: 500 });
  }
}
