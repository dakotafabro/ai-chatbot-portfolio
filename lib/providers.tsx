"use client";

import { Provider } from "react-redux";
import { store } from "./store";

/**
 * Keep the Provider isolated so app/layout.tsx stays clean.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
