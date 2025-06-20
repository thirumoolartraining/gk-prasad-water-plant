/** @type {import('next').NextConfig} */
const isWebContainer = !!process.env.WEBCONTAINER_API_URL;
const withOptimizedCss = require('next-with-css');

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['localhost'],
  },
  // Disable default font optimization since we're using local fonts
  optimizeFonts: false,
  // Enable experimental features for better optimization
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@heroicons/react'],
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  // Configure webpack
  webpack: (config, { isServer, dev }) => {
    // Use memory cache instead of persistent cache to prevent ENOENT errors
    config.cache = { type: 'memory' };
    
    // Handle font files with proper MIME types
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/fonts/[name][ext]',
      },
    });

    // Only optimize CSS in production
    if (!dev && !isServer) {
      const Critters = require('critters-webpack-plugin');
      config.plugins.push(
        new Critters({
          // Optional configuration
          preload: 'swap',
          preloadFonts: true,
          preload: 'media',
          fonts: true,
        })
      );
    }

    return config;
  },
  // Enable CSS optimizations
  optimizeCss: true,
};

// Apply CSS optimizations
module.exports = withOptimizedCss(nextConfig);