const instructionPage = document.getElementById("instruction_screen");

const gameScreen = document.getElementById("game_screen");

function load(){
    instructionPage.classList.add("hide")
    instructionPage.classList.remove("visible");
    
    gameScreen.classList.remove("hide")
    backgroundImage.style.backgroundImage = 'url("../img/rotate/gameScreen.png")'
}

