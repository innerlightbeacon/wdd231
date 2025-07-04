// scripts/lastModified.js

document.addEventListener("DOMContentLoaded", () => {
    const modified = document.getElementById("lastModified");
    const formattedDate = new Date(document.lastModified).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "2-digit"
    });
    modified.textContent = `Last Modified: ${formattedDate}`;
  });
  