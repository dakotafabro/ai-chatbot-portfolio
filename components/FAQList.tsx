"use client";

import { useMemo, useState } from "react";
import { useGetFaqsQuery } from "../lib/services/faqBotApi";
import SearchBar from "./SearchBar";
import { MarkdownMessage } from "./MarkdownMessage";

export default function FAQList() {
  const { data, isLoading, isError } = useGetFaqsQuery();
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs = data?.faqs ?? [];
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter(
      (f) =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q)
    );
  }, [faqs, query]);

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return <div>Ah nutz. Failed to load all the things. I'll try again.</div>;

  return (
    <div style={{ height: "fit-content" }}>
      <SearchBar value={query} onChange={setQuery} />
      <ul
        style={{
          listStyle: "none",
          padding: ".5rem 0rem 0rem 0rem",
          marginTop: 12,
          overflow: "scroll",
          height: "100%",
        }}
      >
        {filtered.map((f) => {
          const isOpen = openId === f.id;
          return (
            <li key={f.id} style={{ padding: ".5rem 0", color: "#9F7C19" }}>
              <details
                open={isOpen}
                onClick={(e) => {
                  e.preventDefault(); // stop native toggle
                  setOpenId(isOpen ? null : f.id); // toggle this one, close others
                }}
              >
                <summary style={{ cursor: "pointer" }}>{f.question}</summary>
                <p
                  className="small"
                  style={{
                    fontSize: 14,
                    padding: "0 .5rem",
                    color: "#9F7C19",
                  }}
                >
                  <MarkdownMessage md={f.answer} panelBg={""} role="" />
                </p>
              </details>
            </li>
          );
        })}
        {filtered.length === 0 && (
          <li className="small">No matches. Try a different search.</li>
        )}
      </ul>
    </div>
  );
}
