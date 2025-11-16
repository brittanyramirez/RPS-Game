// gets html elements
const userInput = document.getElementById("userInput");
const playBtn = document.getElementById("playBtn");
const resultText = document.getElementById("result");

const userFinalImage = document.getElementById("user-final-img");
const computerFinalImg = document.getElementById("computer-final-img");

//image path 
const images = {
    rock: "images/rockmickey.png",
    paper: "images/paperminnie.png",
    scissors: "images/scissorsminnie.png"
};


//button click event 
playBtn.addEventListener("click", playGame);

function playGame()
