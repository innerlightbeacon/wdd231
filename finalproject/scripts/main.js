// main.js

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer p");
  const currentYear = new Date().getFullYear();

  // Replace the year in the footer
  if (footer) {
    footer.innerHTML = `&copy; ${currentYear} Ghana Street Food | Designed by Jackson Osei Kumi`;
  }
});
