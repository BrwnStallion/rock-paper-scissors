// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ROCK PAPER SCISSORS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// FUNCTION: Create function to return computer's choice for rock paper scissors
    // function has no inputs; won't require any parameters
    // randomly return 'Rock', 'Paper', 'Scissors'
        // create variable to store random value of possible values that will correspond to each option
        // select corresponding string based off of random value
    // create string variable to store r-p-s choice
    // output r-p-s choice string

// FUNCTION: Create function to get player's choice for r-p-s
    // ask player for their choice, store the player's choice in a variable as a string
    // convert the player's selection into a standardized format (captialized)
    // return the variable containing the player's selection

// FUNCTION: Compare player's choice to computer's choice. Determine winner based off pre-defined relationships
// Initialize function to compare computer's choice with player's choice
    // function will have two parameters: computerChoice and playerChoice
        // each parameter will be a string, with standardized text formatting
        // each parameter will be derived from a function: getComputerChoice and getPlayerChoice
    // Compare the two strings
        // If the strings are equal, then it's a draw
        // Player wins if: (Rock and Scissors) OR (Scissors and Paper) OR (Paper and Rock)
        // Computer wins if: player didn't win
    // Output the choices as strings, and output the result (win, loss, draw)
    
// GLOBAL SCOPE: initialize rounds until there is a winner
    // While there is a draw, display that there was a draw, and initialize comparison function (playRound) again
    // If there is not a draw, display the results 

// --------------------------- END PSEUDOCODE ---------------------------------

// Initialize function to return computer's choice for rock paper scissors
function getComputerChoice () {
    
    // variable to store random value; each corresponding to possible r-p-s option
    let choiceNum = Math.floor( Math.random() * 3 ) + 1;
    
    // create variable to store the computer's choice
    let computerChoice;

    // select corresponding string based off of random value
    switch (choiceNum) {
        case 1:
            computerChoice = 'Rock';
        break;
        case 2:
            computerChoice = 'Paper';
        break;
        case 3:
            computerChoice = 'Scissors';
        break;
        default:
            computerChoice = 'Rock';
    }
    // output r-p-s choice string
    return computerChoice;
}

// Initialize function to get player's choice for r-p-s
function getPlayerChoice () {

}

function playRound (playerChoice, computerChoice) {

}