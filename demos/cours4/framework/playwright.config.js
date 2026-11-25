import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests",
  // Une seule capture de référence par test, quel que soit le
  // système (sinon Playwright ajoute -darwin, -linux…)
  snapshotPathTemplate: "{testDir}/captures/{arg}{ext}",
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.01 },
  },
  use: { baseURL: "http://localhost:4173" },
  projects: [
    { name: "ordinateur", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  // Lance un serveur local avant les tests, l'arrête après
  webServer: {
    command: "npm run serve",
    url: "http://localhost:4173",
    reuseExistingServer: !process.env.CI,
  },
});
