// components/Message.tsx
import { MarkdownMessage } from "./MarkdownMessage";

/**
 * Tiny presentational component keeps Chatbot lean.
 */
export default function Message({
  role,
  content,
}: {
  role: "user" | "assistant";
  content: string;
}) {
  const align = role === "user" ? "flex-end" : "flex-start";
  const bg = role === "user" ? "#12141c" : "#9F7C19";
  const label = role === "user" ? "You" : "Assistant";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: align,
        marginBottom: 8,
      }}
    >
      <div
        className="panel"
        style={{
          background: bg,
          maxWidth: 520,
          borderRadius: 10,
          padding: "10px 12px",
        }}
      >
        <div
          className="small"
          style={{
            opacity: 0.7,
            marginBottom: 4,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {label}
        </div>

        <div
          style={{
            fontSize: "1rem",
            paddingTop: ".5rem",
            paddingBottom: ".5rem",
          }}
        >
          {/* Render assistant/user content as Markdown with adaptive styling */}
          <MarkdownMessage md={content} panelBg={bg} />
        </div>
      </div>
    </div>
  );
}
