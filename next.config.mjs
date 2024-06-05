import withExportImages from 'next-export-optimize-images';
// import withBundleAnalyzer from '@next/bundle-analyzer';

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
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
  headers() {
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
};

export default withExportImages(nextConfig);
