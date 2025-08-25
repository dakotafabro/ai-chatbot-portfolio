// DOM matchers + fetch polyfill for the browser-like environment.
import "@testing-library/jest-dom";
import "whatwg-fetch";

/**
 * Mock /api/faqs so unit tests don’t require a running Next server.
 * If you prefer MSW later, swap this out for request handlers.
 */
const originalFetch: typeof fetch = global.fetch;

global.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  const url =
    typeof input === "string"
      ? input
      : input instanceof URL
      ? input.toString()
      : input.url;

  if (typeof url === "string" && url.startsWith("/api/faqs")) {
    // Read from the repo’s JSON so the test reflects the same data the app uses.
    // Using require here keeps it simple for the test runtime.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const data = require("./data/faqs.json");
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return originalFetch(input as any, init);
};
