import type { NextConfig } from 'next';

const config: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  typedRoutes: true,    // Type-safe routing

  images: {
    unoptimized: true,
  },
};

export default config;
