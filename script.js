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
    // include a condition for what to do if the player declines to play
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

// FUNCTION: Output the outcome of the round and the choices to the user, as a string
    // Function will have three parameters: the outcome, player's choice, and computer's choice
    // If the player wins, the output will indicate that, and briefly explain why
    // If the computer wins, the output will indicate that, and briefly explain why

// FUNCTION: Output the outcome of the match and the choices to the user as a string
    // Function will have two parameters: the player's score, and the computer's score
    // The output will indicate the winner, and the final score

// FUNCTION: Play a best of 5 match of r-p-s
    // Function will not have any parameters
    // Play rounds of r-p-s (repeating if there is a draw)
    // Play until one player has won 3 games
        // Track the round score for each decision
    // Output the results of each round
    // Use a condition to check if a player has reached 3 wins (endCondition)
    // Output the round score with each decision
    // Output a final message declaring a winner, and state the round score

// GLOBAL SCOPE: Initialize function to play a best of five match


// GLOBAL SCOPE: initialize rounds until there is a winner
    // While there is a draw, display that there was a draw, and initialize comparison function (playRound) again
    // If there is not a draw, display the results



// Everything is triggered on an event listener on the buttons. All activity 
// waits on the event listener(s) on the buttons.
// Functions can be called from within the event listener

// Listen for a selection on the buttons
// FUNCTION: Get the computer's choice
// FUNCTION: Compare selection to computer's choice
// If there's a draw, inform the player, and listen again for the player's choice
// FUNCTION: Declare the winner, and output the round score
// Listen for player choices until there is a match winner
// FUNCTION: Declare the winner, and output the final score


