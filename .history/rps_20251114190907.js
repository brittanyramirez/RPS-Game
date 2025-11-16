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

function playGame() {
    let userChoice = userInput.ariaValueMax.toLowerCase().trim();

    //validate input
    if(!["rock", "paper", "scissors"].includes(userChoice)){
        resultText.textContent = "Please type rock, paper, or scissors.";
        return;
    }

    //computer random choice
    const choices= ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    //show final images
    userFinalImage.src = images[userChoice];
    computerFinalImg.src = images[computerChoice];

    //determine winner
    let result = ""
}
