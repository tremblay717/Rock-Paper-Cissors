function computerPlay() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number == 1) {
        return "rock";
    } else if (number == 2) {
        return "paper";
    } else {
        return "cissors";
    }
}

let playerScore = 0;
let computerScore = 0;

var gameMessage = document.querySelector("#gameMessage");
gameMessage.classList.add('content');
gameMessage.textContent = ""

var pScore = document.querySelector("#playerScore");
pScore.classList.add('content');
pScore.textContent = playerScore;

var cScore = document.querySelector("#computerScore");
cScore.classList.add('content');
cScore.textContent = computerScore;

var reset = document.querySelector("#resetButton");
reset.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    gameMessage.textContent = "";
    roundNumber = 0;
    rounds.textContent = roundNumber;
})

let roundNumber = 0;


var rounds = document.querySelector("#roundsBox");
rounds.classList.add('content');
rounds.textContent = roundNumber

var rock = document.querySelector('#rock')
rock.onclick = function () {
    if (playerScore < 5 && computerScore < 5) {
        computerSelection = computerPlay();
        roundNumber += 1;
        if (computerSelection == 'rock') {
            return gameMessage.textContent = "It's a Draw! Computer chose Rock", rounds.textContent = roundNumber;
        } else if (computerSelection == "paper") {
            computerScore += 1;
            if (computerScore == 5) {
                return gameMessage.textContent = "Game Over ! You lose, Paper beats Rock", cScore.textContent = computerScore, rounds.textContent = roundNumber;
            } else {
                return gameMessage.textContent = "You lose, Paper beats Rock", cScore.textContent = computerScore, rounds.textContent = roundNumber;
            }
        } else {
            playerScore += 1
            if (playerScore == 5) {
                return gameMessage.textContent = "You win the game! Rock beats Scissors", pScore.textContent = playerScore, rounds.textContent = roundNumber;
            }
            return gameMessage.textContent = "You win! Rock beats Scissors", pScore.textContent = playerScore, rounds.textContent = roundNumber;
        }
    } else {
        return;
    }
}

var paper = document.querySelector("#paper")
paper.onclick = function () {
    if (playerScore < 5 && computerScore < 5) {
        roundNumber += 1;
        computerSelection = computerPlay();
        if (computerSelection == 'rock') {
            playerScore += 1;
            if (playerScore == 5) {
                return gameMessage.textContent = "You win the Game! Paper beats Rock", pScore.textContent = playerScore, rounds.textContent = roundNumber;
            } else {
                return gameMessage.textContent = "You win! Paper beats Rock", pScore.textContent = playerScore, rounds.textContent = roundNumber;
            }
        } else if (computerSelection == "paper") {
            return gameMessage.textContent = "It's a Draw! Computer chose Paper", rounds.textContent = roundNumber
        } else {
            computerScore += 1;

            if (computerScore == 5) {
                return gameMessage.textContent = "You lose the game! Scissors beat Paper", cScore.textContent = computerScore, rounds.textContent = roundNumber;
            } else {
                gameMessage.textContent = "You lose! Scissors beat Paper", cScore.textContent = computerScore, rounds.textContent = roundNumber;
            }
        }
    } else {
        return;
    }
}

var scissors = document.querySelector("#scissors")


scissors.onclick = function () {
    if (playerScore < 5 & computerScore < 5) {
        roundNumber += 1;
        computerSelection = computerPlay();
        if (computerSelection == 'rock') {
            computerScore += 1
            if (computerScore == 5) {
                return gameMessage.textContent = "You lose the game! Rock beats Scissors", cScore.textContent = computerScore, rounds.textContent = roundNumber;
            } else {
                return "You lose the game! Rock beats Scissors", cScore.textContent = computerScore, rounds.textContent = roundNumber;
            }
        } else if (computerSelection == "paper") {
            playerScore += 1
            if (playerScore == 5) {
                return gameMessage.textContent = "You win the game! Scissors beat Paper", pScore.textContent = playerScore, rounds.textContent = roundNumber,
                    scissors;
            } else {
                return gameMessage.textContent = "You win! Scissors beat Paper", pScore.textContent = playerScore, rounds.textContent = roundNumber;
            }
        } else {
            return gameMessage.textContent = "It's a Draw! Computer chose Scissors", rounds.textContent = roundNumber;
        }
    } else {
        return;
    }
}