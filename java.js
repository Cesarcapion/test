const btnsShow = document.querySelectorAll(".solution");
const answers = document.querySelectorAll(".reponse");

const buttonTexts = [
  "Daniel Abdoulaly",
  "Liliane Bouzit",
  "Romain Rodrigues",
  "César Capion"
];

const buttonTexts2 = [
  "daniel.abdoulaly@epita.fr",
  "bliliane571@gmail.com",
  "romain.rodrigues136@gmail.com",
  "cesarcapion@gmail.com"
];

const clickBtn = function (index) {
  return function () {
    if (answers[index].classList.contains("cache")) {
      answers[index].classList.remove("cache");
      btnsShow[index].textContent = buttonTexts2[index];
    } else {
      answers[index].classList.add("cache");
      btnsShow[index].textContent = buttonTexts[index];
    }
  };
};

for (var i = 0; i < btnsShow.length; i++) {
  btnsShow[i].addEventListener("click", clickBtn(i));
}