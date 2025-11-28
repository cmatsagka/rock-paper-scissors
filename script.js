let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rock = 0;
    let paper = 1;
    let scissors = 2;
    let choice;
    choice = Math.floor(Math.random() * 3);

    if (choice === rock) {
            console.log('pc= rock');
        return 'rock';
    }else if (choice === paper) {
            console.log('pc= paper');
        return 'paper';
    }else{
            console.log('pc= scissors');
        return 'scissors';
    }

}

function getHumanChoice() {
    let choice = prompt('Rock? Paper? or Scissors?');
    console.log('human=', choice);
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return 'It\'s a tie';
    }else if (humanChoice === 'rock' && computerChoice !== 'scissors') {
        computerScore++;
        return 'You lose! ' + computerChoice + ' beats ' + humanChoice;
    }else if (humanChoice === 'scissors' && computerChoice !== 'paper'){
        computerScore++;
        return 'You lose! ' + computerChoice + ' beats ' + humanChoice;
    }else if (humanChoice === 'paper' && computerChoice !== 'rock'){
        computerScore++;
        return 'You lose! ' + computerChoice + ' beats ' + humanChoice;
    }else {
        humanScore++;
        return 'You win! ' + humanChoice + ' beats ' + computerChoice;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
    let round = 0;

    while (round < 5) {
        playRound(humanSelection, humanSelection);
        round++;
    }
}