// Variables
const choices = document.querySelectorAll(".throw");
const compImage = document.getElementById("computer-choice");
const result = document.getElementById("result-text");
const resetButton = document.getElementById("play-again");

let playerChoice = '';
let compChoice = '';

// Add event listeners for users choice.
choices.forEach(choice => {
    choice.addEventListener('click', function () {
        choices.forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        playerChoice = this.id;

        makeCompChoice();
    });
});

// Computer choice.
function makeCompChoice() {
    const options = ['rock', 'paper', 'scissors'];
    let index = 0;

    console.log("Computer is choosing...");

    const shuffleInterval = setInterval(() => {
        console.log("Shuffling to:", options[index]); 
        compImage.src = `images/${options[index]}.PNG`;
        index = (index + 1) % options.length;
    }, 500);

    setTimeout(() => {
        clearInterval(shuffleInterval);
        compChoice = options[Math.floor(Math.random() * options.length)];
        console.log("Computer selected:", compChoice); 
        compImage.src = `images/${compChoice}.PNG`;
        determineWinner();
    }, 3000); 
}

// Check who won.
function determineWinner() {
    if (playerChoice === compChoice) {
        result.textContent = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && compChoice === 'scissors') ||
        (playerChoice === 'scissors' && compChoice === 'paper') ||
        (playerChoice === 'paper' && compChoice === 'rock')
    ) {
        result.textContent = "You win!";
    } else {
        result.textContent = "Computer wins!";
    }
}

// Restart game.
resetButton.addEventListener('click', function () {
    choices.forEach(c => c.classList.remove('selected'));
    compImage.src = 'images/question-mark.PNG'; 
    result.textContent = '';
    playerChoice = '';
    compChoice = '';
});
