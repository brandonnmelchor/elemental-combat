let rounds = 0;
let playerLives = 5;
let computerLives = 5;

const playerArea = document.querySelector(".player-area");
const playerIcon = document.querySelector(".player-icon");
const computerArea = document.querySelector(".computer-area");
const computerIcon = document.querySelector(".computer-icon");
const roundCounter = document.querySelector("#rounds");
const LivesCounter = document.querySelector("#lives");
const gameAnnouncer = document.querySelector("#game-announcer");
const playAgain = document.querySelector("#play-again");

const computerElements = document.querySelectorAll(".computer-area .element");
const elements = document.querySelectorAll(".player-area .element");
elements.forEach((element) => element.addEventListener("click", playRound));

function playRound() {
  const playerElement = this.attributes["id"].nodeValue;
  const computerElement = computerPlay();

  const playerSelected = document.querySelector(`.element[id="${this.attributes["id"].nodeValue}"]`);
  const computerSelected = document.querySelector(`.element[id="computer-${computerElement}"]`);
  highlightElements(playerSelected, computerSelected, computerElement);

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

function highlightElements(playerSelected, computerSelected, computerElement) {
  elements.forEach((element) => element.classList.remove("fire", "nature", "water"));
  computerElements.forEach((element) => element.classList.remove("fire", "nature", "water"));

  playerSelected.classList.add(`${playerSelected.attributes["id"].nodeValue}`, "selected");
  computerSelected.classList.add(`${computerElement}`, "selected");
}

function checkRoundWinner(playerElement, computerElement) {
  if (playerElement === computerElement) {
    playerArea.style.borderColor = "#4095bf";
    playerIcon.style.color = "#4095bf";
    computerArea.style.borderColor = "#4095bf";
    computerIcon.style.color = "#4095bf";
    return `Draw! Your mastery of ${computerElement} matches your enemy's.`;
  } else if (
    (playerElement === "fire" && computerElement === "nature") ||
    (playerElement === "nature" && computerElement === "water") ||
    (playerElement === "water" && computerElement === "fire")
  ) {
    playerLives--;
    playerArea.style.borderColor = "#F8A488";
    playerIcon.style.color = "#F8A488";
    computerArea.style.borderColor = "#5AA897";
    computerIcon.style.color = "#5AA897";
    return `Defeated! The enemy's imposing command of ${computerElement} overwhelms you.`;
  } else {
    computerLives--;
    playerArea.style.borderColor = "#5AA897";
    playerIcon.style.color = "#5AA897";
    computerArea.style.borderColor = "#F8A488";
    computerIcon.style.color = "#F8A488";
    return `Overpowering! Your profound control of ${playerElement} dealt damage to the enemy.`;
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
  gameAnnouncer.textContent = "Your enemy stands before you. Do you choose to fight?";
  playAgain.textContent = "";
  playAgain.classList.remove("play-again");
  playAgain.removeEventListener("click", resetGame);

  elements.forEach((element) => element.addEventListener("click", playRound));
  elements.forEach((element) => element.classList.remove("fire", "nature", "water"));
  computerElements.forEach((element) => element.classList.remove("fire", "nature", "water"));
}
