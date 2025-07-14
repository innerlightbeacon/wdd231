// scripts/join.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#membershipForm");
    const timestampField = document.querySelector("#timestamp");
  
    // Auto-fill timestamp field on page load
    const now = new Date();
    timestampField.value = now.toISOString();
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
  
      // Log the data to the console (simulate form processing)
      console.table(data);
      alert("Thank you for applying! We will review your membership soon.");
  
      // Optionally reset the form
      form.reset();
      timestampField.value = new Date().toISOString();
    });
  });
  