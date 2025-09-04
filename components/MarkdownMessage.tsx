// components/MarkdownMessage.tsx
"use client";

import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";

type Props = {
  md: string;
  /** Background color of the parent panel (e.g. "#12141c" or "#9F7C19") */
  panelBg?: string;
  role: string;
};

function hexToRgb(hex: string) {
  const m = hex.trim().replace("#", "");
  const full =
    m.length === 3
      ? m
          .split("")
          .map((c) => c + c)
          .join("")
      : m;
  const int = parseInt(full, 16);
  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255,
  };
}

function isDarkColor(hex?: string) {
  if (!hex) return true; // default assume dark panel
  try {
    const { r, g, b } = hexToRgb(hex);
    // Perceived luminance (sRGB approx)
    const l = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    return l < 0.5;
  } catch {
    return true;
  }
}

export function MarkdownMessage({ md, panelBg, role = "" }: Props) {
  const dark = isDarkColor(panelBg);
  const baseColor = dark ? "#E5E7EB" : "#111827"; // text
  const secondary = dark ? "rgba(229,231,235,0.85)" : "rgba(17,24,39,0.9)";
  const link = dark ? "#93C5FD" : "#1D4ED8"; // accessible on both
  const inlineCodeBg = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";
  const blockCodeBg = dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)";
  const blockCodeBorder = dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)";

  return (
    <div
      style={
        role !== ""
          ? {
              color: baseColor,
              justifyContent: "left",
              backgroundColor: "#12141c",
              borderRadius: ".5rem",
              padding: ".5rem 1rem",
              border: "1px solid #E5E7EB",
            }
          : {}
      }
    >
      {role !== "" && <small>DakotAI:</small>}
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        components={{
          h2: ({ node, ...props }) => (
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                margin: "1rem 0 0.5rem",
                lineHeight: 1.25,
                color: baseColor,
              }}
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              style={{
                fontSize: ".95rem",
                fontWeight: 600,
                margin: "0.75rem 0 0.35rem",
                lineHeight: 1.25,
                color: baseColor,
              }}
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p
              style={{
                margin: "0.5rem 0",
                lineHeight: 1.6,
                color: secondary,
                fontSize: ".97rem",
              }}
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul
              style={{
                margin: "0.5rem 0 0.75rem 1.25rem",
                listStyleType: "disc",
                color: secondary,
                lineHeight: 1.6,
              }}
              {...props}
            />
          ),
          ol: ({ node, ...props }) => (
            <ol
              style={{
                margin: "0.5rem 0 0.75rem 1.25rem",
                listStyleType: "decimal",
                color: secondary,
                lineHeight: 1.6,
              }}
              {...props}
            />
          ),
          li: ({ node, ...props }) => (
            <li style={{ marginBottom: "0.25rem" }} {...props} />
          ),
          a: ({ node, ...props }) => (
            <a
              style={{ color: link, textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              style={{
                borderLeft: `3px solid ${blockCodeBorder}`,
                paddingLeft: "0.75rem",
                margin: "0.5rem 0",
                color: secondary,
                fontStyle: "italic",
              }}
              {...props}
            />
          ),
          // code: ({ node, inline, ...props }) =>
          //   inline ? (
          //     <code
          //       style={{
          //         background: inlineCodeBg,
          //         padding: "0.2rem 0.35rem",
          //         borderRadius: "0.25rem",
          //         fontSize: "0.875rem",
          //       }}
          //       {...props}
          //     />
          //   ) : (
          //     <pre
          //       style={{
          //         background: blockCodeBg,
          //         border: `1px solid ${blockCodeBorder}`,
          //         padding: "0.85rem",
          //         borderRadius: "0.5rem",
          //         overflowX: "auto",
          //         margin: "0.6rem 0",
          //       }}
          //     >
          //       <code
          //         style={{
          //           // inherit text color for better contrast on both panels
          //           color: baseColor,
          //           fontSize: "0.95rem",
          //         }}
          //         {...props}
          //       />
          //     </pre>
          //   ),
        }}
      >
        {md}
      </ReactMarkdown>
    </div>
  );
}
