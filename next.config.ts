import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/projectinstructions',
        destination: 'https://claudeforeveryone.com/projectinstructions',
        permanent: false,
      },
    ];
  },
}

export default nextConfig
