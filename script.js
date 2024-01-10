const colors = ["red", "grey", "#8e6fc1", "rgb(91, 206, 139)"];
const button = document.getElementById("button");
const randomColor = document.querySelector(".random_color");

button.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  randomColor.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
