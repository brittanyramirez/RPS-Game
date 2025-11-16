const validChoices =["rock","paper", "scissors"];
const images ={
    rock: "rockminnie.png",
    paper: "paperminnie.png",
    scissors: "scissorsminnie.png"
};

const userInput = document.getElementById("userInput");
const playBtn = document.getElementById("playBtn");
const userImage = document.getElementById("userImage");
const computerImage = document.getElementById("computerImage");
const userText = document.getElementById("userText");
const computerText = document.getElementById("computerText");
const resultDiv = document.getElementById("result");

function getComputerChoice() {
    const i = Math.floor(Math.random() * 3);
    return validChoices[i];
}

function showChoice(blockImageEl, textEl, choice){
    if(!choice){
        blockImageEl.classList.add("hidden");
        textEl.textContent = "";
        return;
    }
    blockImageEl.src = images[choices];
    blockImageEl.alt = choice;
    blockImageEl.classList.remove("hidden");
    textEl.textContent = choice.chartAt
}
