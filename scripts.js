// A function that creates random choices from an array
function getComputerChoice(){
    let choiceArray = ["ROCK", "PAPER", "SCISSORS"];
    let computerChoice = choiceArray[(Math.floor(Math.random() * choiceArray.length))]
    return(computerChoice);
}

// Create image element for player's choice
let playerImg = document.createElement('img');

// Create image element for computer's choice
let compImg = document.createElement('img');

// Flip computer's choice icon
compImg.style.transform = "scaleX(-1)";

// Select the image div
let imgDiv = document.querySelector('.choiceimg');

// Show icons that match the computer's choice
function ShowCompImg(computerSelection) {
    if(computerSelection == 'ROCK'){
        compImg.src = "./images/rps-icons/paper.png"
        imgDiv.appendChild(compImg);
     }
     else if (computerSelection == 'PAPER') {
        compImg.src = "./images/rps-icons/paper.png"
        imgDiv.appendChild(compImg);
     } 
     else if(computerSelection == 'SCISSORS'){
        compImg.src = "./images/rps-icons/scissors.png"
        imgDiv.appendChild(compImg);
     }
}

// Show icons that match the player's choice
function ShowPlayerImg(playerSelection){

     if(playerSelection == 'ROCK'){
        playerImg.src = "./images/rps-icons/rock.png"
        imgDiv.appendChild(playerImg);
     }
     else if (playerSelection == 'PAPER') {
        playerImg.src = "./images/rps-icons/paper.png"
        imgDiv.appendChild(playerImg);
     } 
     else if(playerSelection == 'SCISSORS'){
        playerImg.src = "./images/rps-icons/scissors.png"
        imgDiv.appendChild(playerImg);
     }  
}

// Get winning display board
let display = document.querySelector('p')

// Get score board
let playerBoard = document.querySelector('#pScore');
let computerBoard = document.querySelector('#cScore');

// Store scores in a variable;
let playerScore = 0;
let computerScore = 0;

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

    // Display results
    display.textContent = result;

    // Display the scores
    playerBoard.textContent = playerScore;
    computerBoard.textContent = computerScore;

    return(result);
}

 // Get rps buttons
 let rpsBtn = document.querySelectorAll('button');
 // Loop through the rps buttons
 rpsBtn.forEach(function (btn){
     // Assign the value of any button clicked to playerSelection
     btn.onclick = function(){

         // Get the computer's choice
         let computerSelection = getComputerChoice();
         console.log(computerSelection);

         // Call the playRound function
         let playerSelection = btn.value;
         ShowPlayerImg(playerSelection);
         ShowCompImg(computerSelection);
         playRound(computerSelection, playerSelection);

         if (playerScore === 5 || computerScore === 5) {
            declareWinner();
        }
 }})

 // Get the div for replay button
 let btnDiv = document.querySelector('.replay');

 // Get the replay button
 let replayBtn = document.createElement('button');

 // Declare the Winner
 function declareWinner(){
    Hide();
    if (playerScore > computerScore) {
        display.textContent = "You win! What next?";
        replayBtn.innerText = "Play Again";
        btnDiv.appendChild(replayBtn);
      } else if(playerScore == computerScore){
        display.textContent = "You drew!!! That was a real battle.";
        replayBtn.innerText = "Play Again";
        btnDiv.appendChild(replayBtn);
      } else {
        display.textContent = "You lost...What are you going to do about it?";
        replayBtn.innerText = "Try Again?";
        btnDiv.appendChild(replayBtn);
    }
 }

 // Hide rps buttons and images
 function Hide() {
    rpsBtn.forEach(function(btn){
        btn.style.display = 'none';
        playerImg.style.display = 'none';
        compImg.style.display = 'none';
    })
 }

// Enable game reload when replay button is clicked
 replayBtn.onclick = function(){
    location.reload();
 }
 
