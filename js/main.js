/* Rockaloud, maquette statique : JS minimal (menu mobile + vidéo du hero). */
(function () {
  "use strict";

  /* Menu mobile */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Hero : vidéo desktop ou mobile selon la largeur d'écran.
     Si la vidéo desktop (rockaloud-accueil-4.mp4) est absente du dossier media,
     on bascule sur la vidéo mobile et on affiche la note d'attente. */
  var hero = document.querySelector(".hero video");

  if (hero) {
    var desktopSrc = hero.getAttribute("data-desktop");
    var mobileSrc = hero.getAttribute("data-mobile");
    var note = document.querySelector(".hero__note");
    var isDesktop = window.matchMedia("(min-width: 768px)").matches;

    var useMobile = function () {
      if (hero.getAttribute("src") !== mobileSrc) {
        hero.setAttribute("src", mobileSrc);
        hero.load();
        hero.play().catch(function () {});
      }
      if (note) { note.hidden = false; }
    };

    hero.addEventListener("error", useMobile);

    if (isDesktop && desktopSrc) {
      hero.setAttribute("src", desktopSrc);
    } else {
      hero.setAttribute("src", mobileSrc);
      if (note) { note.hidden = true; }
    }

    hero.load();
    hero.play().catch(function () {});
  }
})();
