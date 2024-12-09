/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['media.valorant-api.com', 'lzt.market']
  }
};

module.exports = nextConfig;