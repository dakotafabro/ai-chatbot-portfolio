# OpenAI-Powered Next.js FAQ ChatBot

## Quickstart

1. Install deps

   ```bash
   npm install
   ```

2. Create `.env.local`

   ```ini
   OPENAI_API_KEY=sk-your-key-here
   # Optional: bypass real OpenAI during demos/tests
   MOCK_AI=1
   ```

3. Run the app

   ```bash
   npm run dev
   ```

4. Visit `http://localhost:3000`

## What’s inside

- **Next.js (App Router)** — minimal layout, simple pages, server route handlers.
- **RTK Query** — data fetching and caching for `/api/faqs` and `/api/ask`.
- **OpenAI** — real responses when `OPENAI_API_KEY` is set; mock responses when `MOCK_AI=1`.
- **Testing** — Jest for unit tests; Playwright for E2E.
- **Docs** — lightweight guide at `/docs`.

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run test` — run unit tests
- `npm run test:e2e` — run Playwright tests (assumes `MOCK_AI=1`)
- `npm run test:e2e:headed` — E2E with a visible browser

## Files to explore first

- `app/page.tsx` — renders the FAQ panel and the chatbot panel.
- `components/Chatbot.tsx` — minimal chat UI using `useAskAiMutation`.
- `lib/services/faqBotApi.ts` — RTK Query slice with `getFaqs` and `askAi`.
- `app/api/ask/route.ts` — server endpoint that hits OpenAI or returns a mock.

## Teaching notes

- I prefer to keep the UI clean and focus on data flow. Learners can style and restructure once the core patterns make sense.
- Streaming is intentionally out-of-scope for the first pass. It adds complexity without changing core concepts.
- I use JSON for the FAQ "database" to keep the focus on API flow and AI integration.

## Deploying to Vercel

1. Push to GitHub.
2. Import the repo in Vercel.
3. Add environment variables:
   - `OPENAI_API_KEY`
   - optionally `MOCK_AI=0`
4. Deploy.
