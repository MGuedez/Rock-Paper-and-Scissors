const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
const buttonSurrender = document.getElementById("surrender");

// ----------función principal del juego----------//
function play() {
    buttonRock.addEventListener("click", () => game("rock"));
    buttonPaper.addEventListener("click", () => game("paper"));
    buttonScissors.addEventListener("click", () => game("scissors"));
}
play();
