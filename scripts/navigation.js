// scripts/navigation.js

// Toggle the navigation menu for small screens
const hamburger = document.querySelector("#menu");
const nav = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamburger.classList.toggle("open");
});