// scripts/join.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("join-form");
  const modeToggle = document.getElementById("mode");

  // --- FORM SUBMISSION HANDLER ---
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Optional: Store form data in localStorage (if needed)
      // const formData = new FormData(form);
      // localStorage.setItem("formData", JSON.stringify(Object.fromEntries(formData.entries())));

      // Redirect to thank you page
      window.location.href = "thankyou.html";
    });
  }

  // --- DARK MODE TOGGLE ---
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "enabled") {
    document.body.classList.add("dark");
    if (modeToggle) modeToggle.checked = true;
  }

  if (modeToggle) {
    modeToggle.addEventListener("change", () => {
      if (modeToggle.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "enabled");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "disabled");
      }
    });
  }
});
