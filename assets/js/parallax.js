const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountains_behind = document.getElementById("mountainsBehind");
/* const text = document.getElementById("text"); */
const btn = document.getElementById("btn");
const first_layer = document.getElementById("firstLayer");
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  const value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.05 + "px";
  mountains_behind.style.top = value * 0.5 + "px";
  first_layer.style.top = value * 0 + "px";
/*   text.style.marginRight = value * 3.5 + "px";
  text.style.marginTop = value * 1.5 + "px"; */
  btn.style.marginTop = value * 1.5 + "px";
  header.style.top = value * 0.5 + "px";
});
