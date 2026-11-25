// Exemple de Web Component : un bloc repliable accessible.
// <fw-disclosure>
//   <button slot="trigger">Titre</button>
//   <div>Contenu</div>
// </fw-disclosure>
class FwDisclosure extends HTMLElement {
  connectedCallback() {
    const trigger = this.querySelector("button");
    const panel = trigger?.nextElementSibling;
    if (!trigger || !panel) return;
    panel.id ||= `fw-disclosure-${crypto.randomUUID()}`;
    trigger.setAttribute("aria-controls", panel.id);
    trigger.setAttribute("aria-expanded", "false");
    panel.hidden = true;
    trigger.addEventListener("click", () => {
      const open = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!open));
      panel.hidden = open;
    });
  }
}

customElements.define("fw-disclosure", FwDisclosure);
