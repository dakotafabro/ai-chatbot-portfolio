import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type FAQ = {
  id: string;
  question: string;
  answer: string;
};

type AskRequest = {
  question: string;
  history?: { role: "user" | "assistant"; content: string }[];
};
type AskResponse = { answer: string };

type FaqsResponse = { faqs: FAQ[] };

export const faqBotApi = createApi({
  reducerPath: "faqBotApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getFaqs: builder.query<FaqsResponse, void>({
      query: () => "/api/faqs",
    }),
    askAi: builder.mutation<AskResponse, AskRequest>({
      query: (body) => ({
        url: "/api/ask",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetFaqsQuery, useAskAiMutation } = faqBotApi;
