// scripts/join.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("join-form");
    const modeToggle = document.getElementById("mode");
  
    // --- FORM SUBMISSION ---
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Remove existing message if present
      const oldMessage = form.querySelector(".form-output");
      if (oldMessage) {
        oldMessage.remove();
      }
  
      // Create and display thank you message
      const message = document.createElement("p");
      message.className = "form-output";
      message.textContent = "Thank you for applying to join the Accra Chamber of Commerce! We will contact you soon.";
      form.appendChild(message);
  
      // Reset the form
      form.reset();
    });
  
    // --- DARK MODE TOGGLE ---
    // Load saved preference from localStorage
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "enabled") {
      document.body.classList.add("dark");
      modeToggle.checked = true;
    }
  
    // Toggle listener
    modeToggle.addEventListener("change", () => {
      if (modeToggle.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "enabled");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "disabled");
      }
    });
  });
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "thankyou.html";
  });
  