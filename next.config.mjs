/** @type {import('next').NextConfig} */
import withExportImages from 'next-export-optimize-images';
// import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  output: 'export',
  images: {
    deviceSizes: [220, 390, 430, 640, 768, 1080, 1280, 1920, 2048, 2560, 3840],
  },
};

export default withExportImages(nextConfig);
// export default withBundleAnalyzer(withExportImages(nextConfig));
