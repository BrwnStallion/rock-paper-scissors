// rock paper scissors

// Initialize function to return computer's choice for rock paper scissors
    // function has no inputs; won't require any parameters
    // randomly return 'Rock', 'Paper', 'Scissors'
        // create variable to store random value of possible values that will correspond to each option
        // select corresponding string based off of random value
    // create string variable to store r-p-s choice
    // output r-p-s choice string
    
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
}