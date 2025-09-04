import Chatbot from "../components/Chatbot";
import FAQList from "../components/FAQList";
import Image from "next/image";
import smileySticker from "../assets/smile-sticker.png";

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

      <div className="faq-chatbot-container">
        <section className="panel" aria-labelledby="faq-heading">
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <FAQList />
        </section>

        <section className="panel" aria-labelledby="chatbot-heading">
          <h2 id="chatbot-heading">
            Chat with Dakot<span style={{ color: "#9F7C19" }}>AI</span>:
          </h2>
          <Chatbot />
        </section>
      </div>

      <small className="copyright">
        © 2025 <a href="https://www.linkedin.com/in/dakotafabro" target="_blank" rel="noreferrer">Dakota Fabro</a> | All rights reserved.
      </small>
    </main>
  );
}
