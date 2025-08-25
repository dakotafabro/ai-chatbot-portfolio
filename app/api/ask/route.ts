import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Dakota: I gate OpenAI calls behind MOCK_AI so learners can verify the full
 * request/response path without needing a key immediately.
 */
const bodySchema = z.object({
  question: z.string().min(1, "Ask a real question."),
  history: z.array(z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string()
  })).optional()
});

/**
 * Dakota: Abstract the model call so it's easy to swap providers later.
 * If MOCK_AI=1 or OPENAI_API_KEY is missing, we return a canned response.
 */
async function callModel(question: string, history?: { role: "user" | "assistant", content: string }[]) {
  if (process.env.MOCK_AI === "1" || !process.env.OPENAI_API_KEY) {
    // Simple deterministic fallback for local dev and tests
    return `Here's a concise, course-aligned answer based on our mock mode. You asked: "${question}". In the course, we wire this to OpenAI for real responses.`;
  }

  const { OpenAI } = await import("openai");
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const messages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
    {
      role: "system",
      content:
        "You are an AI FAQ assistant for a Next.js course. Be concise, accurate, and reference the project structure when useful."
    }
  ];

  if (history?.length) {
    for (const m of history) messages.push(m);
  }

  messages.push({
    role: "user",
    content: question
  });

  // Dakota: Using Chat Completions API for clarity.
  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages
  });

  const answer = completion.choices?.[0]?.message?.content?.trim() || "I couldn't generate a response.";
  return answer;
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const { question, history } = bodySchema.parse(json);

    const answer = await callModel(question, history);
    return NextResponse.json({ answer });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Invalid request." },
      { status: 400 }
    );
  }
}
