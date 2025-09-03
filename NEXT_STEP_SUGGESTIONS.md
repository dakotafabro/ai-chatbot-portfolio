[What to build next — concise, actionable]

First, ship the AI endpoint at /api/ask with guardrails. Validate input, set timeouts and token limits, and return clear fallbacks when something fails. Keep a deterministic mode for tests and previews.
Second, ground answers with retrieval. Create embeddings for your FAQs or docs, retrieve the most relevant passages for a question, and pass that context to the model. Start local; move to a hosted vector database if you need scale.
Third, stream responses in the chat. Render tokens as they arrive so the interface feels fast and responsive.
Fourth, add observability and tests. Log latency and token usage, track common questions and misses, expand end-to-end and unit tests, and keep a small evaluation set to catch answer-quality regressions. If your content is private, add auth and tighten logging.
