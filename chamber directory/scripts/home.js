// scripts/home.js

document.addEventListener("DOMContentLoaded", () => {
    displayDate();
    displayWeather();
    displaySpotlights();
  });
  
  function displayDate() {
    const dateSpan = document.getElementById("lastModified");
    dateSpan.textContent = document.lastModified;
  }
  
  function displayWeather() {
    const weatherContainer = document.getElementById("weather");
    // Dummy data; replace with real API later
    const weatherHTML = `
      <h3>Weather in Accra</h3>
      <p>🌤️ 28°C | Partly Cloudy</p>
      <p>Humidity: 76%</p>
    `;
    weatherContainer.innerHTML = weatherHTML;
  }
  
  function displaySpotlights() {
    const spotlightContainer = document.getElementById("spotlights");
    const businesses = [
      {
        name: "Kwame's Kente",
        description: "Authentic handmade Kente cloths and accessories.",
        image: "images/kwame-kente.webp"
      },
      {
        name: "Ghana Gold Eats",
        description: "Local cuisine with a touch of gold — Accra's finest dining.",
        image: "images/gold-eats.webp"
      }
    ];
  
    businesses.forEach(biz => {
      const section = document.createElement("section");
      section.classList.add("spotlight-card");
      section.innerHTML = `
        <img src="${biz.image}" alt="${biz.name}" loading="lazy" />
        <h4>${biz.name}</h4>
        <p>${biz.description}</p>
      `;
      spotlightContainer.appendChild(section);
    });
  }
  