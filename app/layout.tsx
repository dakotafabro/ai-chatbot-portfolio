import "./globals.css";
import { Providers } from "../lib/providers";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import GAListener from "./ga_listener";
import { event } from "../lib/gtag";
import { Suspense } from "react";

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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  event("cta_click", { location: "hero", variant: "primary" });
  event("form_submit", { form_name: "contact" });

  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div />}>
          {children}

          {gaId ? (
            <>
              {/* Load the GA library */}
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                strategy="afterInteractive"
              />
              {/* Initialize gtag */}
              <Script id="ga-init" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { send_page_view: false });
              `}
              </Script>
            </>
          ) : null}
          <Script id="ga-consent" strategy="afterInteractive">
            {`gtag('consent', 'default', { ad_storage: 'denied', analytics_storage: 'denied' });`}
          </Script>
          <GAListener />
          <Analytics />
          <Providers>
            <div className="container">{children}</div>
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
