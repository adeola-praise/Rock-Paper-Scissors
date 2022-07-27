// A function that creates random choices from an array

function getComputerChoice(){
    let choiceArray = ["Rock", "Paper", "Scissors"];
    let computerChoice = choiceArray[(Math.floor(Math.random() * choiceArray.length))]
    return(computerChoice);
}

// Function that plays one round of the game
function playRound(computerSelection, playerSelection){
    let result = "";

    switch (true){
        case (playerSelection == "Rock" && computerSelection == "Paper"):
            result = "You Lose! Paper beats Rock";
            break;

        case (playerSelection == "Paper" && computerSelection == "Rock"):
            result = "You Win! Paper beats Rock";
            break;
        
        case (playerSelection == "Scissors" && computerSelection == "Rock"):
            result = "You Lose! Rock beats Scissors";
            break;
        
        case (playerSelection == "Rock" && computerSelection == "Scissors"):
            result = "You Win! Rock beats Scissors";
            break;
            
        case (playerSelection == "Paper" && computerSelection == "Scissors"):
            result = "You Lose! Scissors beats Paper";
            break;

        case (playerSelection == "Scissors" && computerSelection == "Paper"):
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
    let playerSelection = document.getElementById('input').value;

    console.log(playerSelection);

    (playRound(computerSelection, playerSelection));
}

