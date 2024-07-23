/*Create a function that randomly returns "Rock", "Paper", or "Scissors" by creating a variable, setting it equal
to the value given from Math.random() and using conditionals that return a string based on the variable's value */
function getComputerChoice() {
    let randomChoice = Math.random();

    if (randomChoice <= 0.333) {
        return "Rock";
    }
    else if  (randomChoice <= 0.666) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

//Create function getHumanChoice which prompts the user to enter a Rock. Paper, or Scissor string
function gethumanChoice() {
    return prompt("Rock, Paper, or Scissors??? ");
}

//Declare the players score variables
let humanScore = 0;
let computerScore = 0;

