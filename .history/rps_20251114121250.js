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
    textEl.textContent = choice.charAt(0).toUpperCase()+ choice.slice(1);
}

//compare choices and return result text
function decideWinner(user, computer){
    if (user === computer) return "It's a tie!";
    if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ){
        return "You win!🎉";
    }
    return "Computer wins💻!";
}

function playGame(){
    const raw = userInput.value.trim().toLowerCase();
    //validate
    if (!validChoices.includes(raw)){
        resultDiv.textContent = "Please enter rock, paper, or scissors.";
        showChoice
    }
}
