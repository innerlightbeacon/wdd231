// scripts/directory.js

const dataUrl = 'data/members.json';
const directory = document.getElementById('directory');
const gridBtn = document.getElementById('grid-view');
const listBtn = document.getElementById('list-view');

// Fetch member data from JSON and display it
async function getMembers() {
  try {
    const response = await fetch(dataUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error('Error fetching member data:', error);
    directory.innerHTML = `<p class="error">Unable to load directory. Please try again later.</p>`;
  }
}

// Create and insert member cards
function displayMembers(members) {
  directory.innerHTML = ''; // Clear content

  members.forEach((member) => {
    const card = document.createElement('section');
    card.classList.add('member-card');

    const logo = document.createElement('img');
    logo.src = member.logo;
    logo.alt = `${member.name} Logo`;
    logo.loading = 'lazy';
    logo.width = 150;
    logo.height = 150;

    const name = document.createElement('h3');
    name.textContent = member.name;

    const address = document.createElement('p');
    address.textContent = member.address;

    const phone = document.createElement('p');
    phone.textContent = member.phone;

    const website = document.createElement('a');
    website.href = member.website;
    website.target = '_blank';
    website.rel = 'noopener noreferrer';
    website.textContent = 'Visit Website';

    const membership = document.createElement('p');
    membership.textContent = `Membership Level: ${member.membership}`;

    // Append all elements to the card
    card.append(logo, name, address, phone, website, membership);

    // Add card to the directory
    directory.appendChild(card);
  });
}

// View toggle logic
gridBtn.addEventListener('click', () => {
  directory.classList.add('directory-grid');
  directory.classList.remove('directory-list');
});

listBtn.addEventListener('click', () => {
  directory.classList.add('directory-list');
  directory.classList.remove('directory-grid');
});

// Load members on page load
getMembers();
