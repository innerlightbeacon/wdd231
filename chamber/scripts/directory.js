// scripts/directory.js

const dataUrl = 'data/members.json';
const directory = document.getElementById('directory');
const gridBtn = document.getElementById('grid-view');
const listBtn = document.getElementById('list-view');

// Fetch and display members
async function getMembers() {
  try {
    const response = await fetch(dataUrl);
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error("Failed to load members:", error);
  }
}

function displayMembers(members) {
  directory.innerHTML = ''; // Clear before display

  members.forEach((member) => {
    const card = document.createElement('section');
    card.classList.add('member-card');

    const logo = document.createElement('img');
    logo.setAttribute('src', member.logo);
    logo.setAttribute('alt', `${member.name} logo`);
    logo.setAttribute('loading', 'lazy');

    const name = document.createElement('h3');
    name.textContent = member.name;

    const address = document.createElement('p');
    address.textContent = member.address;

    const phone = document.createElement('p');
    phone.textContent = member.phone;

    const website = document.createElement('a');
    website.setAttribute('href', member.website);
    website.setAttribute('target', '_blank');
    website.textContent = "Visit Website";

    const membership = document.createElement('p');
    membership.textContent = `Membership Level: ${member.membership}`;

    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);

    directory.appendChild(card);
  });
}

// View toggle
gridBtn.addEventListener('click', () => {
  directory.classList.add('directory-grid');
  directory.classList.remove('directory-list');
});

listBtn.addEventListener('click', () => {
  directory.classList.add('directory-list');
  directory.classList.remove('directory-grid');
});

// Initialize
getMembers();
