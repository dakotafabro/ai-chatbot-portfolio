import "./globals.css";
import { Providers } from "../lib/providers";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "DakotAI - Fullstack AI Engineer",
  description: "An interactive, AI-powered way to explore my work and story",
};

/**
 * Wrap the app in Redux Provider so RTK Query works anywhere.
 * Keeping this lean and letting pages/components do the heavy lifting.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Providers>
          <div className="container">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
