function getComputerChoice() {  // to generate random choice for the computer
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// to identify the winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        return "Player win! " + playerSelection  + " beats " + computerSelection;
    } else {
        return "Computer win! " + computerSelection  + " beats " + playerSelection;
    }
}

function game() {
    const playerSelection = prompt("rock, paper, or scissor?");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}


game(); // invoke the function



