

// Create a function called getComputerChoice that randomly selects 'rock'
// 'paper' or scissors and returns the result

function getComputerChoice() {
    // need a variable to hold the choices - create an array to hold the choices
    let choices = ['rock', 'paper', 'scissors'];
    // console.log(choices);
    // create a randomizer algorithm with the choice variable - create 
    // another variable to hold the random choice - i.e. let randomChoice = 
    // revisit the Math.random method...
    let randomChoice = Math.random() * choices.length;
    console.log(randomChoice);

}

// call the function to console.log the variable
getComputerChoice();