import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', 'e2e', '.astro'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'dist/',
        'e2e/',
        'src/test/',
        '**/*.spec.ts',
        '**/*.test.ts',
        '**/*.spec.tsx',
        '**/*.test.tsx',
        '*.config.ts',
        '*.config.js',
        'src/env.d.ts',
      ],
      // Required coverage thresholds
      thresholds: {
        statements: 50,
        branches: 50,
        functions: 50,
        lines: 50,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
