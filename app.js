let int = document.getElementById("nameInt");
let gender = document.getElementById("genderSelect");
const container = document.getElementById("container");

function randomNum() {
  return Math.floor(Math.random() * 100) + 1;
}

console.log(randomNum());

function createCard() {
  const div = document.createElement("div");
  div.innerHTML = `<img src="https://randomuser.me/api/portraits/${gender.value}/${randomNum()}.jpg"/>
    <p>${int.value}</p>`;
  container.appendChild(div);
  int.value = "";
}
