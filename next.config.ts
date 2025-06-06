import type { NextConfig } from 'next';
import withExportImages from 'next-export-optimize-images';
import redirects from './src/shared/lib/redirects.mjs';

const cspHeader = `
    default-src 'self';
    connect-src 'self' https://*.mux.com https://*.litix.io https://storage.googleapis.com https://image.mux.com;
    media-src 'self' blob: https://*.mux.com;
    img-src 'self' blob: data: https://assets.theoribeiro.com https://image.mux.com https://*.litix.io;
    script-src 'self' 'unsafe-inline' https://src.litix.io https://www.gstatic.com;
    worker-src 'self' blob:;
    form-action 'self' https://*.mux.com https://storage.googleapis.com;
    style-src 'self' 'unsafe-inline';
    frame-src 'self';
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  output: 'export',
  images: {
    deviceSizes: [390, 430, 640, 768, 1080, 1280, 1920, 2560, 3840],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.theoribeiro.com',
        port: '',
      },
    ],
  },
  // we will handle errors with git action hooks
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Set strict content security policies
  // Next.js 15 expexts redirects to be async functions even if current values don't need to be awaited
  // eslint-disable-next-line @typescript-eslint/require-await
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },
  // Next.js 15 expexts redirects to be async functions even if current values don't need to be awaited
  // eslint-disable-next-line @typescript-eslint/require-await
  async redirects() {
    return redirects;
  },
};

export default withExportImages(nextConfig);
