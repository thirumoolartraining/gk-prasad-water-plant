/** @type {import('next').NextConfig} */
const isWebContainer = !!process.env.WEBCONTAINER_API_URL;

const nextConfig = {
  // Enable React Strict Mode for better development experience
  reactStrictMode: true,
  
  // Optimize images for Vercel
  images: {
    domains: ['images.unsplash.com'], // Add your image domains here
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400, // 24 hours
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable SWC minification for better performance
  swcMinify: true,

  // Configure webpack
  webpack: (config, { isServer }) => {
    // Use memory cache instead of persistent cache to prevent ENOENT errors
    config.cache = { type: 'memory' };

    // Add support for loading SVGs as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  // Configure headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://gkprasadaquafarm.com',
  },

  // Configure build output
  output: 'standalone',
  productionBrowserSourceMaps: false,
  compress: true,
  poweredByHeader: false,
};

// Security headers configuration
const securityHeaders = [
  // Prevents clickjacking attacks
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // Prevents MIME type sniffing
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Enables XSS protection in modern browsers
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  // Controls referrer information
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Controls DNS prefetching
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
];

// Only enable bundle analyzer when ANALYZE environment variable is set
if (process.env.ANALYZE) {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  module.exports = withBundleAnalyzer(nextConfig);
} else {
  module.exports = nextConfig;
}