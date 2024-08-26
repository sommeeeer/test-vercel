/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.snurroslo.no',
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
};

export default nextConfig;
