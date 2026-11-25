// Motif « Tabs » de l'APG du W3C : un seul onglet dans l'ordre
// de tabulation, les flèches passent d'un onglet à l'autre
const tablist = document.querySelector('[role="tablist"]');
const tabs = [...tablist.querySelectorAll('[role="tab"]')];

function select(tab) {
  for (const other of tabs) {
    const selected = other === tab;
    other.setAttribute("aria-selected", String(selected));
    other.tabIndex = selected ? 0 : -1;
    const panelId = other.getAttribute("aria-controls");
    document.getElementById(panelId).hidden = !selected;
  }
  tab.focus();
}

tablist.addEventListener("click", (event) => {
  const tab = event.target.closest('[role="tab"]');
  if (tab) select(tab);
});

tablist.addEventListener("keydown", (event) => {
  const index = tabs.indexOf(document.activeElement);
  const targets = {
    ArrowRight: index + 1,
    ArrowLeft: index - 1,
    Home: 0,
    End: tabs.length - 1,
  };
  if (!(event.key in targets)) return;
  event.preventDefault();
  // at() accepte -1 (dernier) ; le modulo revient au premier
  select(tabs.at(targets[event.key] % tabs.length));
});
