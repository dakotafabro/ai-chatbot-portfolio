import Chatbot from "../components/Chatbot";
import FAQList from "../components/FAQList";
import Image from "next/image";
import smileySticker from "../assets/smile-sticker.png";

/**
 * Landing page shows both the FAQ list and the chatbot.
 * The idea is to keep answers discoverable (FAQ) and conversational (chat).
 */
export default function HomePage() {
  return (
    <main>
      <div className="header-container">
        <div className="smiley-container">
          <Image
            className="smiley"
            alt=""
            src={smileySticker}
            width={100}
            height={100}
          ></Image>
        </div>
        <div>
          <h1 style={{ marginBottom: 8 }}>
            <span style={{ color: "#9F7C19" }}>Dakota Fabro</span>, Fullstack AI
            Engineer
          </h1>
          <p className="small" style={{ marginTop: 0 }}>
            An interactive way to explore my work and story.
          </p>
        </div>
      </div>
      {/* <small
        className="small"
        style={{ marginTop: 0, marginBottom: "1rem", display: "block" }}
      >
        Tip: Use <kbd>Tab</kbd> to move between the question input and the Send
        button. Everything here is keyboard-accessible.
      </small> */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 16,
        }}
      >
        <section className="panel" aria-labelledby="faq-heading">
          <h2 id="faq-heading">About Dakota</h2>
          <FAQList />
        </section>

        <section className="panel" aria-labelledby="chatbot-heading">
          <h2 id="chatbot-heading">
            Chat with Dakot<span style={{ color: "#9F7C19" }}>AI</span>:
          </h2>
          <Chatbot />
        </section>
      </div>
    </main>
  );
}
