/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ["cms.bytedev.cz", "38.242.151.80"],
    minimumCacheTTL: 60,
    maximumCacheTTL: 60,
  }
}

module.exports = nextConfig
