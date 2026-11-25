const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host { display: inline-block; }
    .box {
      display: flex;
      gap: var(--cp-gap, 1rem);
      padding: 1rem 1.5rem;
      border-radius: var(--cp-radius, 12px);
      color: var(--cp-on-surface, white);
      background: var(--cp-surface, #1b1e3c);
    }
    .unit { display: grid; text-align: center; }
    .value {
      font-size: 2rem;
      font-weight: 700;
      font-variant-numeric: tabular-nums;
    }
  </style>
  <p part="label"><slot>Début du festival dans</slot></p>
  <div class="box" part="box" role="timer">
    <span class="unit"><span class="value" id="days"></span>jours</span>
    <span class="unit"><span class="value" id="hours"></span>h</span>
    <span class="unit"><span class="value" id="minutes"></span>min</span>
    <span class="unit"><span class="value" id="seconds"></span>s</span>
  </div>
`;

class CpCountdown extends HTMLElement {
  static observedAttributes = ["date"];
  #timer;

  constructor() {
    super();
    const root = this.attachShadow({ mode: "open" });
    root.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.#render();
    this.#timer = setInterval(() => this.#render(), 1000);
  }

  disconnectedCallback() {
    clearInterval(this.#timer);
  }

  attributeChangedCallback() {
    this.#render();
  }

  #render() {
    const end = new Date(this.getAttribute("date")).getTime();
    const rest = Math.max(0, (end - Date.now()) / 1000) || 0;
    const values = {
      days: rest / 86400,
      hours: (rest % 86400) / 3600,
      minutes: (rest % 3600) / 60,
      seconds: rest % 60,
    };
    for (const [id, value] of Object.entries(values)) {
      const cell = this.shadowRoot.getElementById(id);
      cell.textContent = String(Math.floor(value)).padStart(2, "0");
    }
  }
}

customElements.define("cp-countdown", CpCountdown);
