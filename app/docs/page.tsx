/**
 * Lightweight internal docs. Learners can expand this into full API docs
 * or migrate to a /docs site later.
 */
export default function DocsPage() {
  return (
    <main className="panel prose">
      <h1>Project Docs</h1>
      <p>
        This app demonstrates a minimal AI-powered FAQ chatbot in Next.js with
        RTK Query.
      </p>

      <h2>Environment</h2>
      <ul>
        <li>
          <code>OPENAI_API_KEY</code>: Required for real AI calls. Set it in{" "}
          <code>.env.local</code>.
        </li>
        <li>
          <code>MOCK_AI</code>: Optional. Set to <code>1</code> to bypass real
          OpenAI calls (useful for demos/tests).
        </li>
      </ul>

      <h2>API Endpoints</h2>
      <ul>
        <li>
          <strong>GET</strong> <code>/api/faqs</code>: Returns JSON of FAQs used
          to prime the experience.
        </li>
        <li>
          <strong>POST</strong> <code>/api/ask</code>: Accepts{" "}
          <code>{`{ question: string }`}</code> and returns{" "}
          <code>{`{ answer: string }`}</code>.
        </li>
      </ul>

      <h2>Testing</h2>
      <p>
        Run unit tests with <code>npm run test</code> and E2E tests with{" "}
        <code>npm run test:e2e</code>. E2E tests assume <code>MOCK_AI=1</code>.
      </p>
    </main>
  );
}
