function game() {

    // User input that will be converted to lower case characters 
    let playerSelection = prompt("Rock, Paper, Cissors !").toLowerCase();

    // This function randomly selects a number from 1 to 3 assigned to a  specific value
    function computerPlay() {
        let number = Math.floor(Math.random() * 3) + 1;

        if (number == 1) {
            return "rock";
        }
        else if (number == 2) {
            return "paper";
        }

        else {
            return "cissors";
        }
    }

    // The function computerPlay is called to assign a random number to our computerSelection variable. 
    let computerSelection = computerPlay();

    // This function is the one that plays against the user and returns a message following according to the results.
    function RockPaperCissors(playerSelection, computerSelection) {
            
        if (playerSelection === computerSelection) {
            return "Draw, Computer chose " + computerSelection[0].toUpperCase() + computerSelection.slice(1, computerSelection.length) + " !";
        }

        else if ((playerSelection == "rock" && computerSelection == "cissors") || (playerSelection == "cissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
            return "You win, " + playerSelection[0].toUpperCase() + playerSelection.slice(1, playerSelection.length) + " beats " + computerSelection[0].toUpperCase() + computerSelection.slice(1, computerSelection.length) + " !";
        }

        else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "cissors") || (playerSelection == "cissors" && computerSelection == "rock")) {
            return "You lose, " + computerSelection[0].toUpperCase() + computerSelection.slice(1, computerSelection.length) + " beats " + playerSelection[0].toUpperCase() + playerSelection.slice(1, playerSelection.length) + " !";
        }
    }

    // We display the function call in the browser console
    console.log(console.log(RockPaperCissors(playerSelection, computerSelection)));
}
           
// As requested the function game is called 5 times 
let i = 1;
do {
    game();
    i++;
}
while (i <= 5);           
