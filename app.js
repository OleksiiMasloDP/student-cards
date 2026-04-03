const nameInput = document.getElementById('nameInput');
const genderSelect = document.getElementById('genderSelect');
const createCard = document.getElementById('createCard');
const Container = document.getElementById('Container');

function all() {
 const name = nameInput.value.trim();
    const gender = genderSelect.value;
     const randomNum = Math.floor(Math.random() * 100) + 1;
if (name === "") {
    alert("Please write name");
     return;
 }
 const card = document.createElement('div');
    card.classList.add('card');
     card.innerHTML = `<img src="https://randomuser.me/api/portraits/${gender}/${randomNum}.jpg" alt="${name}"> <h3>${name}</h3>`;
    Container.appendChild(card);
};
createCard.addEventListener('click',all)