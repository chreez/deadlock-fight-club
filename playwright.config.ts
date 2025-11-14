import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration for Deadlock Fight Club
 * Lightweight E2E tests targeting Chrome desktop + mobile Safari
 */
export default defineConfig({
  testDir: './e2e',

  // Fail fast on CI
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Reporter
  reporter: process.env.CI ? 'github' : 'html',

  use: {
    baseURL: 'http://localhost:4173', // Vite preview server
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  // Test against Chrome desktop + mobile Safari only (lightweight)
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 13'] },
    },
  ],

  // Start preview server before tests
  webServer: {
    command: 'npm run preview',
    url: 'http://localhost:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
