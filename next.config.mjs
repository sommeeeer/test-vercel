/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.snurroslo.no',
      },
    ],
  },
};

export default nextConfig;
