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
    const message = document.querySelector('.message');

    switch(playerSelection){
        case 'rock':
            switch(computerSelection){
                case 'Paper': winner = 'computer';
                    message.textContent = 'You lose! Computer chose Paper.';
                    break;
                case 'Scissors': winner = 'player';
                    message.textContent = 'You win! Computer chose Scissors.';
                    break;
                case 'Rock': winner = '';
                    message.textContent = "It's a tie!";
                    break;
            }
        case 'paper':
            switch(computerSelection){
                case 'Scissors': winner = 'computer';
                    message.textContent = 'You lose! Computer chose Scissors.';
                    break;
                case 'Rock': winner = 'player';
                    message.textContent = 'You win! Computer chose Rock.';
                    break;
                case 'Paper': winner = '';
                    message.textContent =  "It's a tie!";
                    break;
            }
        case 'scissors':
            switch(computerSelection){
                case 'Rock': winner = 'computer';
                    message.textContent = 'You lose! Computer chose Rock.';
                    break;
                case 'Paper': winner = 'player';
                    message.textContent = 'You win! Computer chose Paper.';
                    break;
                case 'Scissors': winner = '';
                    message.textContent = "It's a tie!";
                    break;
            }
    }
}

function checkScore(){
    const message = document.querySelector('.message');

    if (playerScore === 5) {
        message.textContent = "You win the game!";
        message.style.fontWeight = "700";
        playerScore = 0;
        computerScore = 0;
        return;
    } else if (computerScore === 5) {
        message.textContent = "Computer wins the game!";
        message.style.fontWeight = "700";
        playerScore = 0;
        computerScore = 0;
        return;
    }
}

let playerScore = 0;
let computerScore = 0;

function game(){
        const message = document.querySelector('.message');
        message.style.fontWeight = "400";
        playRound(playerSelection, computerSelection);
        if(winner === 'player') {
            playerScore += 1;
            checkScore();
        } else if (winner === 'computer') {
            computerScore += 1;
            checkScore();
        } else return;

        const playerSc = document.querySelector('#player-score');
        const computerSc = document.querySelector('#computer-score');

        playerSc.textContent = `${playerScore}`;
        computerSc.textContent = `${computerScore}`;

}