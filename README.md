# AI Chatbot Portfolio

This project is a working portfolio of AI-powered chatbots I designed and built, demonstrating technical prompt design, structured data usage, and user-centered interaction flows.

## Purpose

The repo explores how careful **prompt engineering** and data curation can drive reliable, context-aware chatbots. Instead of generic responses, each chatbot is guided by persona-based prompts and structured datasets that make interactions both consistent and engaging.

## Features

* **Prompt-Driven Behavior**
  Each chatbot relies on detailed prompt instructions (tone, reasoning steps, guardrails) to maintain consistency. This demonstrates how AI outputs can be shaped through applied prompt engineering.

* **Data-Integrated Responses**
  The chatbot ingests structured JSON (`data/faqs.json`) containing curated Q&A pairs. This data is referenced during conversations to ground responses in real information.

* **Interactive Chat UI**
  A React/Next.js interface (`components/Chatbot.tsx`) provides a live testing ground for the prompts, simulating how end users will experience them.

## Prompting Approach

Below is a simplified version of the prompt structure used in the chatbot:

```txt
You are acting as Dakota Fabro’s professional portfolio assistant.

Your purpose is to answer questions in a way that reflects Dakota’s work, skills, values, and projects. Dakota uses they/them pronouns.

Guidelines:
- Keep responses appropriate, professional, and centered on Dakota.
- Only answer questions that relate to Dakota’s educational background, work experience, projects, teaching, technical skills, or professional philosophy.
- If asked something unrelated (e.g., politics, random trivia, or personal info not in the data), politely redirect back to Dakota’s work or say: “I can only answer questions about Dakota and their professional experience.”
- Tone should be conversational, approachable, and founder-voiced — confident, purposeful, and reflective.
- When possible, point to Dakota’s projects (eleventh house studios, Arcana.app, Loop), Linkedin courses ([
Using AI in the Design to Full-Stack Development Life Cycle](https://www.linkedin.com/learning/using-ai-in-the-design-to-full-stack-development-life-cycle), [
Build a Faster, More Structured Express API with Node.js and TypeScript](https://www.linkedin.com/learning/build-a-faster-more-structured-express-api-with-node-js-and-typescript), [
Build a Lightweight Full-Stack Headless CMS Using Next.js, Contentful, and GraphQL](https://www.linkedin.com/learning/build-a-lightweight-full-stack-headless-cms-using-next-js-contentful-and-graphql)), or values (equity, reflection, mentorship, purpose-driven design).
- If a user asks about projects not listed here, point them to LinkedIn. Don't provide links to projects--only courses. I am open to collaborating under an NDA.
- If asked about technology, highlight Dakota’s expertise with React, Next.js, React Native, GraphQL, Firebase, PostgreSQL, Node.js, Haskell, and OpenAI API integrations.
- If asked about education or values, emphasize Dakota’s interdisciplinary background (Psychology, Theology, Education, Computer Science) and their approach to building human-centered systems.
- If asked about how the chatbot was built, give more information the tech stack and that Dakota made it themselves using AI.
- If asked how to connect, provide Dakota’s LinkedIn https://www.linkedin.com/in/dakotafabro and their Calendly: https://calendly.com/dakotafabrodev/30min.
- If asked about Dakota's resume, provide this link: https://drive.google.com/uc?export=download&id=1FnQ3mmRuQ-Uzr9o2Ay_TMckAMpnpGYrY

Stay accurate, stay centered on Dakota, and keep the responses concise but rich with personality and professional detail.

**Return your response in Markdown that is nicely formatted and easy to read. Use paragraphs, headings, bullet points, and links where appropriate.**
  
```

This demonstrates **prompt scaffolding** and **guardrails to stay within information scope**: instructing the model not just *what to say*, but *how to behave consistently*.

## Data Example (`data/faqs.json`)

```json
[
    {
      "id": "stack-1",
      "question": "What technologies do they work with?",
      "answer": "Core tools and platforms:\n\n- Frontend: React, Next.js, React Native\n- Backend: Node.js, GraphQL, Firebase, PostgreSQL\n- Languages: JavaScript/TypeScript, Haskell\n- Integrations: OpenAI API and related AI tooling\n\nDakota believes tools can be learned; systems thinking and product-minded design guide the technical choices."
    },
    {
      "id": "teaching-1",
      "question": "How do they approach learning, teaching, and mentorship?",
      "answer": "Dakota’s background in education informs a clear, hands-on teaching style that meets learners where they are.\n\nAs a LinkedIn Learning instructor, they’ve guided thousands through complex engineering topics by breaking them into approachable, practical lessons with an emphasis on accessibility and inclusion."
    },
]
```

The chatbot’s outputs are therefore shaped by both the **prompt rules** and **structured data**, an approach that’s reproducible and extensible.

## Evidence of Applied Prompt Engineering

* **Rule-based prompt design** → prevents drift and ensures reliable tone.
* **Integration with curated data** → anchors answers in facts.
* **Reasoning chains** → model follows stepwise logic rather than ad hoc replies.
* **Testing environment** → the Next.js UI provides a feedback loop to refine prompts iteratively.

## Next Steps / Future Work

* **Multi-Persona Expansion**: Add new personas with distinct reasoning styles (mentor, coach, guide).
* **Embedding Search**: Replace exact-match lookup with vector similarity search for flexible responses.
* **Memory Layer**: Give the chatbot session memory to build on prior answers.
* **Advanced Guardrails**: Add context-sensitive instructions to further reduce hallucinations.
* **Analytics Integration**: Capture user interactions to continuously improve prompts and dataset quality.

---

This repo shows how I approach prompt engineering as both **a design problem** (clear, consistent user experience) and **a technical problem** (grounded, reliable AI outputs).
