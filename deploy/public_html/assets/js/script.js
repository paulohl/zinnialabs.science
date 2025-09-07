// Parallax mouse effect (logo + overlay float)
document.addEventListener("mousemove", function(e) {
  const layers = document.querySelectorAll(".overlay");
  layers.forEach(layer => {
    const speed = 0.05;
    const x = (window.innerWidth - e.pageX * speed);
    const y = (window.innerHeight - e.pageY * speed);
    layer.style.transform = `translate(${x}px, ${y}px)`;
  });
});
