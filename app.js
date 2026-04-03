let int = document.getElementById("nameInt");
let gender = document.getElementById("genderSelect");
const container = document.getElementById("container");
const cardBox = document.getElementById("card-container")

function randomNum() {
  return Math.floor(Math.random() * 100) + 1;
}

function createCard() {
  cardBox.innerHTML = "" 
  const div = document.createElement("div");
  div.classList.add("card", "w-25");
  div.innerHTML = `<img class="card-img-top" src="https://randomuser.me/api/portraits/${gender.value.toLowerCase()}/${randomNum()}.jpg"/>\
  <div class="card-body">
    <h5 class="card-title">${int.value}</h5>
    </div>`;
  cardBox.appendChild(div);
  int.value = "";
}
