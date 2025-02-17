const config = {
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix --quiet'],
  '**/*.{ts,tsx}': () => 'tsc --noEmit --skipLibCheck',
  '**/*.{html,json,css,scss,md,mdx,js,jsx,ts,tsx}': ['prettier -w'],
};
export default config;
