import { defineConfig, devices } from "@playwright/test";

// Les captures de référence sont faites dans la CI (Linux) :
// lancez le workflow « Mettre à jour les captures » après
// un changement visuel voulu.
export default defineConfig({
  testDir: "tests",
  snapshotPathTemplate:
    "{testDir}/captures/{testFilePath}/{arg}-{projectName}{ext}",
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.01, animations: "disabled" },
  },
  use: { baseURL: "http://localhost:4173" },
  webServer: {
    command: "npm run build && npm run serve",
    url: "http://localhost:4173",
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    { name: "mobile", use: { ...devices["Pixel 7"] } },
    { name: "tablette", use: { viewport: { width: 820, height: 1180 } } },
    { name: "bureau", use: { viewport: { width: 1440, height: 900 } } },
  ],
});
