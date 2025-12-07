let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rock = 0;
    let paper = 1;
    let scissors = 2;
    let choice;
    choice = Math.floor(Math.random() * 3);

    if (choice === rock) {
            console.log('pc = rock');
        return 'rock';
    }else if (choice === paper) {
            console.log('pc = paper');
        return 'paper';
    }else{
            console.log('pc = scissors');
        return 'scissors';
    }
}

// function getHumanChoice(btn) {
//     let choice = btn.id;
//     console.log('human = ', choice);
//     return choice.toLowerCase();
// }

function playRound(humanChoice, computerChoice, result) {

    if (humanChoice === computerChoice) {
        result.textContent ='It\'s a tie';
    }else if (humanChoice === 'rock' && computerChoice !== 'scissors') {
        computerScore++;
        result.textContent ='You lose! ' + computerChoice + ' beats ' + humanChoice;
    }else if (humanChoice === 'scissors' && computerChoice !== 'paper'){
        computerScore++;
        result.textContent ='You lose! ' + computerChoice + ' beats ' + humanChoice;
    }else if (humanChoice === 'paper' && computerChoice !== 'rock'){
        computerScore++;
        result.textContent ='You lose! ' + computerChoice + ' beats ' + humanChoice;
    }else {
        humanScore++;
        result.textContent ='You win! ' + humanChoice + ' beats ' + computerChoice;
    }

}

function playGame() {
    let round = 1;
    let winner = '';

    // while (round <= 5) {
    //     console.log('Round ', round);
    //     playRound(getHumanChoice(), getComputerChoice());
    //     console.log('Score is: Player ' + humanScore + ' - Computer: ' + computerScore);
    //     round++;
    // }

    if (humanScore === computerScore){
        return 'It was a tie! Final score is: Player ' + humanScore + ' - Computer ' + computerScore;
    }else if (humanScore > computerScore) {
        winner = 'Player';
    }else {
        winner = 'Computer';
    }

    return 'Winner is ' + winner + '! Final Score is: Player ' + humanScore + ' - Computer ' + computerScore;  
}

const buttons = document.querySelectorAll('button');
let computerChoice = getComputerChoice();
let result = document.querySelector('.result');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let humanChoice = button.id;
        console.log('Human: ' + humanChoice);
        playRound(humanChoice, computerChoice, result);
    });
});

playGame();