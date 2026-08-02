const ACCEPTED_TYPES = [
  "text/plain",
  "text/markdown",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const ACCEPTED_EXTENSIONS = [".txt", ".md", ".pdf", ".doc", ".docx"];

export function isAcceptedResumeFile(file: File): boolean {
  const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
  return ACCEPTED_TYPES.includes(file.type) || ACCEPTED_EXTENSIONS.includes(extension);
}

export async function extractResumeText(file: File): Promise<string> {
  const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();

  if (extension === ".pdf") {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/parse-resume", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: "Failed to parse PDF" }));
      throw new Error(error.error ?? "Failed to parse PDF");
    }

    const data = await response.json();
    return data.text as string;
  }

  if (extension === ".doc" || extension === ".docx") {
    throw new Error("Word documents are not supported yet. Please paste your resume as text or upload a PDF.");
  }

  return file.text();
}
