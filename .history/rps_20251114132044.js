// these are the only valid inputs the user can type
const validChoices =["rock","paper", "scissors"];


const images ={
    rock: "rockminnie.png",
    paper: "paperminnie.png",
    scissors: "scissorsminnie.png"
};

//grabs input and button elements from html
const userInput = document.getElementById("userInput");
const playBtn = document.getElementById("playBtn");

// this will display the result text in the html
const resultDiv = document.createElement("div");
resultDiv.id = "result";
resultDiv.className = "result";
document.querySelector(".container").appendChild(resultDiv);



//function: randomly pick rock, paper, or scissors for the computer
function getComputerChoice() {
    const i = Math.floor(Math.random() * 3);
    return validChoices[i];
}

//function: compare choices and return the winner message
function decideWinner(user, computer){
    if (user === computer) return "It's a tie 🤷🏻‍♀️";
    if(
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
         return "You win!🎉!";
    }
    return "Computer wins💻!";
}

//main game function (runs when user clicks play)
function PlayGame(){
    //gets usere input
    const raw = userInput.ariaValueMax.trim().toLowerCase();

    //validate the input
    if (!validChoices.includes(raw)) {
        resultDiv.textContent = "❌Please enter rock, paper, or scissors.";
        return;
    }

    //choices
    const userChoice = raw;
    const computerChoice = getComputerChoice();

    //decide winner
    const result = decideWinner(userChoice, computerChoice);

    //display result

    resultDiv.textContent =
    'You chose'
}

