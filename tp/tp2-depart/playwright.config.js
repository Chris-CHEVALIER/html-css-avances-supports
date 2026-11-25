import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests",
  // Les captures de référence sont les PNG de la maquette
  snapshotPathTemplate: "maquette/{arg}{ext}",
  expect: {
    // Tolérance : 3 % de pixels différents (polices lissées
    // différemment selon le système)
    toHaveScreenshot: { maxDiffPixelRatio: 0.03 },
  },
  use: { baseURL: "http://localhost:4173" },
  webServer: {
    command: "npm run serve",
    url: "http://localhost:4173",
    reuseExistingServer: true,
  },
});
