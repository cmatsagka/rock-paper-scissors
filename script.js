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

    const container = document.querySelector('#container');
    const buttons = document.querySelectorAll('button');

    const result = document.createElement('div');
    const score = document.createElement('div');
    
    result.textContent = "What do you choose?";
    score.textContent = "Player: " + player + " " + "Computer: " + computer;

    const computerSelection = getComputerChoice();
    let note = result.textContent;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let choice = button.id; 
            note = playRound(choice, computerSelection);
            console.log(note);
            if (note.includes("win")){
                player++;
            }else if(note.includes("lose")){
                computer++;
            }
            console.log(player);
            console.log(computer);

            container.appendChild(result);
            container.appendChild(score);
            score.textContent = "Score is " + player + " " + computer ;
            result.textContent = note;

            if (player >= 5 || computer >= 5){
                if (player > computer){
                result.textContent = "Congratulations! You win!";
                }else if (player < computer) {
                result.textContent = "Computer won. No worries, try again!";
                }else {
                result.textContent = "It's a tie.";
                }
                score.textContent = "Final score is " + player + " " + computer ;
            }
        })
    }) 
}

game();