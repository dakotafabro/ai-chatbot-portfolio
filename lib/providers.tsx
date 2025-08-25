"use client";

import { Provider } from "react-redux";
import { store } from "./store";

/**
 * Dakota: I keep the Provider isolated so app/layout.tsx stays clean.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
