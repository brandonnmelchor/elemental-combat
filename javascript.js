const roundCounter = document.querySelector("#round-counter");
const playerLivesCounter = document.querySelector("#player-lives");
const computerLivesCounter = document.querySelector("#computer-lives");
const gameAnnouncer = document.querySelector("#game-announcer");
const gameEndMessage = document.querySelector("#game-end-message");

let playerLives = 5;
let computerLives = 5;

function computerPlay() {
  const randomThree = Math.floor(Math.random() * 3) + 1;

  if (randomThree === 1) return "fire";
  else if (randomThree === 2) return "nature";
  else return "water";
}

function checkWinner(playerElement, computerElement) {
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

  gameAnnouncer.textContent = checkWinner(playerElement, computerElement);
  playerLivesCounter.textContent = `Player Lives: ${playerLives}`;
  computerLivesCounter.textContent = `Player Lives: ${computerLives}`;

  if (playerLives === 0) {
    gameEndMessage.textContent = "You lost this battle!";
    elements.forEach((element) => element.removeEventListener("click", playRound));
    return;
  } else if (computerLives === 0) {
    gameEndMessage.textContent = "You won this battle!";
    elements.forEach((element) => element.removeEventListener("click", playRound));
    return;
  }
}
