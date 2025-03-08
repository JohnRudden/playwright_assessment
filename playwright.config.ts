import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

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
  reporter: [cucumberReporter('html', { outputFile: 'cucumber-report/index.html' })],

  // Each test is given 60 seconds.
  timeout: 60000,

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'https://demo.quartexcollections.com/',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1920, height: 1080 }, screenshot: 'on', video: 'on'}, 
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], viewport: { width: 1920, height: 1080 }, screenshot: 'on', video: 'on'},
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], deviceScaleFactor:1, viewport: { width: 1920, height: 1080 }, screenshot: 'on', video: 'on'},
    },
  ],
});

