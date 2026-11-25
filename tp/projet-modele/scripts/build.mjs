// Construit le site dans dist/ : compile le Sass et copie le reste.
// --watch : reconstruit à chaque modification et sert le site.
import { compile } from "sass";
import { cpSync, mkdirSync, rmSync, watch, writeFileSync } from "node:fs";

function construire() {
  rmSync("dist", { recursive: true, force: true });
  cpSync("src", "dist", {
    recursive: true,
    filter: (chemin) => !chemin.includes("scss"),
  });
  const { css } = compile("src/scss/main.scss", { style: "compressed" });
  mkdirSync("dist/css", { recursive: true });
  writeFileSync("dist/css/main.css", css);
  console.log(`Site construit dans dist/ (${new Date().toLocaleTimeString()})`);
}

try {
  construire();
} catch (erreur) {
  console.error(erreur.message);
  if (!process.argv.includes("--watch")) process.exit(1);
}

if (process.argv.includes("--watch")) {
  watch("src", { recursive: true }, () => {
    try {
      construire();
    } catch (erreur) {
      console.error(erreur.message);
    }
  });
  await import("./serve.mjs");
}
