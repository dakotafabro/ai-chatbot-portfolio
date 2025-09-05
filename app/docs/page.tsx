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
          <code>OPENAI_API_KEY</code>: set in <code>.env.local</code>.
        </li>
        <li>
          <code>MOCK_AI</code>: set to <code>1</code> to bypass real OpenAI
          calls.
        </li>
      </ul>

      <h2>API Endpoints</h2>
      <ul>
        <li>
          <strong>GET</strong> <code>/api/faqs</code>
        </li>
        <li>
          <strong>POST</strong> <code>/api/ask</code> with{" "}
          <code>{`{ question: string }`}</code>
        </li>
      </ul>

      <h2>Testing</h2>
      <p>
        <code>npm run test</code> (unit) and <code>npm run test:e2e</code> (E2E;
        assumes <code>MOCK_AI=1</code>).
      </p>
    </main>
  );
}
