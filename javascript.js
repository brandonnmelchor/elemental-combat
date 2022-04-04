let rounds = 0;
let playerLives = 5;
let computerLives = 5;

const roundCounter = document.querySelector("#round-counter");
const LivesCounter = document.querySelector("#lives");
const gameAnnouncer = document.querySelector("#game-announcer");
const playAgain = document.querySelector("#play-again");

const elements = document.querySelectorAll(".player-area .element");
elements.forEach((element) => element.addEventListener("click", playRound));

function playRound() {
  const playerElement = this.attributes["id"].nodeValue;
  const computerElement = computerPlay();
  // const playerSelected = document.querySelector(`.element[id="${this.attributes["id"].nodeValue}"]`);

  gameAnnouncer.textContent = checkRoundWinner(playerElement, computerElement);
  roundCounter.textContent = `Round:${++rounds}`;
  LivesCounter.textContent = `Player Lives: ${playerLives}. Enemy Lives: ${computerLives}.`;

  if (playerLives === 0 || computerLives === 0) {
    checkGameWinner();
  }
}

function computerPlay() {
  const randomThree = Math.floor(Math.random() * 3) + 1;

  if (randomThree === 1) return "fire";
  else if (randomThree === 2) return "nature";
  else return "water";
}

function checkRoundWinner(playerElement, computerElement) {
  if (playerElement === computerElement) {
    return "It's a tie!";
  } else if (
    (playerElement === "fire" && computerElement === "nature") ||
    (playerElement === "nature" && computerElement === "water") ||
    (playerElement === "water" && computerElement === "fire")
  ) {
    playerLives--;
    return `You lose! ${capitalize(computerElement)} beats ${capitalize(playerElement)}.`;
  } else {
    computerLives--;
    return `You win! ${capitalize(playerElement)} beats ${capitalize(computerElement)}.`;
  }
}

function checkGameWinner() {
  if (playerLives === 0) {
    gameAnnouncer.textContent = "You lost this battle!";
  } else {
    gameAnnouncer.textContent = "You won this battle!";
  }

  playAgain.textContent = "Play again?";
  playAgain.classList.add("play-again");
  playAgain.addEventListener("click", resetGame);

  elements.forEach((element) => element.removeEventListener("click", playRound));
}

function resetGame() {
  rounds = 0;
  playerLives = 5;
  computerLives = 5;

  roundCounter.textContent = `Round:${rounds}`;
  LivesCounter.textContent = `Player Lives: ${playerLives}. Enemy Lives: ${computerLives}.`;
  gameAnnouncer.textContent = "Combat Area: Empty";
  playAgain.textContent = "";
  playAgain.classList.remove("play-again");
  playAgain.removeEventListener("click", resetGame);

  elements.forEach((element) => element.addEventListener("click", playRound));
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
