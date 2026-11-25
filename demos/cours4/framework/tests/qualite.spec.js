import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("la page n'a pas changé d'apparence", async ({ page }, info) => {
  await page.goto("/");
  // Une capture par projet : programme-ordinateur.png…
  await expect(page).toHaveScreenshot(
    `programme-${info.project.name}.png`,
    { fullPage: true },
  );
});

test("aucune erreur d'accessibilité détectée par axe", async ({
  page,
}) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});
