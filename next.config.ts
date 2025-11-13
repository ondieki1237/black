import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'accordmedical.co.ke',
        pathname: '/web/uploads/shop/**',
      },
      {
        protocol: 'https',
        hostname: 'events.codewithseth.co.ke',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
