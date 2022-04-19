const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");
const icon = document.querySelector("fa-bars");
hamburger.children[1].classList.add("hidden");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
  hamburger.children[0].classList.toggle("hidden");
  hamburger.children[1].classList.toggle("hidden");
});
