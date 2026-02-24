import { playwright } from '@vitest/browser-playwright';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    passWithNoTests: true,
    projects: [
      {
        extends: 'vitest.config.ts',
        test: {
          name: 'unit',
          include: ['app/**/*.unit.spec.ts'],
          environment: 'jsdom',
        },
      },
      {
        extends: 'vitest.config.ts',
        test: {
          name: 'browser',
          include: ['app/**/*.browser.spec.{ts,tsx}'],
          browser: {
            enabled: true,
            provider: playwright(),
            // https://vitest.dev/guide/browser/playwright
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['vitest.browser.setup.ts'],
        },
      },
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      // 適宜調整
      include: [
        'app/features/*/components/containers/*.{ts,tsx}',
        'app/features/*/{hooks,usecases}/*.{ts,tsx}',
        'app/shared/{hooks,utils}/*.{ts,tsx}',
      ],
      exclude: [
        'app/features/*/index.ts', // エントリポイントは除外
        'app/**/*.spec.ts',
        'app/**/*.test.ts',
      ],
    },
  },
});
