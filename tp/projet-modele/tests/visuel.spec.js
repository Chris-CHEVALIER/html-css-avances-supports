import { test, expect } from "@playwright/test";
import { PAGES } from "./pages.js";

// Régression visuelle : chaque page est comparée à sa capture
// de référence, page entière, pour chaque taille d'écran.
for (const page of PAGES) {
  test(`rendu de la page ${page.nom}`, async ({ page: onglet }) => {
    await onglet.goto(page.url);
    // Attendre les polices : sinon la capture varie d'un essai à l'autre
    await onglet.evaluate(() => document.fonts.ready);
    await expect(onglet).toHaveScreenshot(`${page.nom}.png`, {
      fullPage: true,
    });
  });
}
