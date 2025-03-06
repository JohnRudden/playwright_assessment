import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  featuresRoot: './src/tests/'
});

export default defineConfig({
  // Test directory 
  testDir,

  // Run all tests in parallel.
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: process.env.CI ? 1 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  reporter: 'html',

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'https://demo.quartexcollections.com/',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], screenshot: 'on', video: 'on'},
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], screenshot: 'only-on-failure', video: 'retain-on-failure'},
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], deviceScaleFactor: 1, screenshot: 'only-on-failure', video: 'retain-on-failure'},
    },
  ],
});