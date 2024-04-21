/** @type {import('next').NextConfig} */
import withExportImages from 'next-export-optimize-images';

const nextConfig = withExportImages({
  output: 'export',
});

export default nextConfig;
