/**
 * Playwright drives the browser for end-to-end tests.
 * Keep tests deterministic by setting MOCK_AI=1.
 */
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 60_000,
  fullyParallel: true,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    headless: true,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "MOCK_AI=1 next dev",
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});
