let nameInput = document.getElementById("nameInt");
let genderSelect = document.getElementById("genderSelect");
const container = document.getElementById("container");
const cardBox = document.getElementById("card-container");

function randomNum() {
  return Math.floor(Math.random() * 100) + 1;
}

function createCard() {
  cardBox.innerHTML = "";
  if (nameInput.value.trim() === "") {
    alert("Please write a name");
    return;
  }
  const div = document.createElement("div");
  div.classList.add("card", "w-25");
  div.innerHTML = `<img class="card-img-top" src="https://randomuser.me/api/portraits/${genderSelect.value.toLowerCase()}/${randomNum()}.jpg"/>\
  <div class="card-body">
    <h5 class="card-title">${nameInput.value}</h5>
    </div>`;
  cardBox.appendChild(div);
  nameInput.value = "";
}
