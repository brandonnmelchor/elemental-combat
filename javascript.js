let playerScore = 0;
let enemyScore = 0;

function computerPlay() {
  const randomThree = Math.floor(Math.random() * 3) + 1;

  if (randomThree === 1) return "fire";
  else if (randomThree === 2) return "nature";
  else return "water";
}

function playRound(playerElement, enemyElement) {
  if (playerElement === enemyElement) {
    return "It's a tie!";
  } else if (
    (playerElement === "fire" && enemyElement === "nature") ||
    (playerElement === "nature" && enemyElement === "water") ||
    (playerElement === "water" && enemyElement === "fire")
  ) {
    enemyScore++;
    return `You lose! ${capitalize(enemyElement)} beats ${capitalize(playerElement)}.`;
  } else {
    playerScore++;
    return `You win! ${capitalize(playerElement)} beats ${capitalize(enemyElement)}.`;
  }
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     const playerElement = prompt("Let's play a game! fire, nature, or water?").toLowerCase();
//     const enemyElement = computerPlay();
//     console.log(playRound(playerElement, enemyElement));
//   }

//   if (playerScore > enemyScore) {
//     console.log(`Winner! Player score: ${playerScore}, Computer score: ${enemyScore}`);
//   } else {
//     console.log(`Loser! Player score: ${playerScore}, Computer score: ${enemyScore}`);
//   }
// }

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
