import type { NextConfig } from 'next';
import withExportImages from 'next-export-optimize-images';
import redirects from './src/shared/lib/redirects.mjs';

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://player.vimeo.com;
    style-src 'self' 'unsafe-inline';
    frame-src 'self' https://player.vimeo.com;
    img-src 'self' blob: data: https://assets.theoribeiro.com https://*.vimeocdn.com;
    connect-src 'self' https://vimeo.com;
    media-src 'self';
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
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
  async redirects() {
    return redirects;
  },
};

export default withExportImages(nextConfig);
