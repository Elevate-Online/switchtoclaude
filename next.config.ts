import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/project-instructions',
        destination: 'https://claudeforeveryone.com/project-instructions',
        permanent: false,
      },
    ];
  },
}

export default nextConfig
