// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ROCK PAPER SCISSORS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// FUNCTION: Create function to return computer's choice for rock paper scissors
    // function has no inputs; won't require any parameters
    // randomly return 'Rock', 'Paper', 'Scissors'
        // create variable to store random value of possible values that will correspond to each option
        // select corresponding string based off of random value
    // create string variable to store r-p-s choice
    // output r-p-s choice string

// FUNCTION: Create function to get player's choice for r-p-s
    // function will have one parameter, which defines if there was previously a draw. default value should be zero
    // ask player for their choice, store the player's choice in a variable as a string
        // include condition for draw, where the input message declares that there was a draw, try again.
    // convert the player's selection into a standardized format (captialized)
    // add a condition that asks the player again for their option if they don't input a valid selection
    // house all of this computation inside of a while condition where input is initially invalid, and then if valid condiiton is satisfied, the loop exits with valid input
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

// FUNCTION: Output the outcome of the game and the choices to the user, as a string
    // Function will have three parameters: the outcome, player's choice, and computer's choice
    // If the player wins, the output will indicate that, and briefly explain why
    // If the computer wins, the output will indicate that, and briefly explain why

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
function getPlayerChoice (drawStatus) {
    
    // initialize value for while loop
    let invalidInput = true;
    // declare variable outside of while scope
    let playerChoice;

    while (invalidInput) {
        
        // Condition to adjust prompt if there was a draw in the previous game
        if (drawStatus === 0) {
            // ask player for their choice, store it in a variable as a string
            playerChoice = prompt( 'Choose from \'Rock\', \'Paper\', or \'Scissors\'.');
        } else {
            // Inform player there was a draw; ask for choice and store in variable
            playerChoice = prompt( 'There was a draw. Choose again from \'Rock\', \'Paper\', or \'Scissors\'.');
        }
        
        // convert the player's selection into a standardized format (capitalized)
        playerChoice = makeCapitalized(playerChoice);
        
        // condition to check if the player inputted a valid option
        if ( (playerChoice === 'Rock') || (playerChoice === 'Paper') || (playerChoice === 'Scissors') ) {
            invalidInput = false;   // input is valid
        } else {
            alert('Please input a valid option.');  // if input is invalid
        }
    }

    // return the variable containing the player's selection
    return playerChoice;
}


// Function to captialize strings
function makeCapitalized(string) {
    // takes the first letter and capitalizes
    let firstLetter = string.charAt(0).toUpperCase();
     
    // takes the body and makes it lower case
    let stringBody = string.slice(1).toLowerCase();
    
    // concatenates the two and returns it
    return (firstLetter + stringBody);
}


// Function to compare player's choice to computer's
function playRound (playerChoice, computerChoice) {
    
    // Declare outcome variable to store result as string
    let outcome;

    // Choices comparison. Draw, player wins, or computer wins
    if (playerChoice === computerChoice) {
        outcome = 'Draw';
    } else if ( 
    (playerChoice === 'Rock' && computerChoice === 'Scissors') || 
    (playerChoice === 'Scissors' && computerChoice === 'Paper') || 
    (playerChoice === 'Paper' && computerChoice === 'Rock') ) {
        outcome = 'Player wins';
    } else {
        outcome = 'Computer wins';
    }

    // output the outcome of the competition, and the choices as array object
    return [ outcome, playerChoice, computerChoice ];
}

// Function to output results of the game to the user
function showResults (outcome, playerChoice, computerChoice) {
    
    // Output the outcome and choices of the game to the user as a string
    if (outcome === 'Player wins') {
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    } else if (outcome === 'Computer wins') {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    }
}


// Declare drawstatus; default value is '0' in playRound function
let drawStatus = 0;

// Declare result variables for use in results display
let results;
let outcome;
let playerChoice;
let computerChoice;

// Initialization value; game is not over
let gameOver = false;

// Initialize rounds until there is a winner
while (!gameOver) {

    // Play round, and output results in an array
    results = playRound( getPlayerChoice(drawStatus), getComputerChoice() );
    outcome = results[0];

    // Condition to evaluate if the competition has a decision
    if (outcome !== 'Draw') {
        gameOver = true;
    } else {
        drawStatus = 1;
    }
}

// Store choices in variables by copying from results array
playerChoice = results[1];
computerChoice = results[2];

// Initialize function to output results to console
showResults (outcome, playerChoice, computerChoice);