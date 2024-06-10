import { UserConfig, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()] as UserConfig['plugins'],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/testUtils/setupTests.ts'],
    coverage: {
      reporter: ['html'],
    },
    // alias: {
    //   '@/': new URL('./src/', import.meta.url).pathname,
    // },
  },
});
