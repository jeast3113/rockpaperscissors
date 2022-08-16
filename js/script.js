//global variables
let playerScore = 0;
let cpuScore = 0;
let playerSelection;
let buttons = document.querySelectorAll('.btn');
let btnContainerDiv = document.querySelector('.button-container');
let resultsContainerDiv = document.querySelector('.results-container')
let p = document.createElement('p');



function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;

}

function playRound(playerSelection, computerSelection) {  
    if((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'paper') || playerSelection === 'scissors' && computerSelection === 'scissors' ) {
        p.textContent = `Player: ${playerScore} | Computer: ${cpuScore}`
        resultsContainerDiv.appendChild(p);
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore+=1;
        p.textContent = `Player: ${playerScore} | Computer: ${cpuScore}`
        resultsContainerDiv.appendChild(p);
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        cpuScore+=1;
        p.textContent = `Player: ${playerScore} | Computer: ${cpuScore}`
        resultsContainerDiv.appendChild(p);
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore+=1;
        p.textContent = `Player: ${playerScore} | Computer: ${cpuScore}`
        resultsContainerDiv.appendChild(p);
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        cpuScore+=1;
        p.textContent = `Player: ${playerScore} | Computer: ${cpuScore}`
        resultsContainerDiv.appendChild(p);
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore+=1;
        p.textContent = `Player: ${playerScore} | Computer: ${cpuScore}`
        resultsContainerDiv.appendChild(p);
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        cpuScore+=1;
        p.textContent = `Player: ${playerScore} | Computer: ${cpuScore}`
        resultsContainerDiv.appendChild(p);
    }
}

// Create a function that plays 5 rounds, keeps score between the player and the computer
// and determines a winner at the end of the game
function game() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.textContent;
            computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
            if(playerScore === 5) {
                p.textContent = `Player Wins ${playerScore} to ${cpuScore}!`;
                resultsContainerDiv.appendChild(p);
            } else if(cpuScore === 5){
                p.textContent = `Computer Wins ${cpuScore} to ${playerScore}`;
                resultsContainerDiv.appendChild(p);
            }
        });
    });
}

game();