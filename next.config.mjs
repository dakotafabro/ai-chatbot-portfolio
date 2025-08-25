/**
 * Dakota: I keep Next.js config minimal for teaching. If we add MDX or images
 * later in the course, we can expand this file as needed.
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  }
};

export default nextConfig;
