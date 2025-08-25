import Chatbot from "../components/Chatbot";
import FAQList from "../components/FAQList";

/**
 * Dakota: The landing page shows both the FAQ list and the chatbot.
 * The idea is to keep answers discoverable (FAQ) and conversational (chat).
 */
export default function HomePage() {
  return (
    <main>
      <h1 style={{ marginBottom: 8 }}>Build an OpenAI-Powered Next.js FAQ ChatBot</h1>
      <p className="small" style={{ marginTop: 0 }}>
        Tip: Use <kbd>Tab</kbd> to move between the question input and the Send button. Everything here is keyboard-accessible.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 16 }}>
        <section className="panel" aria-labelledby="faq-heading">
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <FAQList />
        </section>

        <section className="panel" aria-labelledby="chatbot-heading">
          <h2 id="chatbot-heading">Ask the Chatbot</h2>
          <Chatbot />
        </section>
      </div>
    </main>
  );
}
