// home.js - Handles dynamic elements for the Home Page
document.addEventListener("DOMContentLoaded", () => {
  updateLastModifiedDate();
  displayWeather(); 
  renderSpotlightBusinesses();
});

/**
 * Updates the footer with the last modified date of the document.
 */
function updateLastModifiedDate() {
  const dateSpan = document.getElementById("lastModified");
  if (dateSpan) {
    dateSpan.textContent = `Last Updated: ${document.lastModified}`;
  }
}

/**
 * Displays static weather info. Replace this with real API integration later.
 */
function displayWeather() {
  const weatherContainer = document.getElementById("weather");

  if (weatherContainer) {
    const weatherHTML = `
      <h3>Weather in Accra</h3>
      <p aria-label="Partly Cloudy, 28 degrees Celsius">🌤️ 28°C | Partly Cloudy</p>
      <p>Humidity: 76%</p>
    `;
    weatherContainer.innerHTML = weatherHTML;
  }
}

/**
 * Renders business spotlight sections dynamically.
 */
function renderSpotlightBusinesses() {
  const spotlightContainer = document.getElementById("spotlights");

  const spotlightData = [
    {
      name: "Kwame's Kente",
      description: "Authentic handmade Kente cloths and accessories.",
      image: "images/kwame-kente.webp",
      alt: "Colorful handwoven Kente cloth display"
    },
    {
      name: "Ghana Gold Eats",
      description: "Local cuisine with a touch of gold — Accra's finest dining.",
      image: "images/gold-eats.webp",
      alt: "Table with delicious Ghanaian dishes"
    }
  ];

  spotlightData.forEach(business => {
    const section = document.createElement("section");
    section.classList.add("spotlight-card");

    section.innerHTML = `
      <img src="${business.image}" alt="${business.alt}" loading="lazy" />
      <h4>${business.name}</h4>
      <p>${business.description}</p>
    `;

    spotlightContainer.appendChild(section);
  });
}
