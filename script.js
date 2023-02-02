function getComputerChoice() {
    let possibleChoices = ['Rock', 'Paper', 'Scissors'];
    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    if(playerChoice === 'rock') {
        if(computerSelection === 'Paper') {
            return 'You lose! Paper beats Rock.';
        } else if (computerSelection === 'Scissors') {
            return 'You win! Rock beats Scissors.';
        } else return "It's a tie!";
        
    } else if(playerChoice === 'paper') {
        if(computerSelection === 'Scissors') {
            return 'You lose! Scissors beats Paper.';
        } else if (computerSelection === 'Rock') {
            return 'You win! Rock beats Paper.';
        } else return "It's a tie!";
    } else if(playerChoice === 'scissors') {
        if(computerSelection === 'Rock') {
            return 'You lose! Rock beats Scissors.';
        } else if (computerSelection === 'Paper') {
            return 'You win! Scissors beats Paper.';
        } else return "It's a tie!";
    } else return "Please choose Rock, Paper or Scissors."

}



// console.log(getComputerChoice());

const playerSelection = 'rOCk';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));