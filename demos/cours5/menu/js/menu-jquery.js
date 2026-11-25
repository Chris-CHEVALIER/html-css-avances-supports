// jQuery (2006) : sélectionner, écouter, modifier en une ligne
// À ne plus reproduire : rien ne dit au lecteur d'écran que le
// menu est ouvert (pas d'aria-expanded)
$(function () {
  $(".menu-toggle").on("click", function () {
    $(".menu").toggleClass("is-open");
  });
});
