// This small function returns a word with the first letter in uppercase to make the code cleaner
function capitalise(word) {

    let firstLetter = word[0];
    let rest = word.slice(1, word.length);
    return firstLetter.toUpperCase() + rest.toLowerCase();
  };
  
  // This function randomly selects a number from 1 to 3 assigned to a  specific value
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
  
  // This function is the one that plays a single round against the computer
  function playRound(playerSelection, computerSelection) {
  
    if (playerSelection === computerSelection) {
      return "Draw, Computer chose " + capitalise(computerSelection) + " !";
    } else if ((playerSelection == "rock" && computerSelection == "cissors") || (playerSelection == "cissors" && computerSelection == "paper") || (
        playerSelection == "paper" && computerSelection == "rock")) {
      return "You win, " + capitalise(playerSelection) + " beats " + capitalise(computerSelection) + " !";
    } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "cissors") || (
        playerSelection == "cissors" && computerSelection == "rock")) {
      return "You lose, " + capitalise(computerSelection) + " beats " + capitalise(playerSelection) + " !";
    }
  }
  
  function game() {
  
    let i = 1;
    let playerScore = 0;
    let computerScore = 0;
  
    do {
  
      let playerSelection = prompt("Rock, Paper, Cissors !").toLowerCase();
  
      let computerSelection = computerPlay();
  
      console.log(playRound(playerSelection, computerSelection));
      if ((playerSelection == "rock" && computerSelection == "cissors") || (playerSelection == "cissors" && computerSelection == "paper") || (
          playerSelection == "paper" && computerSelection == "rock")) {
        playerScore += 1;
      } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "cissors") || (
          playerSelection == "cissors" && computerSelection == "rock")) {
        computerScore += 1;
      }
      console.log("Player Score: " + playerScore + ", Computer Score: " + computerScore + ".")
  
      i++;
  
    }
  
    while (i <= 5);
  
    if (playerScore > computerScore) {
      console.log("Player Won " + playerScore + " - " + computerScore);
    } else if (computerScore > playerScore) {
      console.log("Computer Won " + computerScore + " - " + playerScore);
    } else {
      console.log("Draw " + playerScore + " - " + computerScore);
    }
  }
  
  // We call the game function that will display the 5 rounds in the browser console  
  game();