let computerScore = 0
let playerScore = 0
let playerSelection
let computerSelection

function computerPlay() {
    let computerRandom = Math.floor(Math.random() * 3);
    if (computerRandom === 0) {
        return "rock"
    } else if (computerRandom == 1) {
        return "paper";
    } else {
        return "scissors";
    }   
}    




function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        return "You win!";
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        return "You win!";
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function adjustscore() {
    if (playRound(playerSelection, computerSelection) == ("You win!")) {
        playerScore += 1
    } else if (playRound(playerSelection, computerSelection) == "You lose!") {
        computerScore += 1
    }
}

function game() {
    // computerSelection = computerPlay()
    // playerSelection = prompt("Pick rock, paper, or scissors").toLowerCase()
    // console.log(playerSelection)
    // adjustscore()
    // console.log(playerScore)
    // console.log(computerScore)

    

    if (computerScore > playerScore) {
        console.log("You lose the game!")
    } else if (computerScore < playerScore) {
        console.log("You win the game!")
    } else {
        console.log("It was a tie!")
    }

}


console.log(game());
    