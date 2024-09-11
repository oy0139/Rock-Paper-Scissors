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
/*function gethumanChoice() {
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
}*/

const rock = document.querySelector("#rock")
rock.addEventListener("click", () => playRound('rock'))

const paper = document.querySelector("#paper")
paper.addEventListener("click", () => playRound('paper'))

const scissors = document.querySelector("#scissors")
scissors.addEventListener("click", () => playRound('scissors'))

const result = document.querySelector("#result")
const score = document.querySelector("#score")

result.textContent = "Result :"
score.textContent = "Score :"

humanScore = 0;
computerScore = 0;
    
    /*Create playRound function that takes the parameters humanChoice and computerChoice and make their
    arguments be equal to the values of functions gethumanChoice and getComputerChoice by creating
    the variables humanSelection and computerSelection. Then create if statements that increments the value
    of humanScore or ComputerScore depending on who wins the round and print a message to the console.
    Afterwards call the playRound function 5 times in the playGame function so game runs 5 times, and create
    an if statement that prints a message depending on who is the winner of the 5 rounds. Finally, call the playGame
    function. 
    */
function playRound(humanChoice) {

            let computerChoice = getComputerChoice();

            if (humanChoice === computerChoice) {
                result.textContent = "Wait... this cant be... Ladies and gentlemen we have a DRAW!"
                score.textContent += 1
             }
    
             if (humanChoice === "rock" && computerChoice === "paper") {
                result.textContent = "LOL the computer wins this round"
                computerScore++;
                score.textContent += 1
            }
            else if (humanChoice === "rock" && computerChoice === "scissors") {
                result.textContent = "Alright one point for you silly human";
                humanScore++;
                score.textContent += 1
            }
            else if (humanChoice === "scissors" && computerChoice=== "rock") {
                result.textContent = "The computer hath prevailed";
                computerScore++;
                score.textContent += 1
            }
            else if (humanChoice === "scissors" && computerChoice === "paper") {
                result.textContent  = "Why is the computer letting the human win?";
                humanScore++;
                score.textContent += 1
            }
            else if (humanChoice === "paper" && computerChoice=== "scissors") {
                result.textContent = "The computer is so much smarter than the human lol. 1 point for computer";
               computerScore++;
               score.textContent += 1
            }
            else if (humanChoice === "paper" && computerChoice === "rock") {
                result.textContent = "Are you kidding me? Somehow 1 point for human!"
                humanScore++;
                score.textContent += 1
            }
        }

    if (humanScore > computerScore && humanScore == 5) {
        result.textContent = "I can't believe im saying this but the human has won!"
    }
    else if (computerScore > humanScore && computerScore == 5 )  {
        result.textContent = "The computer won! As expected"
    }
    



