/*What problem this code will solve: 
 Make a Rock Paper Scissors game played between the Computer and a Human by first writing 
 two functions. The function gethumanChoice will return the input from a human and the 
 function getComputerChoice can return Rock, Paper, or Scissors depending on the value 
 given using the method Math.random(). Then we create the variables humanScore and computerScore to keep
 track of the results of the Rock Paper Scissors game and initialize it with 0. Afterwards, we make a playRound
 function with parameters humanChoice and Computer Choice which increments the parameter that wins the round
 and writes a string value that represents the winner to console.log. Finally, we create the playGame function
 to call playRound 5 times. */

/*Create a function that randomly returns "Rock", "Paper", or "Scissors" by creating a variable, setting it equal
to the value given from Math.random() and using conditionals that return a string based on the variable's value */

function getComputerChoice() {
    let randomChoice = Math.random();

        if (randomChoice <= 0.333) {
            return "rock";
        }
        else if  (randomChoice<= 0.666) {
            return "paper"
        }
        else {
            return "scissors"
        }
}

/*Create function getHumanChoice which prompts the user to enter a Rock. Paper, or Scissor string. Use swtich
statement so that if input is not given the strings Rock, Paper, or Scissors, the string "WRONG INPUT!!!" will
be shown on the viewport. If the input is either one of the strings Rock. Paper, or Scissor, return the input value.
Make prompt case insensitive by putting the method .toLowerCase(); after the prompt message and making
the case strings lowercase.
*/
function gethumanChoice() {
    let input = prompt("Rock, Paper, or Scissors??? ").toLowerCase();

    switch (input) {
        case "rock":
        case "paper":
        case "scissors":
            return input;
        
        default:
            alert("WRONG INPUT!!");
            return gethumanChoice(); //use this to call the gethumanfunction if the input is incorrect
    }
}

/*Create playGame function that declares humanScore and computerScore variables and initializes them with 
0 and calls the function playRound 5 times*/

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    /*Create playRound function that takes the parameters humanChoice and computerChoice and make their
    arguments be equal to the values of functions gethumanChoice and getComputerChoice by creating
    the variables humanSelection and computerSelection. Then create if statements that increments the value
    of humanScore or ComputerScore depending on who wins the round and print a message to the console.
    Afterwards call the playRound function 5 times in the playGame function so game runs 5 times, and create
    an if statement that prints a message depending on who is the winner of the 5 rounds. Finally, call the playGame
    function. 
    */
    function playRound(humanChoice, computerChoice) {
    
            if (humanChoice === computerChoice) {
                console.log("Wait... this cant be... Ladies and gentlemen we have a DRAW!")
             }
    
             if (humanChoice === "rock" && computerChoice === "paper") {
                console.log("LOL the computer wins this round") 
                computerScore++;
            }
            else if (humanChoice === "rock" && computerChoice === "scissors") {
                console.log("Alright one point for you silly human ");
                humanScore++;
            }
            else if (humanChoice === "scissors" && computerChoice=== "rock") {
                console.log("The computer hath prevailed")
                computerScore++;
            }
            else if (humanChoice === "scissors" && computerChoice === "paper") {
                console.log("Why is the computer letting the human win?") 
                humanScore++;
            }
            else if (humanChoice === "paper" && computerChoice=== "scissors") {
                console.log("The computer is so much smarter than the human lol. 1 point for computer");
               computerScore++;
            }
            else if (humanChoice === "paper" && computerChoice === "rock") {
                console.log("Are you kidding me? Somehow 1 point for human! ")
                humanScore++;
            }
        }

    const humanSelection = gethumanChoice;
    const computerSelection = getComputerChoice;

    playRound(humanSelection(), computerSelection());
    playRound(humanSelection(), computerSelection());
    playRound(humanSelection(), computerSelection());
    playRound(humanSelection(), computerSelection());
    playRound(humanSelection(), computerSelection());
    
    
    if (humanScore > computerScore) {
        console.log("I can't believe im saying this but the human has won!") 
    }
    else  {
        console.log("The computer won! As expected")
    }
}

playGame();

    



