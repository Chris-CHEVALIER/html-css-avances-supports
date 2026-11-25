# Nom du framework

Mini-framework CSS et intégration de la maquette « Titre de la maquette ».
Projet du module Langages HTML & CSS avancés (ESGI, 3AW).

- **Site en ligne** : https://compte.github.io/depot/
- **Guide de style** : https://compte.github.io/depot/style-guide.html
- **Maquette** : [« Titre »](lien Figma Community) par Auteur, sous licence CC BY 4.0

## Membres et rôles

| Prénom Nom | Compte GitHub | Ce que je réalise |
|---|---|---|
| … | … | … |

## Lancer le projet

Prérequis : Node.js 22 (LTS).

```bash
npm install
npm run dev
```

Le site est servi sur http://localhost:4173 et se reconstruit à chaque modification.

| Commande | Rôle |
|---|---|
| `npm run build` | Construit le site dans `dist/` |
| `npm run lint` | Stylelint et html-validate |
| `npm test` | Régression visuelle, axe et débordement (Playwright) |
| `npm run lighthouse` | Audit Lighthouse avec les seuils du projet |
| `npm run qualite` | Tout ce qui précède, comme la CI |

Avant le premier `npm test` en local : `npx playwright install chromium`.
Les captures de référence sont produites par la CI (onglet Actions → « Qualité et déploiement » → Run workflow → cocher « Mettre à jour les captures »).

## Le framework

### Design tokens

Décrivez vos tokens (couleurs, typographie, espacements, rayons) et leur origine dans la maquette.

### Architecture

Décrivez vos couches (`@layer`) et l'organisation de `src/scss/`.

### Composants

| Composant | Classe ou élément | Interactif | Accessibilité vérifiée |
|---|---|---|---|
| Bouton | `.button` | non | focus visible, contraste |
| … | … | … | … |

## Pages intégrées

1. Accueil (`index.html`)
2. …
3. …

## Accessibilité et qualité

Résultats Lighthouse, tests axe, vérifications au clavier et au lecteur d'écran.

## Bonus réalisés

…

## Usage de l'IA

Outils utilisés, pour quelles tâches, et ce que nous avons vérifié ou réécrit.
