//global variables
let playerScore = 0;
let cpuScore = 0;
let playerSelection;
let buttons = document.querySelectorAll('.btn');
let btnContainerDiv = document.querySelector('.button-container');
let resultsContainerDiv = document.querySelector('.results-container')
let scorePara = document.createElement('p');
let finalResultPara = document.createElement('p');
let playGameBtn = document.createElement('button')

function beforeGameStart() {
    // create a function hides the game buttons and
    // shows a button once clicked starts the game() fucntion
    buttons.forEach((button) => {
        button.style.display = "none";
    });
    playGameBtn.classList.add('btn');
    playGameBtn.textContent = "play game?";
    btnContainerDiv.appendChild(playGameBtn);
    playGameBtn.addEventListener('click', () => {
        playGameBtn.style.display = "none";
        game();
    })
}

beforeGameStart();



function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;

}

function playRound(playerSelection, computerSelection) {  
    if((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'paper') || playerSelection === 'scissors' && computerSelection === 'scissors' ) {
        scorePara.textContent = `Player: ${playerScore} | Computer: ${cpuScore}`
        resultsContainerDiv.appendChild(scorePara);
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore+=1;
        scorePara.textContent = `Player: ${playerScore} | Computer: ${cpuScore}`
        resultsContainerDiv.appendChild(scorePara);
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        cpuScore+=1;
        scorePara.textContent = `Player: ${playerScore} | Computer: ${cpuScore}`
        resultsContainerDiv.appendChild(scorePara);
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore+=1;
        scorePara.textContent = `Player: ${playerScore} | Computer: ${cpuScore}`
        resultsContainerDiv.appendChild(scorePara);
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        cpuScore+=1;
        scorePara.textContent = `Player: ${playerScore} | Computer: ${cpuScore}`
        resultsContainerDiv.appendChild(scorePara);
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore+=1;
        scorePara.textContent = `Player: ${playerScore} | Computer: ${cpuScore}`
        resultsContainerDiv.appendChild(scorePara);
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        cpuScore+=1;
        scorePara.textContent = `Player: ${playerScore} | Computer: ${cpuScore}`
        resultsContainerDiv.appendChild(scorePara);
    }
}

// Create a function that plays 5 rounds, keeps score between the player and the computer
// and determines a winner at the end of the game
function game() {

    buttons.forEach((button) => {
        button.style.display = "block";
        button.addEventListener('click', () => {
            playerSelection = button.textContent;
            computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
            if(playerScore === 5) {
                finalResultPara.textContent = `Player Wins ${playerScore} to ${cpuScore}!`;
                resultsContainerDiv.removeChild(scorePara);
                resultsContainerDiv.appendChild(finalResultPara);
            } else if(cpuScore === 5){
                finalResultPara.textContent = `Computer Wins ${cpuScore} to ${playerScore}`;
                resultsContainerDiv.removeChild(scorePara);
                resultsContainerDiv.appendChild(finalResultPara);
            }
        });
    });
}

