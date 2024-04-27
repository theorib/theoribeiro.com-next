/** @type {import('next').NextConfig} */
import withExportImages from 'next-export-optimize-images';
// import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  output: 'export',
  // assetPrefix: '/',
};

export default withExportImages(nextConfig);
// export default withBundleAnalyzer(withExportImages(nextConfig));
