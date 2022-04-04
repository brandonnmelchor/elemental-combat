const roundCounter = document.querySelector("#round-counter");
const playerLivesCounter = document.querySelector("#player-lives");
const computerLivesCounter = document.querySelector("#computer-lives");
const gameAnnouncer = document.querySelector("#game-announcer");
const gameEndMessage = document.querySelector("#game-end-message");
const playAgain = document.querySelector("#play-again");

let rounds = 0;
let playerLives = 5;
let computerLives = 5;

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
    computerLives--;
    return `You lose! ${capitalize(computerElement)} beats ${capitalize(playerElement)}.`;
  } else {
    playerLives--;
    return `You win! ${capitalize(playerElement)} beats ${capitalize(computerElement)}.`;
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const elements = document.querySelectorAll(".player-area .element");
elements.forEach((element) => element.addEventListener("click", playRound));

function playRound() {
  const computerElement = computerPlay();
  const playerElement = this.attributes["id"].nodeValue;
  const playerSelected = document.querySelector(`.element[id="${this.attributes["id"].nodeValue}"]`);

  gameAnnouncer.textContent = checkRoundWinner(playerElement, computerElement);
  roundCounter.textContent = `Round:${++rounds}`;
  playerLivesCounter.textContent = `Player Lives: ${playerLives}`;
  computerLivesCounter.textContent = `Player Lives: ${computerLives}`;

  if (playerLives === 0 || computerLives === 0) {
    checkGameWinner();
  }
}

function checkGameWinner() {
  if (playerLives === 0) {
    gameEndMessage.textContent = "You lost this battle!";
  } else {
    gameEndMessage.textContent = "You won this battle!";
  }

  elements.forEach((element) => element.removeEventListener("click", playRound));
  playAgain.classList.add("play-again");
  playAgain.textContent = "Play again?";
  playAgain.addEventListener("click", resetGame);
}

function resetGame() {
  rounds = 0;
  playerLives = 5;
  computerLives = 5;
  roundCounter.textContent = `Round:${rounds}`;
  playerLivesCounter.textContent = `Player Lives: ${playerLives}`;
  computerLivesCounter.textContent = `Player Lives: ${computerLives}`;

  elements.forEach((element) => element.addEventListener("click", playRound));
}
