const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
const buttonSurrender = document.getElementById("surrender");

let movedMachine = document.getElementById("movementMachine");
let movedUser = document.getElementById("movementUser");

// ----------función principal del juego----------//
function play() {
    buttonRock.addEventListener("click", () => game("rock"));
    buttonPaper.addEventListener("click", () => game("paper"));
    buttonScissors.addEventListener("click", () => game("scissors"));
}
play();

// ----------funcion reglas del juego----------//
function game(option) {
    const motionPc = machineOption();
    const motionUser = option;
    let optUser = document.getElementById("opt__user");

    movedUser.style.display = "none";
    optUser.style.display = "block";

    // roundGame = roundGame + 1;
    // round.innerHTML = "Round"
    // numberRound.style.display = "block";
    // numberRound.innerHTML = "#" + roundGame;

    if (motionUser === "rock") {
        optUser.src = "https://i.postimg.cc/3RytWMHj/piedra.png";
    } else if(motionUser === "paper"){
        optUser.src = "https://i.postimg.cc/nLrkw8M8/papel.png";
    } else {
        optUser.src = "https://i.postimg.cc/rpH9BhtD/tijeras.png";
    }

    if ((motionUser === "rock") && (motionPc === "scissors")) {
        win(motionUser, motionPc);
    } else if ((motionUser === "paper") && (motionPc === "rock")) {
        win(motionUser, motionPc);
    } else if ((motionUser === "scissors") && (motionPc === "paper")) {
        win(motionUser, motionPc);
    } else if (motionUser === motionPc) {
        tie();
    } else {
        lose(motionUser);
    }
    alert(motionUser);
}

// ----------funcion para obtener movimientos de la Pc----------//
function machineOption() {
    const availableOptions = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    const motionMachine = availableOptions [random];
    let optMachine = document.getElementById("opt__machine");

    movedMachine.style.display = "none";
    optMachine.style.display = "block";

    if (motionMachine === "rock") {
        optMachine.src = "https://i.postimg.cc/3RytWMHj/piedra.png";
    } else if(motionMachine === "paper"){
        optMachine.src = "https://i.postimg.cc/nLrkw8M8/papel.png";
    } else {
        optMachine.src = "https://i.postimg.cc/rpH9BhtD/tijeras.png";
    }

    return motionMachine;
}