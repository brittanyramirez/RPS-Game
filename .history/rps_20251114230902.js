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

//make animation shake
function shakeImages(){
    const imgs = document.querySelectorAll(".choice-img");

    imgs.forEach(img =>{
        img.classList.add("shake");
        //remove shake after animation ends (so it can shake again next round)
        setTimeout(() => {
            img.classList.remove("shake");
        }, 1200);
    });
}
//button click event 
playBtn.addEventListener("click", playGame);

function playGame() {
    let userChoice = userInput.value.toLowerCase().trim();

    //validate input
    if(!["rock", "paper", "scissors"].includes(userChoice)){
        alert("Please type rock, paper, or scissors🎀.");
        userInput.value = "";
        return;
    }
//start shake animation before showing final result
shakeImages();

    //computer random choice
    const choices= ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    //delay results until animation finishes
    setTimeout(() =>{ //show final images
    userFinalImage.src = images[userChoice];
    computerFinalImg.src = images[computerChoice];

    //determine winner
    let result = "";
    
    if (userChoice === computerChoice) {
        result = "It's a tie!🤷🏻‍♀️";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ){
        result = "You win! 🏆🎉";
    } else{
        result = "Computer Wins! ❌💻❌";
    }
    updateScore();

    //show result on screen
    resultText.textContent = result;
}, 1200); // this matches the animation time
}

//scoreboard

let wins = 0;
let losses = 0;
let ties = 0;


//this updates the scoreboard

function updateScore(){
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("ties").textContent = ties;
}

// the functionality of the reset button 
document.getElementById("resetBtn").addEventListener("click", function(){
    wins = 0;
    losses = 0;
    ties = 0;
    updateScore();
});