const config = {
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '**/*.{ts,tsx}': () => 'tsc',
  '**/*.{html,json,css,scss,md,mdx,js,jsx,ts,tsx}': ['prettier -w'],
};
export default config;
