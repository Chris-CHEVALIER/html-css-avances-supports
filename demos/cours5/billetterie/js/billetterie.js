const dialog = document.querySelector("#ticket-dialog");
const opener = document.querySelector("#open-ticket");
const message = document.querySelector("#message");

opener.addEventListener("click", () => {
  dialog.returnValue = "";
  dialog.showModal(); // modale : le reste de la page devient inerte
});

// Le bouton qui envoie le formulaire donne sa value à returnValue
dialog.addEventListener("close", () => {
  if (dialog.returnValue !== "confirm") return;
  const quantity = dialog.querySelector("#quantity").value;
  message.textContent = `${quantity} pass ajouté(s) au panier.`;
});

// Clic sur le fond : la cible est l'élément dialog lui-même,
// car le formulaire occupe tout l'intérieur de la modale
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close("cancel");
});
