let winner = '';

let playerSelection;
let computerSelection = getComputerChoice();


function getComputerChoice() {
    let possibleChoices = ['Rock', 'Paper', 'Scissors'];
    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}




const choices = document.querySelectorAll('.choice');
choices.forEach(choice => choice.addEventListener('click', () => {
    playerSelection = choice.textContent.toLowerCase();
    computerSelection = getComputerChoice();
    game();
}));


function playRound(playerSelection, computerSelection){

    switch(playerSelection){
        case 'rock':
            switch(computerSelection){
                case 'Paper': winner = 'computer';
                    return 'You lose! Paper beats Rock.';
                case 'Scissors': winner = 'player';
                    return 'You win! Rock beats Scissors.';
                case 'Rock': winner = '';
                    return "It's a tie!";
            }
        case 'paper':
            switch(computerSelection){
                case 'Scissors': winner = 'computer';
                    return 'You lose! Scissors beats Paper.';
                case 'Rock': winner = 'player';
                    return 'You win! Paper beats Rock.';
                case 'Paper': winner = '';
                    return "It's a tie!";
            }
        case 'scissors':
            switch(computerSelection){
                case 'Rock': winner = 'computer';
                    return 'You lose! Rock beats scissors.';
                case 'Paper': winner = 'player';
                    return 'You win! Scissors beats Paper.';
                case 'Scissors': winner = '';
                    return "It's a tie!";
            }
        default: return 'Please choose Rock, Paper or Scissors.';
    }
}

function checkScore(){
    if (playerScore === 5) {
        console.log("You win the game!");
        playerScore = 0;
        computerScore = 0;
        return;
    } else if (computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        return;
}
}

let playerScore = 0;
let computerScore = 0;

function game(){
        console.log(playRound(playerSelection, computerSelection));
        if(winner === 'player') {
            playerScore += 1;
            checkScore();
        } else if (winner === 'computer') {
            computerScore += 1;
            checkScore();
        } else return;

        const playerSc = document.createElement('p');
        const computerSc = document.createElement('p');

        playerSc.textContent = `Player score: ${playerScore}`;
        computerSc.textContent = `Computer score: ${computerScore}`;

        const container = document.querySelector('.container');

        
        container.appendChild(playerSc);
        container.appendChild(computerSc);
        // console.log(`Player score: ${playerScore}`);
        // console.log(`Computer score: ${computerScore}`);
        // winner = '';
    // }

}

// game();