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
    ){
         return "You win!🎉";
    }


}
function showChoice(blockImageEl, textEl, choice){
    if(!choice){
        blockImageEl.classList.add("hidden");
        textEl.textContent = "";
        return;
    }
    blockImageEl.src = "images/" + images[choice];
    blockImageEl.alt = choice;
    blockImageEl.classList.remove("hidden");
    textEl.textContent = choice.charAt(0).toUpperCase()+ choice.slice(1);
}

    {
        return "You win!🎉";
    }
    return "Computer wins💻!";
}

function playGame(){
    const raw = userInput.value.trim().toLowerCase();
    //validate
    if (!validChoices.includes(raw)){
        resultDiv.textContent = "Please enter rock, paper, or scissors.";
        showChoice(userImage, userText, null);
        showChoice(computerImage, computerText, null);
        return;
    }
    const userChoice = raw;
    const computerChoice= getComputerChoice();

    //display images and text 
    showChoice(userImage, userText, userChoice);
    showChoice(computerImage, computerText, computerChoice);

    //decide winner
    const result = decideWinner(userChoice, computerChoice);
    resultDiv.textContent = result;
}

//play when button clicked 
playBtn.addEventListener("click", playGame);

//alow pressing Enter key in the input to play 
userInput.addEventListener("keydown", function(e){
    if(e.key === "Enter") playGame();
});
