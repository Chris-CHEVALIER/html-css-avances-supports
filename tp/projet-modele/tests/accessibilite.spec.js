import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { PAGES } from "./pages.js";

// Aucune violation axe des règles WCAG 2.2 niveaux A et AA.
for (const page of PAGES) {
  test(`accessibilité de la page ${page.nom}`, async ({ page: onglet }) => {
    await onglet.goto(page.url);
    const resultat = await new AxeBuilder({ page: onglet })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(resultat.violations).toEqual([]);
  });

  test(`pas de défilement horizontal sur ${page.nom}`, async ({
    page: onglet,
  }) => {
    await onglet.goto(page.url);
    const deborde = await onglet.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(deborde).toBe(false);
  });
}
