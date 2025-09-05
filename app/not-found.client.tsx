// app/not-found.client.tsx  (Client Component)
"use client";
import { useSearchParams } from "next/navigation";

export default function NotFoundClient() {
  const sp = useSearchParams();
  const from = sp.get("from") ?? "unknown";
  return (
    <main>
      <h1>Page not found</h1>
      <p>Came from: {from}</p>
    </main>
  );
}
