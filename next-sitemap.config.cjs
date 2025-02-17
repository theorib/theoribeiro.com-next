/* eslint-disable tsdoc/syntax */
/* eslint-disable no-undef */
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://theoribeiro.com',
  generateRobotsTxt: true, // (optional)
  outDir: './out',
  // ...other options
};
