import "./globals.css";
import { Providers } from "../lib/providers";

export const metadata = {
  title: "AI FAQ ChatBot — Next.js",
  description: "OpenAI-powered FAQ chatbot for the course.",
};

/**
 * Dakota: I wrap the app in Redux Provider so RTK Query works anywhere.
 * Keeping this lean and letting pages/components do the heavy lifting.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="container">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
