let rounds = 0;
let playerLives = 5;
let computerLives = 5;

const playerArea = document.querySelector(".player-area");
const computerArea = document.querySelector(".computer-area");
const roundCounter = document.querySelector("#rounds");
const LivesCounter = document.querySelector("#lives");
const gameAnnouncer = document.querySelector("#game-announcer");
const playAgain = document.querySelector(".play-again");
const backtoMenu = document.querySelector(".back-to-menu");

const computerElements = document.querySelectorAll(".computer-area .element");
const elements = document.querySelectorAll(".player-area .element");
elements.forEach((element) => element.addEventListener("click", playRound));

function playRound() {
  const playerElement = this.attributes["id"].nodeValue;
  const computerElement = computerPlay();

  const playerSelected = document.querySelector(`.element[id="${this.attributes["id"].nodeValue}"]`);
  const computerSelected = document.querySelector(`.element[id="computer-${computerElement}"]`);
  addElementColor(playerSelected, computerSelected, computerElement);

  gameAnnouncer.innerHTML = checkRoundWinner(playerElement, computerElement);
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

function addElementColor(playerSelected, computerSelected, computerElement) {
  removeElementColors();
  playerSelected.classList.add(`${playerSelected.attributes["id"].nodeValue}`, "selected");
  computerSelected.classList.add(`${computerElement}`, "selected");
}

function removeElementColors() {
  elements.forEach((element) => element.classList.remove("fire", "nature", "water"));
  computerElements.forEach((element) => element.classList.remove("fire", "nature", "water"));
}

function checkRoundWinner(playerElement, computerElement) {
  if (playerElement === computerElement) {
    playerArea.style.borderColor = "#4095bf";
    computerArea.style.borderColor = "#4095bf";
    return `<span style="color: #4095bf;">Draw!</span> Your mastery of ${computerElement} matches your enemy's.`;
  } else if (
    (playerElement === "fire" && computerElement === "nature") ||
    (playerElement === "nature" && computerElement === "water") ||
    (playerElement === "water" && computerElement === "fire")
  ) {
    playerLives--;
    playerArea.style.borderColor = "#F8A488";
    computerArea.style.borderColor = "#5AA897";
    return `<span style="color: #F8A488;">Defeated!</span> The enemy's imposing command of ${computerElement} overwhelms you.`;
  } else {
    computerLives--;
    playerArea.style.borderColor = "#5AA897";
    computerArea.style.borderColor = "#F8A488";
    return `<span style="color: #5AA897;">Overpowering!</span> Your profound control of ${playerElement} dealt damage to the enemy.`;
  }
}

function checkGameWinner() {
  if (playerLives === 0) {
    gameAnnouncer.innerHTML = `You <span style="color: #F8A488;">lost</span> this battle!`;
  } else {
    gameAnnouncer.innerHTML = `You <span style="color: #5AA897;">won</span> this battle!`;
  }

  playAgain.style.color = "black";
  playAgain.classList.add("play-again-hover");
  playAgain.addEventListener("click", resetGame);
  backtoMenu.style.color = "black";
  backtoMenu.addEventListener("click", resetGame);

  elements.forEach((element) => element.removeEventListener("click", playRound));
}

function resetGame() {
  rounds = 0;
  playerLives = 5;
  computerLives = 5;

  playerArea.style.borderColor = "#536878";
  computerArea.style.borderColor = "#536878";
  roundCounter.textContent = `Round:${rounds}`;
  LivesCounter.textContent = `Player Lives: ${playerLives}. Enemy Lives: ${computerLives}.`;
  gameAnnouncer.textContent = "Your enemy stands before you. Do you choose to fight?";

  playAgain.style.color = "transparent";
  playAgain.classList.remove("play-again-hover");
  playAgain.removeEventListener("click", resetGame);
  backtoMenu.style.color = "transparent";
  backtoMenu.removeEventListener("click", resetGame);

  removeElementColors();

  elements.forEach((element) => element.addEventListener("click", playRound));
}
