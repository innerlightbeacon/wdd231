// discover.js

// Select where to display the message
const messageContainer = document.createElement("div");
messageContainer.setAttribute("id", "visit-message");
messageContainer.style.background = "var(--card-bg)";
messageContainer.style.padding = "1rem";
messageContainer.style.borderRadius = "8px";
messageContainer.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
messageContainer.style.marginBottom = "1rem";
messageContainer.style.textAlign = "center";
document.querySelector("main").prepend(messageContainer);

// Get today's date in milliseconds
const today = Date.now();

// Get last visit from localStorage
const lastVisit = Number(localStorage.getItem("lastVisit-ls"));

// Calculate time difference
let message = "";

if (lastVisit) {
  const daysDiff = Math.floor((today - lastVisit) / (1000 * 60 * 60 * 24));
  message = `Welcome back! It’s been ${daysDiff} day${daysDiff !== 1 ? "s" : ""} since your last visit.`;
} else {
  message = "Welcome! This is your first visit.";
}

// Display the message
messageContainer.textContent = message;

// Store the new visit
localStorage.setItem("lastVisit-ls", today);
