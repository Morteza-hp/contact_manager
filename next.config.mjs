/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
