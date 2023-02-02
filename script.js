function getComputerChoice() {
    let possibleChoices = ['Rock', 'Paper', 'Scissors'];
    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    switch(playerChoice){
        case 'rock':
            switch(computerSelection){
                case 'Paper': 
                    return 'You lose! Paper beats Rock.';
                case 'Scissors':
                    return 'You win! Rock beats Scissors.';
                case 'Rock': 
                    return "It's a tie!";
            }
        case 'paper':
            switch(computerSelection){
                case 'Scissors': 
                    return 'You lose! Scissors beats Paper.';
                case 'Rock':
                    return 'You win! Paper beats Rock.';
                case 'Paper': 
                    return "It's a tie!";
            }
        case 'scissors':
            switch(computerSelection){
                case 'Rock': 
                    return 'You lose! Rock beats scissors.';
                case 'Paper':
                    return 'You win! Scissors beats Paper.';
                case 'Scissors': 
                    return "It's a tie!";
            }
        default: return 'Please choose Rock, Paper or Scissors.';
    }
}

const playerSelection = 'pApEr';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));