function getComputerChoice(){
    const number = Math.random();
    const a = "Rock";
    const b = "Scissors";
    const c = "Paper";
    if (number <= 1/3) {
        return a;
    } else if (number <= 2/3) {
        return b;
    } else {
        return c;
    }
}
function getHumanChoice() {
    let choice;
    const validChoices = ["rock", "paper", "scissors"];
    do {
        choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    } while (!validChoices.includes(choice));
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(){
    const human = getHumanChoice();
    const computer = getComputerChoice();
    if (human === "Rock" && computer === "Scissors") {
        humanScore++;
        return `You win! ${human} beats ${computer}.`;
    } else if (human === "Rock" && computer === "Paper") {
        computerScore++;
        return `You Lose! ${computer} beats ${human}.`;
    } else if (human === "Scissors" && computer === "Paper"){
        humanScore++;
        return `You win! ${human} beats ${computer}.`;
    } else if (human === "Scissors" && computer === "Rock"){
        computerScore++;
        return `You Lose! ${computer} beats ${human}.`;
    } else if (human === "Paper" && computer === "Rock"){
        humanScore++;
        return `You win! ${human} beats ${computer}.`;
    } else if (human === "Paper" && computer === "Scissors"){
        computerScore++;
        return `You Lose! ${computer} beats ${human}.`;
    } else {
        return "It's a tie!"
    }
}
function playGame(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();

console.log(computerScore);
console.log(humanScore);

