function game() {

    function getComputerChoice() {
        let computer = Math.floor(Math.random() * 3);

        if (computer=== 0){
            return "rock";
            } else if (computer === 1) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    function playRound(playerSelection, computerSelection){

        if (playerSelection == computerSelection) {
            return "It's a tie! Rematch!";
        } else {
            if (playerSelection == "rock"  && computerSelection == "paper") {
                return "You lose! Paper beats Rock";
            } else if (playerSelection == "rock" && computerSelection == "scissors"){
                return "You win! Rock beats Scissors";
            } else if (playerSelection == "paper" && computerSelection == "rock") {
                return "You win! Paper beats Rock";
            } else if (playerSelection == "paper" && computerSelection == "scissors") {
                return "You lose! Scissors beats Paper";
            } else if (playerSelection == "scissors" && computerSelection == "rock") {
                return "You lose! Rock beats Scissors";
            } else if (playerSelection == "scissors" && computerSelection == "paper") {
                return "You win! Scissors beats Paper";
            }
        }
    }

        const playerSelection = prompt("Rock, Paper or Scissors?", "").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));



}

game();