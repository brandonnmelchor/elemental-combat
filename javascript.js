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

const playerSelection = prompt("Let's play a game! Rock, paper, or scissors?").toLowerCase();
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "It's a tie!";
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") return "You Lose! Paper beats Rock.";
    else return "You Win! Rock beats Scissors.";
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") return "You Lose! Scissors beats Paper.";
    else return "You Win! Paper beats Rock.";
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") return "You Lose! Rock beats Scissors.";
    else return "You Win! Scissors beats Paper.";
  } else {
    return playRound(prompt("Choose again! Rock, paper, or scissors?"), computerSelection);
  }
}

// function game() {
//   const playerScore = 0;
//   const computerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     console.log(playRound(playerSelection, computerSelection));
//   }
// }
