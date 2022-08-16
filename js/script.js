//global variables
let playerScore = 0;
let cpuScore = 0;
let playerSelection;
let computerSelection = getComputerChoice();


function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;

}

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

    // if(playerScore > cpuScore) {
    //     return `Player Wins ${playerScore} to ${cpuScore}!`;
    // } else if(playerScore < cpuScore){
    //     return `Computer Wins ${cpuScore} to ${playerScore}`;
    // } else {
    //     return `It's a tie! ${playerScore} to ${cpuScore}`;
    // }
}

console.log(game());