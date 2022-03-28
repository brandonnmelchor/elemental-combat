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

function playRound(playerSelection, computerSelection) {}

const playerSelection = prompt("aaaaa");
const computerSelection = computerPlay();
