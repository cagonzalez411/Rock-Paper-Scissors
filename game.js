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
        return "You win!";
    } else if ((playerSelection == "paper") && (computerPlay() == "rock")) {
        return "You win!";
    } else if ((playerSelection == "scissors") && (computerPlay() == "paper")) {
        return "You win!";
    } else {
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

function adjustScore() {

    

}


// function game() {

//     let gamesPlayed = 1;
//     while (gamesPlayed <= 5) {
//         console.log(playRound(playerSelection));
//         console.log(gamesPlayed)
//         gamesPlayed += 1;
//     }

// }

const rockbtn = document.querySelector('#rock');
const paperbtn = document.querySelector('#paper');
const scissorsbtn = document.querySelector('#scissors');

rockbtn.addEventListener('click', () => console.log(playRound('rock')));
paperbtn.addEventListener('click', () => console.log(playRound('paper')));
scissorsbtn.addEventListener('click', () => console.log(playRound('scissors')));



