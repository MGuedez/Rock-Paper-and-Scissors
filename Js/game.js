const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
const buttonSurrender = document.getElementById("surrender");

let movedMachine = document.getElementById("movementMachine");
let movedUser = document.getElementById("movementUser");

let notification = document.getElementById("notifications");

let userScore = 0;
let machineScore = 0;
let userPoints = document.getElementById("scoreUser");
let machinePoins = document.getElementById("scoreMachine");

let modal = document.getElementById("modal_game");
let closeModal = document.getElementById("close");

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
    let optUser = document.getElementById("optUser");

    movedUser.style.display = "none";
    optUser.style.display = "block";

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
        notification.innerHTML = "tie";
        notification.style.color = "#fdc20a";
    } else {
        lose(motionUser);
    }
}

// ----------funcion para obtener movimientos de la Pc----------//
function machineOption() {
    const availableOptions = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    const motionMachine = availableOptions [random];
    let optMachine = document.getElementById("optMachine");

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


// ----------funcion usuario gana----------//
function win() {
    userScore = userScore + 1;
    userPoints.innerHTML = userScore;
    notification.innerHTML = "win"
    notification.style.color = "#57d200"

    stopGame()
}

// ----------funcion usuario pierde----------//
function lose() {
    machineScore = machineScore + 1;
    machinePoins.innerHTML = machineScore;
    notification.innerHTML = "lose"
    notification.style.color = "#ef0014"

    stopGame();
}

// ----------funcion detener juego al terminar la partida----------//
function stopGame() {
    let winner = document.getElementById("winner");
    let winLose = document.getElementById("winLose");

    if ((userScore === 3) || (machineScore === 3)) {
        open();
        if (userScore === 3) {
            winner.innerHTML = "Haz vencido a tu oponente con movimientos extrategicos.";
            winLose.innerHTML = "you win";
        } else {
            winner.innerHTML = "Machine fue mas hábil, suerte para la próxima.";
            winLose.innerHTML = "you lose";
            winLose.style.color = "#ef0014";
        }
    }
}

// ----------funcion boton rendirse----------//
buttonSurrender.addEventListener("click", giveUp )

function giveUp() {
    let modal = document.getElementById("modal_game");
    let winLose = document.getElementById("winLose");
    let msjSurrender = document.getElementById("winner");

    modal.style.transform = "translateY(0)";
    modal.style.opacity = "1";
    modal.style.visibility = "visible";

    winLose.innerHTML = "you lose";
    winLose.style.color = "#ef0014";
    msjSurrender.innerHTML = "Te haz rendido, suerte para la próxima.";
}


// ----------modal----------//
// Abrir modal
function open() {
    modal.style.transform = "translateY(0)";
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
}

// Cerrar modal
closeModal.addEventListener("click" , close);

function close() {
    console.log("enet")
    window.location.href = "../index.html";
}