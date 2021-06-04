const toggleNav = document.querySelector(".toggle-nav");
const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");
const introContainer = document.querySelector(".intro-container");
const navLinksLI = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  if (navLinks.classList.contains("open")) {
    toggleNav.src = "../images/icon-close.svg";
    introContainer.style.backgroundColor = "rgba(0,0,0,0.3)";
  } else {
    toggleNav.src = "../images/icon-hamburger.svg";
    introContainer.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
