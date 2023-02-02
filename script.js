let winner = '';

function getComputerChoice() {
    let possibleChoices = ['Rock', 'Paper', 'Scissors'];
    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();

    switch(playerChoice){
        case 'rock':
            switch(computerSelection){
                case 'Paper': winner = 'computer';
                    return 'You lose! Paper beats Rock.';
                case 'Scissors': winner = 'player';
                    return 'You win! Rock beats Scissors.';
                case 'Rock': 
                    return "It's a tie!";
            }
        case 'paper':
            switch(computerSelection){
                case 'Scissors': winner = 'computer';
                    return 'You lose! Scissors beats Paper.';
                case 'Rock': winner = 'player';
                    return 'You win! Paper beats Rock.';
                case 'Paper': 
                    return "It's a tie!";
            }
        case 'scissors':
            switch(computerSelection){
                case 'Rock': winner = 'computer';
                    return 'You lose! Rock beats scissors.';
                case 'Paper': winner = 'player';
                    return 'You win! Scissors beats Paper.';
                case 'Scissors': 
                    return "It's a tie!";
            }
        default: return 'Please choose Rock, Paper or Scissors.';
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        if(winner === 'player') {
            playerScore += 1;
        } else if (winner === 'computer') {
            computerScore += 1;
        }
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
        // winner = '';
    }

    if(playerScore > computerScore) {
        console.log('You win the game!');
    } else if (computerScore > playerScore) {
        console.log('Computer wins the game!');
    } else console.log("It's a tie.");

}

const playerSelection = 'pApEr';
let computerSelection;

console.log(playRound(playerSelection, computerSelection));
game();