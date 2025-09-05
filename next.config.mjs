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
};

export default nextConfig;
