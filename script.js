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
            return "Rock";
        }
        else if  (randomChoice<= 0.666) {
            return "Paper"
        }
        else {
            return "Scissors"
        }
}

/*Create function getHumanChoice which prompts the user to enter a Rock. Paper, or Scissor string. Use swtich
statement so that if input is not given the strings Rock, Paper, or Scissors, the string "WRONG INPUT!!!" will
be shown on the viewport. If the input is either one of the strings Rock. Paper, or Scissor, return the input value
*/
function gethumanChoice() {
    let input = prompt("Rock, Paper, or Scissors??? ")

    switch (input) {
        case "Rock":
        case "Paper":
        case "Scissors":
            return input.toLowerCase();
        
        default:
            alert("WRONG INPUT!!");
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
    */
    function playRound(humanChoice, computerChoice) {
    
            if (humanChoice === computerChoice) {
                console.log("Wait... this cant be... Ladies and gentlemen we have a DRAW!")
             }
    
             if (humanChoice === "Rock" && computerChoice === "Paper") {
                console.log("LOL the computer wins this round") 
               return ++computerScore;
            }
            else if (humanChoice === "Rock" && computerChoice === "Scissors") {
                console.log("Alright one point for you silly human ");
                return ++humanScore;
            }
            else if (humanChoice === "Scissors" && computerChoice=== "Rock") {
                console.log("The computer hath prevailed")
                return ++computerScore;
            }
            else if (humanChoice === "Scissors" && computerChoice === "Paper") {
                console.log("Why is the computer letting the human win?") 
               return ++humanScore;
            }
            else if (humanChoice === "Paper" && computerChoice=== "Scissors") {
                console.log("The computer is so much smarter than the human lol. 1 point for computer");
                return ++computerScore;
            }
            else {
                console.log("Are you kidding me? Somehow 1 point for human! ")
                return ++humanScore;
            }
        }

        const humanSelection = gethumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        playRound(humanSelection, computerSelection);
        playRound(humanSelection, computerSelection);
        playRound(humanSelection, computerSelection);
        playRound(humanSelection, computerSelection);
           
    }

playGame();
    



