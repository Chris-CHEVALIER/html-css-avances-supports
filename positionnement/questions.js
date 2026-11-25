// Test de positionnement – questions partagées par la page du test et celle des résultats.
// `bonne` est l'indice de la bonne réponse dans `choix`. « Je ne sais pas » est ajouté automatiquement à la fin.

export const CLASSES = ["3AW"];

export const QUESTIONS = [
  {
    theme: "HTML",
    intitule: "Quel élément convient pour la zone de navigation principale d'un site ?",
    choix: ["<nav>", "<div class=\"nav\">", "<menu>", "<aside>"],
    bonne: 0,
  },
  {
    theme: "HTML",
    intitule: "Une carte présente un concert : on peut la lire seule, hors de la page. Quel élément l'entoure ?",
    choix: ["<article>", "<section>", "<div>", "<aside>"],
    bonne: 0,
  },
  {
    theme: "Accessibilité",
    intitule: "Que lit un lecteur d'écran pour cette image ?",
    code: `<img src="logo.svg" alt="">`,
    choix: [
      "Rien : l'image est ignorée, considérée comme décorative",
      "Le nom du fichier, « logo.svg »",
      "« Image sans description »",
      "Le texte du lien le plus proche",
    ],
    bonne: 0,
  },
  {
    theme: "Accessibilité",
    intitule: "Que manque-t-il à ce bouton pour être utilisable au clavier ?",
    code: `<div class="btn" onclick="buy()">Acheter</div>`,
    choix: [
      "Presque tout : il faut un vrai <button> (focus, Entrée, Espace, rôle)",
      "Rien, onclick suffit",
      "Seulement un attribut tabindex=\"0\"",
      "Seulement un attribut aria-label",
    ],
    bonne: 0,
  },
  {
    theme: "CSS",
    intitule: "Quelle règle l'emporte sur le paragraphe ?",
    code: `<p id="intro" class="lead">Bonjour</p>\n\n.lead { color: blue; }\n#intro { color: red; }\np.lead { color: green; }`,
    choix: ["#intro (rouge)", "p.lead (vert), la dernière écrite", ".lead (bleu)", "Aucune, les trois s'annulent"],
    bonne: 0,
  },
  {
    theme: "CSS",
    intitule: "Que sélectionne <code>.card:has(img)</code> ?",
    choix: [
      "Les éléments .card qui contiennent une image",
      "Les images placées dans un élément .card",
      "Les éléments .card qui suivent une image",
      "Rien, :has() n'existe pas en CSS",
    ],
    bonne: 0,
  },
  {
    theme: "CSS",
    intitule: "Que vaut la couleur du texte du bouton ?",
    code: `:root { --brand: crimson; }\n.btn { --brand: teal; }\n.btn span { color: var(--brand, black); }\n\n<button class="btn"><span>OK</span></button>`,
    choix: ["teal", "crimson", "black", "La couleur par défaut du navigateur"],
    bonne: 0,
  },
  {
    theme: "Mise en page",
    intitule: "Que fait cette grille dans un conteneur de 1000 px de large ?",
    code: `.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}`,
    choix: [
      "Elle crée 3 colonnes de largeur égale",
      "Elle crée 4 colonnes de 300 px, la dernière débordant",
      "Elle crée une seule colonne de 1000 px",
      "Elle crée 3 colonnes de 300 px et laisse 100 px vides",
    ],
    bonne: 0,
  },
  {
    theme: "Mise en page",
    intitule: "Quelle est la différence entre une media query et une container query ?",
    choix: [
      "La container query réagit à la taille d'un élément parent, la media query à celle de la fenêtre",
      "Aucune, ce sont deux syntaxes du même mécanisme",
      "La container query ne fonctionne qu'avec Grid",
      "La media query ne fonctionne que sur mobile",
    ],
    bonne: 0,
  },
  {
    theme: "Mise en page",
    intitule: "Que donne <code>font-size: clamp(1rem, 2.5vw, 2rem)</code> ?",
    choix: [
      "Une taille qui suit 2,5 % de la largeur de la fenêtre, sans descendre sous 1rem ni dépasser 2rem",
      "Une taille fixe de 2,5vw",
      "La plus grande des trois valeurs, soit 2rem",
      "Une taille choisie au hasard entre 1rem et 2rem",
    ],
    bonne: 0,
  },
  {
    theme: "Sass",
    intitule: "Que produit ce code Sass une fois compilé ?",
    code: `$sizes: (s: 8px, m: 16px);\n\n@each $name, $value in $sizes {\n  .mt-#{$name} { margin-top: $value; }\n}`,
    choix: [
      "Deux classes : .mt-s (8px) et .mt-m (16px)",
      "Une classe .mt-#{$name}",
      "Une erreur : @each ne parcourt pas les maps",
      "Une variable CSS --sizes",
    ],
    bonne: 0,
  },
  {
    theme: "JavaScript",
    intitule: "Quelle ligne remplace <code>$(\".menu\").toggleClass(\"open\")</code> de jQuery en JavaScript natif ?",
    choix: [
      "document.querySelector(\".menu\").classList.toggle(\"open\")",
      "document.getElement(\".menu\").toggleClass(\"open\")",
      "window.$(\".menu\").classList.add(\"open\")",
      "document.querySelector(\".menu\").className = \"open\"",
    ],
    bonne: 0,
  },
];

// Auto-évaluation (non notée)
export const AUTO = [
  { cle: "sass", intitule: "Sass / SCSS" },
  { cle: "figma", intitule: "Intégration d'une maquette Figma" },
  { cle: "accessibilite", intitule: "Accessibilité (WCAG, RGAA, lecteur d'écran)" },
];
export const NIVEAUX = ["Jamais utilisé", "En cours ou en tutoriel", "Dans un projet personnel ou scolaire", "En entreprise"];

export const JE_NE_SAIS_PAS = -1;
