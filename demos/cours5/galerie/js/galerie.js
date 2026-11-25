const stage = document.querySelector(".stage img");
const caption = document.querySelector(".stage figcaption");
const thumbs = document.querySelector(".thumbs");

async function show(button) {
  const thumb = button.querySelector("img");
  stage.src = `https://picsum.photos/id/${button.dataset.id}/960/540`;
  stage.alt = thumb.alt;
  caption.textContent = button.dataset.caption;
  thumbs
    .querySelector("[aria-current]")
    .removeAttribute("aria-current");
  button.setAttribute("aria-current", "true");
  // Attendre l'image : la capture « après » la montre chargée
  await stage.decode().catch(() => {});
}

// Délégation : un seul écouteur pour toutes les miniatures
thumbs.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  // Repli : sans l'API, on change l'image sans animation
  if (!document.startViewTransition) {
    show(button);
    return;
  }
  document.startViewTransition(() => show(button));
});
