// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  timeout: process.env.PW_TIMEOUT ? Number(process.env.PW_TIMEOUT):30000,
  testDir: './src/OpenCart/Tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.PW_WORKER ? process.env.PW_WORKER : 4,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.PW_BASEURL ? process.env.PW_BASEURL : "",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    
    //Capture screenshot after each test failure.
    screenshot:  'only-on-failure',

    // Record video only when retrying a test for the first time.
    video: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: process.env.PW_BROWSER ? process.env.PW_BROWSER :'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
    
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

