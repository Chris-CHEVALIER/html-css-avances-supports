// Petit serveur statique pour dist/ : http://localhost:4173
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".woff2": "font/woff2",
};

createServer(async (requete, reponse) => {
  let chemin = decodeURIComponent(new URL(requete.url, "http://x").pathname);
  if (chemin.endsWith("/")) chemin += "index.html";
  const fichier = join("dist", normalize(chemin).replace(/^(\.\.[/\\])+/, ""));
  try {
    const contenu = await readFile(fichier);
    reponse.writeHead(200, {
      "Content-Type": TYPES[extname(fichier)] ?? "application/octet-stream",
    });
    reponse.end(contenu);
  } catch {
    reponse.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    reponse.end("Page introuvable");
  }
}).listen(4173, () => console.log("Site servi sur http://localhost:4173"));
