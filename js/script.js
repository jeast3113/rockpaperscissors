

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
        return "It's a tie!";
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You win! Rock beats Scissors!";
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You lose! Rock beats Scissors!";
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        return "You win! Paper beats Rock!";
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        return "You lose! Paper beats Rock!";
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors beats Paper!";
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You lose! Scissors beats Paper!";
    } else {
        return "Sorry, please type rock, paper, or scissors!";
    }
}

//test out the 'playRound' function 
const playerSelection = prompt("Rock, Paper, or Scissors...?:").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));