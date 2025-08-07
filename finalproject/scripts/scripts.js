// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const message = form.elements["message"].value.trim();

    if (name && email && message) {
      // Save to localStorage
      const contactEntry = {
        name,
        email,
        message,
        date: new Date().toLocaleString()
      };

      let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
      messages.push(contactEntry);
      localStorage.setItem("contactMessages", JSON.stringify(messages));

      // Show confirmation and reset
      alert("Thanks for your message! We'll get back to you soon.");
      form.reset();
    } else {
      alert("Please fill out all fields before submitting.");
    }
  });
});
