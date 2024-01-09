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
    let message = "";

    if (playerSelection == computerSelection) {
        message = "It's a tie! Rematch!";
    } else {
        if (playerSelection == "rock"  && computerSelection == "paper") {
            message = "You lose! Paper beats Rock";
        } else if (playerSelection == "rock" && computerSelection == "scissors"){
            message = "You win! Rock beats Scissors";
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            message = "You win! Paper beats Rock";
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            message = "You lose! Scissors beats Paper";
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            message = "You lose! Rock beats Scissors";
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            message = "You win! Scissors beats Paper";
        }
    }
    return message;
}

function game() {

    let player = 0;
    let computer = 0;

    for (i=0; i<5; i++){ 
        const playerSelection = prompt("Rock, Paper or Scissors?", "").toLowerCase();
        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);

        if (result.includes("lose")){
            computer++; 
            console.log("Winner: Computer");   
        } else if (result.includes("win")){
            player++; 
            console.log("Winner: Player");
        }else{
            console.log("No winner"); 
        }

        console.log(result);
        console.log("Player: ", + player + " ", "Computer: ", + computer);    

    }

    if (player > computer){
        console.log("Congratulations! You win!");
    }else if (player < computer) {
        console.log("Computer won. No worries, try again!");
    }else {
        console.log("It's a tie.");
    }
    
}

game();