/** @type {import('next').NextConfig} */
import withExportImages from 'next-export-optimize-images';
// import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  output: 'export',
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [220, 390, 430, 640, 750, 828, 1080, 1280, 1920, 2048, 3840],
  },

  // assetPrefix: '/',
};

export default withExportImages(nextConfig);
// export default withBundleAnalyzer(withExportImages(nextConfig));
