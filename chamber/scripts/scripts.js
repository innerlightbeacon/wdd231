document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector("#member-cards");

  // Fetch and display member cards
  fetch("data/members.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      const members = data.members;

      const filteredMembers = members.filter(member =>
        member.membershipLevel === 2 || member.membershipLevel === 3
      );

      filteredMembers.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("member-card");

        card.innerHTML = `
          <img src="images/${member.image}" alt="Logo of ${member.name}">
          <h2>${member.name}</h2>
          <p><strong>Address:</strong> ${member.address}</p>
          <p><strong>Phone:</strong> ${member.phone}</p>
          <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
          <p>${member.description}</p>
        `;

        cardsContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error fetching member data:", error);
      cardsContainer.innerHTML = "<p>Sorry, we couldn't load member data at this time.</p>";
    });

  // View toggle functionality
  const gridBtn = document.getElementById("grid-view");
  const listBtn = document.getElementById("list-view");

  gridBtn.addEventListener("click", () => {
    cardsContainer.classList.add("grid-cards");
    cardsContainer.classList.remove("list-cards");
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
  });

  listBtn.addEventListener("click", () => {
    cardsContainer.classList.add("list-cards");
    cardsContainer.classList.remove("grid-cards");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
  });

  // Set the current year in the footer
  document.getElementById("year").textContent = new Date().getFullYear();
});
