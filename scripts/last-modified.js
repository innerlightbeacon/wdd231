// scripts/lastModified.js

document.addEventListener("DOMContentLoaded", () => {
    const modified = document.getElementById("lastModified");
    modified.textContent = `Last Modified: ${document.lastModified}`;
  });
  