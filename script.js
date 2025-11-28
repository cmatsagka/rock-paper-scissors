let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rock = 0;
    let paper = 1;
    let scissors = 2;
    let choice;
    choice = Math.floor(Math.random() * 3);

    if (choice === rock) {
            console.log('pc=', choice);
        return 'rock';
    }else if (choice === paper) {
            console.log('pc=', choice);
        return 'paper';
    }else{
            console.log('pc=', choice);
        return 'scissors';
    }

}

function getHumanChoice() {
    let choice = prompt('Rock? Paper? or Scissors?');
    console.log('human=', choice);
    return choice.toLowerCase();
}

function playRound(humanScore, computerScore) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        return 'It\'s a tie';
    }else if (humanChoice === 'rock') {
        if (computerChoice === 'scissors') {
            humanScore++;
            return 'You win! ' + humanChoice + ' beats ' + computerChoice;
        }else {
            computerScore++;
            return 'You lose! ' + computerChoice + ' beats ' + humanChoice;
        }
    }else if (humanChoice === 'scissors'){
        if (computerChoice === 'paper') {
            humanScore++;
            return 'You win! ' + humanChoice + ' beats ' + computerChoice;
        }else {
            computerScore++;
            return 'You lose! ' + computerChoice + ' beats ' + humanChoice;
        }
    }else {
        if (computerChoice === 'rock') {
            humanScore++;
            return 'You win! ' + humanChoice + ' beats ' + computerChoice;
        }else {
            computerScore++;
            return 'You lose! ' + computerChoice + ' beats ' + humanChoice;
        }
    }
}