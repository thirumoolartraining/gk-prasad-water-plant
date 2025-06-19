/** @type {import('next').NextConfig} */
const isWebContainer = !!process.env.WEBCONTAINER_API_URL;

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config) => {
    // Use memory cache instead of persistent cache to prevent ENOENT errors
    config.cache = { type: 'memory' };
    return config;
  },
};

module.exports = nextConfig;