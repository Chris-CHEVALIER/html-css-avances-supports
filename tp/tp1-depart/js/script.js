function envoyer() {
  var inputs = document.querySelectorAll('.form input[type="text"]');
  var ok = true;
  inputs.forEach(function (input) {
    if (input.value === '') {
      input.style.borderColor = 'red';
      ok = false;
    }
  });
  document.querySelector('.error').style.display = ok ? 'none' : 'block';
  if (ok) alert('Merci !');
}
