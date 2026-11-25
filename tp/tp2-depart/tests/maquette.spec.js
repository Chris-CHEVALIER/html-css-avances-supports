import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const formats = [
  { name: "ordinateur", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

for (const format of formats) {
  test(`fidèle à la maquette (${format.name})`, async ({ page }) => {
    await page.setViewportSize(format);
    await page.goto("/");
    // Attend la police et les images avant la capture
    await page.evaluate(() => document.fonts.ready);
    await expect(page).toHaveScreenshot(
      `accueil-${format.name}.png`,
      { fullPage: true, animations: "disabled" },
    );
  });
}

test("aucune erreur d'accessibilité détectée par axe", async ({
  page,
}) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});
