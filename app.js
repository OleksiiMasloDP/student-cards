let int = document.getElementById("nameInt");
let gender = document.getElementById("genderSelect");
const container = document.getElementById("container");

function randomNum() {
  return Math.floor(Math.random() * 100) + 1;
}

console.log(randomNum());

function createCard() {
  const div = document.createElement("div");
  div.classList.add("card", "w-25");
  div.innerHTML = `<img class="card-img-top" src="https://randomuser.me/api/portraits/${gender.value}/${randomNum()}.jpg"/>\
  <div class="card-body">
    <h5 class="card-title">${int.value}</h5>
    </div>`;
  container.appendChild(div);
  int.value = "";
}
