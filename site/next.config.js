/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Steinily Technologies',
    description: 'workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://steinily.github.io/kasm-registry2/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry2/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
