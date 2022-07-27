function getComputerChoice(){
    let choiceArray = ["Rock", "Paper", "Scissors"];
    let computerChoice = choiceArray[(Math.floor(Math.random() * choiceArray.length))]
    return(computerChoice);
}

console.log(getComputerChoice());
