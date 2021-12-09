let computerScore = 0;
let playerScore = 0;

const rockbtn = document.querySelector('#rock');
const paperbtn = document.querySelector('#paper');
const scissorsbtn = document.querySelector('#scissors');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const gameResult = document.querySelector('.gameResult');
const resetBtn = document.querySelector('#resetGame');
const finalGameResult = document.querySelector('#finalGameResult');

function computerPlay() {
    let computerRandom = Math.floor(Math.random() * 3);
    if (computerRandom === 0) {
        return "rock";
    } else if (computerRandom == 1) {
        return "paper";
    } else {
        return "scissors";
    }   
}    

function playRound(playerSelection) {

    computerSelection = computerPlay()
    if (!winner()) {
        if (playerSelection == computerSelection) {
            gameResult.textContent = `It's a Tie! You both chose ${computerSelection}`;
        } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
            playerPoints.textContent = ++playerScore;
            gameResult.textContent = "You win! Rock beats Scissors";
        } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
            playerPoints.textContent = ++playerScore;
            gameResult.textContent = "You win! Paper beats Rock";
        } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
            playerPoints.textContent = ++playerScore;
            gameResult.textContent = "You win! Scissors beats Paper";
        } else {
            computerPoints.textContent = ++computerScore;
            gameResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }

    winner()

}

function winner() {
    if (computerScore == 5) {
        finalGameResult.textContent = `You lose the game! The computer has reached 5 points. Reset?`;
        return true;
    } else if (playerScore == 5) {
        finalGameResult.textContent = `You win the game! You reached 5 points. Reset?`;
        return true;
    } else {
        return false;
    }
}
function resetGame() {
    computerScore = 0;
    playerScore = 0;
    computerPoints.textContent = 0;
    playerPoints.textContent = 0;
    gameResult.textContent = "";
    finalGameResult.textContent = "";
}

rockbtn.addEventListener('click', () => {
    playRound('rock');
});

paperbtn.addEventListener('click', () => {
    playRound('paper')
});

scissorsbtn.addEventListener('click', () => {
    playRound('scissors');
});

resetBtn.addEventListener('click', () => {
    resetGame()
});







