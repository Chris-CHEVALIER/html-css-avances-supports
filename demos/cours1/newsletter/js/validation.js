// Validation accessible : message lié au champ, focus sur l'erreur
const form = document.querySelector("#newsletter");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-erreur");
const status = document.querySelector("#statut");

function checkEmail() {
  let message = "";
  if (email.validity.valueMissing) {
    message = "Saisissez votre adresse e-mail.";
  } else if (email.validity.typeMismatch) {
    message = "L'adresse doit contenir un @, comme nom@exemple.fr.";
  }
  emailError.textContent = message;
  email.setAttribute("aria-invalid", String(message !== ""));
  return message === "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent = "";
  if (!checkEmail()) {
    email.focus();
    return;
  }
  status.textContent = "Merci, votre inscription est enregistrée.";
  form.reset();
});

// Une fois signalée, l'erreur se corrige pendant la saisie
email.addEventListener("input", () => {
  if (email.getAttribute("aria-invalid") === "true") checkEmail();
});
