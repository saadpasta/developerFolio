/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
