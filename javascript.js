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
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      return "You Lose! Paper beats Rock.";
    } else {
      playerScore++;
      return "You Win! Rock beats Scissors.";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      return "You Lose! Scissors beats Paper.";
    } else {
      playerScore++;
      return "You Win! Paper beats Rock.";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return "You Lose! Rock beats Scissors.";
    } else {
      playerScore++;
      return "You Win! Scissors beats Paper.";
    }
  } else {
    return playRound(prompt("Choose again! Rock, paper, or scissors?"), computerSelection);
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Let's play a game! Rock, paper, or scissors?").toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore > computerScore) {
    console.log("You won out of 5 games!");
  } else {
    console.log("You lost out of 5 games!");
  }

  console.log(`Player score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
}

game();
