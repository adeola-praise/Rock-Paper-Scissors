// A function that creates random choices from an array
function getComputerChoice(){
    let choiceArray = ["ROCK", "PAPER", "SCISSORS"];
    let computerChoice = choiceArray[(Math.floor(Math.random() * choiceArray.length))]
    return(computerChoice);
}

let playerScore = 0;
let computerScore = 0;

let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')

rock.addEventListener('click', playRound)
paper.addEventListener('click', playRound)
scissors.addEventListener('click', playRound);

// Function that plays one round of the game
function playRound(computerSelection, playerSelection){
    
    let result = "";

    switch (true){
        case (playerSelection == "ROCK" && computerSelection == "PAPER"):
            computerScore++;
            result = "You Lose! Paper beats Rock";
            break;

        case (playerSelection == "PAPER" && computerSelection == "ROCK"):
            playerScore++;
            result = "You Win! Paper beats Rock";
            break;
        
        case (playerSelection == "SCISSORS" && computerSelection == "ROCK"):
            computerScore++;
            result = "You Lose! Rock beats Scissors";
            break;
        
        case (playerSelection == "ROCK" && computerSelection == "SCISSORS"):
            playerScore++;
            result = "You Win! Rock beats Scissors";
            break;
            
        case (playerSelection == "PAPER" && computerSelection == "SCISSORS"):
            computerScore++;
            result = "You Lose! Scissors beats Paper";
            break;

        case (playerSelection == "SCISSORS" && computerSelection == "PAPER"):
            playerScore++;
            result = "You Win! Scissors beats Paper";
            break;

        case (playerSelection == computerSelection):
            computerScore++;
            playerScore++;
            result = "That was a draw";
            break;
        
        default:
            result = "Wrong input!";
            alert("Wrong input!");
    }

    alert(result);
    return(result);
}

function Game(){
    for (let i = 0; i < 5; i++) {

        // Getting the computer's choice
        let computerSelection = getComputerChoice();
        console.log(computerSelection);

        // Getting the player's input from the text box
        let playerInput = prompt("ROCK-PAPER-SCISSORS");

        // Convert the user's input to the case of the program
        playerSelection = playerInput.toUpperCase();

        (playRound(computerSelection, playerSelection));
    }
}

// Call the game function
//Game();

// Display the winner at the end of the game
//alert(`You: ${playerScore} | Computer: ${computerScore}`);
