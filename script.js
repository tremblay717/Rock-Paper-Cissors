    // This small function returns a word with the first letter in uppercase to make the code cleaner
    function capitalise(word) {

        let firstLetter = word[0];
        let rest = word.slice(1, word.length);
        return firstLetter.toUpperCase() + rest.toLowerCase();
      };
  
      function game() {
  
        // User input that will be converted to lower case characters 
        let playerSelection = prompt("Rock, Paper, Cissors !").toLowerCase();
  
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
  
        // The function computerPlay is called to assign a random value to our computerSelection variable. 
        let computerSelection = computerPlay();
  
        // This function is the one that plays against the user and returns a message following according to the results.
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
  
        // We display the function call in the browser console
        console.log(playRound(playerSelection, computerSelection));
      }
  
      // As requested the function game is called 5 times 
      let i = 1;
      do {
        game();
        i++;
      }
      while (i <= 5);