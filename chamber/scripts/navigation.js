// scripts/navigation.js

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("#menu-btn");
    const nav = document.querySelector(".main-nav");
  
    menuButton.addEventListener("click", () => {
      nav.classList.toggle("open");
      menuButton.classList.toggle("open");
    });
  });
  