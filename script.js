function getComputerChoice() {
    let computermove = Math.floor(Math.random() * 3);

    if (computermove === 0){
        console.log("Rock");
        return "Rock";
        } else if (computermove === 1) {
            console.log("Paper");
        return "Paper";
    } else {
        console.log("Scissors");
        return "Scissors";
    }
}

getComputerChoice();

