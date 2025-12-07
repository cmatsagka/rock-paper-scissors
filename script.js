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

function playRound(humanChoice, computerChoice, score) {

    if (humanChoice === computerChoice) {
        score.textContent ='It\'s a tie';
    }else if (humanChoice === 'rock' && computerChoice !== 'scissors') {
        computerScore++;
        score.textContent ='You lose! ' + computerChoice + ' beats ' + humanChoice;
    }else if (humanChoice === 'scissors' && computerChoice !== 'paper'){
        computerScore++;
        score.textContent ='You lose! ' + computerChoice + ' beats ' + humanChoice;
    }else if (humanChoice === 'paper' && computerChoice !== 'rock'){
        computerScore++;
        score.textContent ='You lose! ' + computerChoice + ' beats ' + humanChoice;
    }else {
        humanScore++;
        score.textContent ='You win! ' + humanChoice + ' beats ' + computerChoice;
    }
}

function playGame() {
    let winner = '';
    let roundCount = 1;
    
    const buttons = document.querySelectorAll('button');
    let computerChoice = getComputerChoice();
    let result = document.querySelector('.result');
    let score = document.querySelector('.score');
    let round = document.querySelector('.round');
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (humanScore <5 && computerScore <5){
                let humanChoice = button.id;
                console.log('Human: ' + humanChoice);
                playRound(humanChoice, computerChoice, score);
                round.textContent = 'Round: ' + roundCount;
                roundCount++;
                score.textContent ='Score: Player ' + humanScore + ' - Computer ' + computerScore;
            }else {
                if (humanScore === computerScore){
                    result.textContent = 'It was a tie! Final score is: Player ' + humanScore + ' - Computer ' + computerScore;
                }else if (humanScore > computerScore) {
                    winner = 'Player';
                }else {
                    winner = 'Computer';
                }
                
                score.remove();
                result.textContent ='Winner is ' + winner + '! Final Score is: Player ' + humanScore + ' - Computer ' + computerScore;
            }
        });
    });
}

playGame();