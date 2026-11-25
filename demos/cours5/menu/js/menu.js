// JS natif : un seul écouteur sur le document (délégation),
// valable pour tous les boutons qui pilotent un autre élément
document.addEventListener("click", (event) => {
  const button = event.target.closest("button[aria-controls]");
  if (!button) return;
  const id = button.getAttribute("aria-controls");
  const target = document.getElementById(id);
  const expanded = button.getAttribute("aria-expanded") === "true";
  // L'état est lu dans le HTML et annoncé au lecteur d'écran
  button.setAttribute("aria-expanded", String(!expanded));
  target.hidden = expanded;
});
