//global variables
let playerScore = 0;
let cpuScore = 0;

// Create a function called getComputerChoice that randomly selects 'rock'
// 'paper' or scissors and returns the result

function getComputerChoice() {
    // need a variable to hold the choices - create an array to hold the choices
    let choices = ['rock', 'paper', 'scissors'];
    // console.log(choices);
    // create a randomizer algorithm with the choice variable - create 
    // another variable to hold the random choice - i.e. let randomChoice = 
    // revisit the Math.random method...
    // problem solving moment - How do you get a choice from the choices array?
    // problem solving moment - How do you get a rounded number to act as an index of the choices array?
    // problem solving moment - Anything multipled by zero returns zero...
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;

}

// Create a function that plays a single round of rock, paper, scissors.
// Steps to take:
// 1. Function has 2 parameters i.e. function func(param1, param2)
// 2. The parameters should be the player's choice and the computer's choice
// 3. Return a string that determines the outcome of the play; i.e. "You lose! Paper beats Rock!"
//    Determining the outcome of a round suggests an if - else if statement for all outcomes
function playRound(playerSelection, computerSelection) {  
    if((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'paper') || playerSelection === 'scissors' && computerSelection === 'scissors' ) {
        return "It's a tie! Current score: " + playerScore + " to " + cpuScore;
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore+=1;
        return "You win! Rock beats Scissors! Score: " + playerScore + " to " + cpuScore;
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        cpuScore+=1;
        return "You lose! Rock beats Scissors! Score: " + playerScore + " to " + cpuScore;
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore+=1;
        return "You win! Paper beats Rock! Score: " + playerScore + " to " + cpuScore;
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        cpuScore+=1;
        return "You lose! Paper beats Rock! Score: " + playerScore + " to " + cpuScore;
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore+=1;
        return "You win! Scissors beats Paper! Score: " + playerScore + " to " + cpuScore;
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        cpuScore+=1;
        return "You lose! Scissors beats Paper! Score: " + playerScore + " to " + cpuScore;
    }
}



// Create a function that plays 5 rounds, keeps score between the player and the computer
// and determines a winner at the end of the game
function game() {
        const playerSelection = '';
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    if(playerScore > cpuScore) {
        return `Player Wins ${playerScore} to ${cpuScore}!`;
    } else if(playerScore < cpuScore){
        return `Computer Wins ${cpuScore} to ${playerScore}`;
    } else {
        return `It's a tie! ${playerScore} to ${cpuScore}`;
    }
}

console.log(game());