// scripts/darkmode.js
document.addEventListener("DOMContentLoaded", () => {
    const modeToggle = document.querySelector("#mode");
    const body = document.body;
  
    modeToggle.addEventListener("change", () => {
      if (modeToggle.checked) {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }
    });
  });
  