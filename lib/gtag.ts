export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Avoid calling GA on localhost/test builds
export const isProd = GA_ID && typeof window !== "undefined";

export function pageview(url: string) {
  if (!isProd) return;
  // @ts-ignore
  window.gtag?.("config", GA_ID, { page_path: url });
}

type EventParams = { [key: string]: string | number | boolean | undefined };

export function event(action: string, params: EventParams = {}) {
  if (!isProd) return;
  // @ts-ignore
  window.gtag?.("event", action, params);
}
