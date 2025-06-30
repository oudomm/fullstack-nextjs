import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'dummyjson.com', pathname: '/icon/**' },
      { protocol: 'https', hostname: 'i.pravatar.cc', pathname: '/**' }, // <-- Add this line
    ],
  },
};

export default nextConfig;
