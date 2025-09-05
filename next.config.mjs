/**
 * Keep Next.js config minimal for teaching purposes. If we add MDX or images
 * later in the course, we can expand this file as needed.
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
  // Optional but recommended if you use a strict CSP:
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
              "connect-src 'self' https://www.google-analytics.com",
              "img-src 'self' data: https://www.google-analytics.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