// ---------------------------- END PSEUDOCODE ---------------------------------


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
function getPlayerChoice (drawStatus = 0) {
    
    let playerChoice;

    function buttonListener() {
        const optionBtns = document.querySelectorAll('#player-choice button');
        let playerChoice;
        const playerButton = document.querySelector('#player-choice');
        
        playerChoice = playerButton.addEventListener('click', (e) => {
            playerChoice = e.target.id;
            // console.log(playerChoice);
            optionBtns.forEach( (button) => {
                button.disabled = true;
            });
        }, {
            once: true
        });
        // return playerChoice;
        return console.log('listener function is over');
    }
        
        // Condition to adjust prompt if there was a draw in the previous game
    if (drawStatus !== 0) {
        // Inform player there was a draw; ask for choice and store in variable
        const statusPara = document.querySelector('#results #status');
        statusPara.textContent = 'There was a draw. Choose again.';
    };

    // ask player for their choice, store it in a variable as a string
    playerChoice = buttonListener();

    if (playerChoice === null) {
        throw new Error('I guess you didn\'t want to play...'); // If the player cancels
    };

    // return the variable containing the player's selection
    // return playerChoice;
    return console.log('hello world');
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


// Function to output results of the round to the user
function showRoundResults (outcome, playerChoice, computerChoice) {
    
    // Declare outcome variable to store result as string
    let output;

    // Output the outcome and choices of the game to the user as a string
    switch (outcome) {
        case 'Draw':
            output = `It was a draw, try again`;
        break;
        case 'Player wins':
            output = `You win! ${playerChoice} beats ${computerChoice}`;
        break;
        case 'Computer wins':
            output = `You lose! ${computerChoice} beats ${playerChoice}`;
        break;
        default:
            output = '';
    };
    return output;
}

// Function to output results of the match to the user
function showMatchResults (playerScore, computerScore, gameOver = 0) {
    let output;
    // Output the match outcome and the scores to the user as a string
    if (gameOver && playerScore > computerScore) {
        output = `You won the match! Final score is ` +
        `${playerScore}-${computerScore}`;
    } else if (gameOver && computerScore > playerScore) {
        output = `You lost the match! Final score is ` +
        `${computerScore}-${playerScore}`;
    } else if (!gameOver && playerScore > computerScore) {
        output = `You're winning: ${playerScore}-${computerScore}`;
    } else if (!gameOver && computerScore > playerScore) {
        output = `You're losing: ${playerScore}-${computerScore}`;
    } else if (!gameOver && playerScore === computerScore) {
        output = `It's tied: ${playerScore}-${computerScore}`;
    };

    return output;
}


function makeBtnDisabled (buttons) {
    buttons.forEach( (button) => {
        button.disabled = true;
    });
}


function makeBtnEnabled (buttons) {
    buttons.forEach( (button) => {
        button.disabled = false;
    });
}

// Function to play a best of X match
function playMatch (rounds) {
    
    let winGoal = Math.ceil(rounds / 2);

    // Declare variable to store player's counting score, starting at zero
    let playerScore = 0;
    // Declare variable to store computer's counting score, starting at zero
    let computerScore = 0;

    // Initialization value for the match; the match has not yet reached the end
    let endCondition = false;
    
    // Continue playing rounds until there is a match winner
    while (!endCondition) {
        
        // Declare drawstatus; for use in playRound function
        let drawStatus = 0;

        // Declare result variables for use in results display
        let results;
        let outcome;
        let playerChoice;
        let computerChoice;
        
        // Initialization value; game is not over
        let gameOver = false;

        // Initialize games until there is a round winner
        while (!gameOver) {

            // Play round, and output results in an array
            results = playRound( getPlayerChoice(drawStatus),
            getComputerChoice() );
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
        showRoundResults (outcome, playerChoice, computerChoice);

        // Condition to add score to respective player's score
        if (outcome === 'Player wins') {
            ++playerScore;
        } else if (outcome === 'Computer wins') {
            ++computerScore;
        }

        // Condition to check if a player has reached the match win goal
        if ( playerScore === winGoal || computerScore === winGoal ) {
        
            // Update the end condition; the match has reached its end
            endCondition = true;

            // Output the results to show the user the round score, and the winner
            showMatchResults(playerScore, computerScore);
        }
    }
}

// Initialize playMatch function to play a match of r-p-s to a certain amount of
    // rounds  
// let rounds = 5;
// alert(`Let's play a best of ${rounds} match of Rock, Paper, Scissors.`);
// playMatch(rounds);


// ---------------------------- TESTING ----------------------------------------

// let playerChoice = getPlayerChoice(1);
// console.log(playerChoice);


// HTML element information
const optionBtns = document.querySelectorAll('#player-choice button'); // choices
const playerButton = document.querySelector('#player-choice'); // parentNode
let playerChoice;
const resultsDiv = document.querySelector('#results'); // results div
const scorePara = document.querySelector('#results #running-score'); // match score
const statusPara = document.querySelector('#results #status'); // round outcome
const roundInput = document.querySelector('#rounds input');
const roundConfirm = document.querySelector('#rounds #round-confirm');

// Match information
let rounds;
let winGoal;

// Declare variable to store player's counting score, starting at zero
let playerScore = 0;
// Declare variable to store computer's counting score, starting at zero
let computerScore = 0;

// Initialization value for the match; the match has not yet reached the end
let endCondition = false;
let gameOver = 0;


// Event listener to put focus on input field by default
document.addEventListener('DOMContentLoaded', () => {
    roundInput.focus();
});

// Event listener for input 'enter' key to create confirm button click event
roundInput.addEventListener('keydown', (e) => {
    let keyPress = e.key;
    if (keyPress === 'Enter') {
        let confirmClick = new Event('click');
        roundConfirm.dispatchEvent(confirmClick);
    };
});

// Event listener on input confirm button for round input
roundConfirm.addEventListener('click', () => {

    // Round information
    rounds = +roundInput.value;
    winGoal = Math.ceil(rounds / 2);
    
    roundInput.value = '';

    // Reset scores if round goal is entered
    playerScore = 0;
    computerScore = 0;

    // Empty output paragraphs
    scorePara.textContent = '';
    statusPara.textContent = '';

    // Delete any existing 'best of...' paragraphs in results div
    const bestOfParaOld = document.querySelectorAll('#results .best-of');
    if (bestOfParaOld.length > 0) {
            bestOfParaOld.forEach( (oldBestOf) => {
            resultsDiv.removeChild(oldBestOf);
        });
    };

    const bestOfPara = document.createElement('p');
    bestOfPara.setAttribute('class', 'best-of');

    // Require that player inputs an odd 'best of' value
    if (typeof rounds !== 'number') {
        bestOfPara.textContent = `Please enter an odd number`;
        roundInput.focus();
    } else if (rounds < 0) {
        bestOfPara.textContent = `Please enter a *positive* odd number`;
        roundInput.focus();
    } else if (rounds % 2 === 0 || Math.floor(rounds) !== rounds) {
        bestOfPara.textContent = `Please enter an odd number`;
        roundInput.focus();
    } else {
        bestOfPara.textContent = `Playing best of ${rounds}`;
        roundInput.blur();
    };
    
    // add 'best of' paragraph to top of of results div
    resultsDiv.prepend(bestOfPara);
});

// Event listener for gameplay
playerButton.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playerChoice = makeCapitalized(playerChoice);
    
    makeBtnDisabled(optionBtns);
    
    // Play a round of rps
    let results = playRound(playerChoice, getComputerChoice());
    let outcome = results[0];
    let computerChoice = results[2];
    
    // Round results
    statusPara.textContent = showRoundResults(
        outcome, playerChoice, computerChoice
    );
    
    // This can be put into a function?
    // Match score incrementation
    if (outcome === 'Player wins') {
        ++playerScore;
    } else if (outcome === 'Computer wins') {
        ++computerScore;
    };
    
    // Match results
    scorePara.textContent = showMatchResults(playerScore,
        computerScore, gameOver
    );

    makeBtnEnabled(optionBtns);

    



}, {
    once: false
});
