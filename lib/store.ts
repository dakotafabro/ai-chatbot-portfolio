import { configureStore } from "@reduxjs/toolkit";
import { faqBotApi } from "./services/faqBotApi";

/**
 * Dakota: RTK Query handles caching, loading states, and data fetching.
 * If learners prefer SWR/React Query, they can swap this later.
 */
export const store = configureStore({
  reducer: {
    [faqBotApi.reducerPath]: faqBotApi.reducer
  },
  middleware: (getDefault) => getDefault().concat(faqBotApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
