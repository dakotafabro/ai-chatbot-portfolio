import Chatbot from "../components/Chatbot";
import FAQList from "../components/FAQList";
import SocialIcons from "../components/SocialIcons";
import Image from "next/image";
import smileySticker from "../assets/smile-sticker.png";

export const dynamic = "force-dynamic";

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
            Dakot<span style={{ color: "#9F7C19" }}>AI</span> Fabro, Fullstack
            AI Engineer
          </h1>
          <div
            style={{
              marginTop: 0,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span>An interactive way to explore my work and story</span>{" "}
            <SocialIcons />
          </div>
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
        © 2025
        <a
          className="copyright-link"
          href="https://www.linkedin.com/in/dakotafabro"
          target="_blank"
          rel="noreferrer"
        >
          {"  "}
          Dakota Fabro
        </a>{" "}
        | All rights reserved. |{" "}
        <a
          href="https://drive.google.com/file/d/1FnQ3mmRuQ-Uzr9o2Ay_TMckAMpnpGYrY/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2"
          title="Download Dakota's Resume"
          style={{ color: "white", margin: ".5rem" }}
        >
          Download Dakota's Resume
        </a>
      </small>
    </main>
  );
}
