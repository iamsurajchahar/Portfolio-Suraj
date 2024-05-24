/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    swcLoader: true,
    swcMinify: true,
  },
  future: {
    webpack5: true,
  },
}

module.exports = nextConfig