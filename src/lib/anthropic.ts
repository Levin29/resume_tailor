import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `You are an expert resume writer and career coach. Your job is to tailor a candidate's resume to a specific job description.

Rules:
- Preserve factual accuracy — never invent employers, degrees, dates, or achievements
- Emphasize relevant skills, experience, and keywords from the job description
- Rewrite bullet points to highlight transferable impact and metrics where present
- Keep the same overall structure (contact info, summary, experience, education, skills)
- Use clear, professional language and strong action verbs
- Output the tailored resume in clean markdown format
- Do not include explanations, commentary, or notes — only the resume`;

export async function tailorResume(resume: string, jobDescription: string): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY is not configured");
  }

  const client = new Anthropic({ apiKey });

  const message = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `## Original Resume\n\n${resume}\n\n## Target Job Description\n\n${jobDescription}\n\nPlease tailor the resume for this role.`,
      },
    ],
  });

  const textBlock = message.content.find((block) => block.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error("No response from AI");
  }

  return textBlock.text;
}
