document.addEventListener("DOMContentLoaded", function () {
  // 1. Safe DOM access: Fade in hero section
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.classList.add("visible");
  }

  // 2. Parallax mouse effect (logo + overlay float)
  const layers = document.querySelectorAll(".overlay");
  document.addEventListener("mousemove", function (e) {
    layers.forEach(layer => {
      const speed = 0.05;
      const x = (window.innerWidth - e.pageX * speed);
      const y = (window.innerHeight - e.pageY * speed);
      layer.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
});