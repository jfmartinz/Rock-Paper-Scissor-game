const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const result = document.getElementById("result");

// add event listeners to the buttons
rockBtn.addEventListener("click", playGame);
paperBtn.addEventListener("click", playGame);
scissorsBtn.addEventListener("click", playGame);

// function that handles the game logic
function playGame(event) {
    // get the user's choice
    const userChoice = event.target.id;

    // generate a random choice for the computer
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // determine the winner
    if (userChoice === computerChoice) {
        result.textContent = "Result: " + "It's a tie!";
        result.style.fontSize = '1.5rem';
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result.textContent = "Result: " + "You win!";
        result.style.fontSize = '1.5rem';
    } else {
        result.textContent = "Result: " + "Computer wins!";
        result.style.fontSize = '1.5rem';
    }
}