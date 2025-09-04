"use client";

import { useEffect, useRef, useState } from "react";
import { useAskAiMutation } from "../lib/services/faqBotApi";
import LoadingDots from "./LoadingDots";
import { MarkdownMessage } from "./MarkdownMessage";
import { TailSpin } from "react-loader-spinner";

export default function Chatbot() {
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([
    {
      role: "assistant",
      content:
        "Hello! How can I assist you today in learning more about Dakota Fabro's ethos, work, projects, or professional experience?",
    },
  ]);
  const [question, setQuestion] = useState("");
  const [askAi, { isLoading }] = useAskAiMutation();

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = question.trim();
    if (!q) return;

    const next = [...messages, { role: "user" as const, content: q }];
    setMessages(next);
    setQuestion("");

    try {
      const res = await askAi({ question: q, history: next }).unwrap();
      setMessages([...next, { role: "assistant", content: res.answer }]);
    } catch (err: any) {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "I had trouble answering that. Check your network or server logs.",
        },
      ]);
    } finally {
      inputRef.current?.focus();
    }
  }

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight; // hard jump (always at bottom)
      // If you prefer smooth movement sometimes, swap with:
      // el.scrollTo({ top: el.scrollHeight, behavior: "instant" as ScrollBehavior });
    });
  }, [messages, isLoading]);

  return (
    <div>
      <div
        ref={containerRef}
        aria-live="polite"
        aria-busy={isLoading}
        style={{
          minHeight: 220,
          marginBottom: 12,
          height: "50vh",
          overflowY: "auto",
          bottom: 0,
          overscrollBehavior: "contain",
          scrollbarGutter: "stable",
        }}
      >
        {messages.map((m, i) => (
          <div key={i}>
            {m.role === "assistant" ? (
              <p>
                <MarkdownMessage md={m.content} role="assistant" />
              </p>
            ) : (
              <p
                style={{
                  justifySelf: "right",
                  backgroundColor: "#9F7C19",
                  borderRadius: ".5rem",
                  padding: ".1rem 1rem",
                }}
              >
                <MarkdownMessage md={m.content} role={""} />
              </p>
            )}
          </div>
        ))}
        {isLoading && (
          <div
            className="small"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: ".75rem",
            }}
          >
            <LoadingDots color="#9F7C19" /> Thinking…
          </div>
        )}
      </div>

      <form
        onSubmit={onSubmit}
        style={{ display: "flex", gap: 8, position: "relative", bottom: 0 }}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Ask a question…"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          aria-label="Ask me a question"
        />
        <button
          type="submit"
          aria-label="Send message"
          disabled={isLoading}
          style={{ backgroundColor: "#9F7C19" }}
        >
          {isLoading ? <LoadingDots color="#9d9a94ff" /> : "Send"}
        </button>
      </form>
    </div>
  );
}
