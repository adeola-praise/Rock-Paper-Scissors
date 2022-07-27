// A function that creates random choices from an array

function getComputerChoice(){
    let choiceArray = ["ROCK", "PAPER", "SCISSORS"];
    let computerChoice = choiceArray[(Math.floor(Math.random() * choiceArray.length))]
    return(computerChoice);
}

// Function that plays one round of the game
function playRound(computerSelection, playerSelection){
    let result = "";

    switch (true){
        case (playerSelection == "ROCK" && computerSelection == "PAPER"):
            result = "You Lose! Paper beats Rock";
            break;

        case (playerSelection == "PAPER" && computerSelection == "ROCK"):
            result = "You Win! Paper beats Rock";
            break;
        
        case (playerSelection == "SCISSORS" && computerSelection == "ROCK"):
            result = "You Lose! Rock beats Scissors";
            break;
        
        case (playerSelection == "ROCK" && computerSelection == "SCISSORS"):
            result = "You Win! Rock beats Scissors";
            break;
            
        case (playerSelection == "PAPER" && computerSelection == "SCISSORS"):
            result = "You Lose! Scissors beats Paper";
            break;

        case (playerSelection == "SCISSORS" && computerSelection == "PAPER"):
            result = "You Win! Scissors beats Paper";
            break;

        case (playerSelection == computerSelection):
            result = "That was a draw";
            break;
        
        default:
            result = "Wrong input!";
    }

    document.getElementById('result').innerHTML = result;
    console.log(result);
    return(result);
}

// Getting the computer's choice
let computerSelection = getComputerChoice();
console.log(computerSelection);

// Recieve the input when the user clicks the submit button
document.getElementById('submit').onclick = function(){

    // Getting the user input from the text box
    let playerInput = document.getElementById('input').value;

    // Convert the user's input to the case of the program
    let playerSelection  = playerInput.toUpperCase();

    console.log(playerSelection);

    (playRound(computerSelection, playerSelection));
}

