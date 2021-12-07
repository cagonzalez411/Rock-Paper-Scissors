let computerScore = 0;
let playerScore = 0;

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
    if (playerSelection == computerPlay()) {
        return "It's a tie!";
    } else if ((playerSelection == "rock") && (computerPlay() == "scissors")) {
        playerScore += 1;
        return "You win!";
    } else if ((playerSelection == "paper") && (computerPlay() == "rock")) {
        playerScore += 1;
        return "You win!";
    } else if ((playerSelection == "scissors") && (computerPlay() == "paper")) {
        playerScore += 1;
        return "You win!";
    } else {
        computerScore += 1;
        return "You lose!";
    }
}

function determine_winner() {
    if (computerScore > playerScore) {
        console.log("You lose the game!");
    } else if (computerScore < playerScore) {
        console.log("You win the game!");
    } else {
        console.log("It was a tie!");
    }
}

function win() {
    if (playerScore >= 5) {
        return true;
    } else {
        return false;
    }
}

function lose() {
    if (computerScore >= 5) {
        return true;
    } else {
        return false;
    }
}

const rockbtn = document.querySelector('#rock');
const paperbtn = document.querySelector('#paper');
const scissorsbtn = document.querySelector('#scissors');

rockbtn.addEventListener('click', () => {
    console.log(playRound('rock'));
    console.log(playerScore);
    console.log(computerScore);
    console.log(win())
});

paperbtn.addEventListener('click', () => {
    console.log(playRound('paper'));
    console.log(playerScore);
    console.log(computerScore);
    console.log(win())
});

scissorsbtn.addEventListener('click', () => {
    console.log(playRound('scissors'));
    console.log(playerScore);
    console.log(computerScore);
    console.log(win())
});



