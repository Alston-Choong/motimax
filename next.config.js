/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output configuration for deployment
  output: 'standalone',
  
  // Build configuration
  distDir: '.next',
  
  // Asset prefix for production
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
  
  // Trailing slash configuration
  trailingSlash: false,
  
  // Power Pack (Next.js 14 optimizations)
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization with enhanced domains
  images: {
    domains: [
      'motimax.vercel.app',
      'localhost',
      'cdn.example.com',
      'images.unsplash.com'
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Webpack configuration with optimizations
  webpack: (config, { isServer, dev }) => {
    // Optimize bundle analyzer in development
    if (!isServer && !dev) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },
  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
    APP_VERSION: process.env.npm_package_version || '1.0.0',
  },
  
  // Enhanced security headers with CSP
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' *.vercel.app *.github.com",
              "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
              "font-src 'self' fonts.gstatic.com data:",
              "img-src 'self' data: blob: *.vercel.app *.githubusercontent.com images.unsplash.com",
              "connect-src 'self' *.vercel.app *.github.com api.github.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests"
            ].join('; ')
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.NODE_ENV === 'production' ? 'https://motimax.vercel.app' : '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
  
  // Redirects for SEO and URL management
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/docs',
        destination: '/documentation',
        permanent: false,
      },
    ];
  },
  
  // Rewrites for i18n and API proxying
  async rewrites() {
    return {
      beforeFiles: [
        // i18n rewrites
        {
          source: '/en/:path*',
          destination: '/:path*',
        },
        {
          source: '/es/:path*',
          destination: '/es/:path*',
        },
        {
          source: '/fr/:path*',
          destination: '/fr/:path*',
        },
      ],
      afterFiles: [
        // API proxy rewrites
        {
          source: '/api/proxy/:path*',
          destination: 'https://api.external-service.com/:path*',
        },
      ],
      fallback: [
        {
          source: '/:path*',
          destination: '/404',
        },
      ],
    };
  },
  
  // i18n configuration
  i18n: {
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'en',
    localeDetection: true,
    domains: [
      {
        domain: 'motimax.com',
        defaultLocale: 'en',
      },
      {
        domain: 'motimax.es',
        defaultLocale: 'es',
      },
      {
        domain: 'motimax.fr',
        defaultLocale: 'fr',
      },
    ],
  },
  
  // Next.js 14 experimental features
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['mysql2', 'prisma'],
    optimizeCss: true,
    scrollRestoration: true,
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  
  // TypeScript configuration
  typescript: {
    // Only enable in development
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
  
  // ESLint configuration
  eslint: {
    // Only ignore during builds in development
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
    dirs: ['pages', 'utils', 'components', 'app'],
  },
  
  // Compiler optimizations
  compiler: {
    // Remove console statements in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    // Styled-components support
    styledComponents: true,
    // React refresh
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  
  // Performance optimizations
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // Number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  
  // Development server configuration
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
  
  // Generate static 404 page
  generateEtags: true,
  
  // Compression
  compress: true,
};

module.exports = nextConfig;
