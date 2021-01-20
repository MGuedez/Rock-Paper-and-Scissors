let modal = document.getElementById("modal");

// Abrir modal
let openModal = document.getElementById("openModal");
openModal.addEventListener("click" , open);
function open() {
    // modal.style.display = "block";
    modal.style.transform = "translateY(0)";
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
}

// Cerrar modal
let closeModal = document.getElementById("close");
closeModal.addEventListener("click" , close);
function close() {
    modal.style.transform = "translateY(-200%)";

    setTimeout(function() {
        modal.style.opacity = "0";
        modal.style.visibility = "hidden";
    }, 900);
}