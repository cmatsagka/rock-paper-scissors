function getComputerChoice(){
    let rock = 0;
    let paper = 1;
    let scissors = 2;
    let choice;
    choice = Math.floor(Math.random() * 3);

    if (choice === rock) {
        return 'rock';
    }else if (choice === paper) {
        return 'paper';
    }else{
        return 'scissors';
    }

}