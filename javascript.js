let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const randomThree = Math.floor(Math.random() * 3) + 1;

  if (randomThree === 1) {
    return "rock";
  } else if (randomThree === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
    computerScore++;
    return `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`;
  } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
    playerScore++;
    return `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`;
  } else {
    return playRound(prompt("Invalid choice. Please choose again! Rock, paper, or scissors?"), computerSelection);
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Let's play a game! Rock, paper, or scissors?").toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore > computerScore) {
    console.log(`Winner! Player score: ${playerScore}, Computer score: ${computerScore}`);
  } else {
    console.log(`Loser! Player score: ${playerScore}, Computer score: ${computerScore}`);
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

game();
