let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const randomThree = Math.floor(Math.random() * 3) + 1;

  if (randomThree === 1) {
    return "fire";
  } else if (randomThree === 2) {
    return "nature";
  } else {
    return "water";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "fire" && computerSelection === "nature") ||
    (playerSelection === "nature" && computerSelection === "water") ||
    (playerSelection === "water" && computerSelection === "fire")
  ) {
    computerScore++;
    return `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`;
  } else {
    playerScore++;
    return `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`;
  }
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt("Let's play a game! fire, nature, or water?").toLowerCase();
//     const computerSelection = computerPlay();
//     console.log(playRound(playerSelection, computerSelection));
//   }

//   if (playerScore > computerScore) {
//     console.log(`Winner! Player score: ${playerScore}, Computer score: ${computerScore}`);
//   } else {
//     console.log(`Loser! Player score: ${playerScore}, Computer score: ${computerScore}`);
//   }
// }

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
