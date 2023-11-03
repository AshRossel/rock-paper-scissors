function playRound(playerSelection, computerSelection) {
  // Create the result round messages
  let winMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
  let loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
  let drawMessage = "You Draw! Both choices are equal";

  // Determine who wins the round
  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return winMessage;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return winMessage;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return winMessage;
  } else if (playerSelection === computerSelection) {
    return drawMessage;
  } else {
    return loseMessage;
  }
}

function getComputerChoice() {
  // Get a random number between 0 and 2
  let randomChoice = Math.floor(Math.random() * 3);

  // Determine the computer's choice in the game
  switch (randomChoice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function buttonStart(buttonEvent) {
  // Get player and computer's selections
  let computerSelection = getComputerChoice();
  let playerSelection = buttonEvent.target.textContent;
  let result = playRound(playerSelection, computerSelection);

  // Update score based on the result
  if (result.startsWith("You Win!")) {
    playerScore.textContent = ++playerPoints;
  } else if (result.startsWith("You Lose!")) {
    computerScore.textContent = ++computerPoints;
  }

  // Display round result
  roundResult.textContent = result;

  // Determine and display the game's overall winner
  if (playerPoints == 5) {
    finalResult.textContent = "You win the game!";
    endGame();
  } else if (computerPoints == 5) {
    finalResult.textContent = "You lose the game!";
    endGame();
  }
}

// Block the buttons when the game is finished
function endGame() {
  const selectionButtons = document.querySelectorAll("button");
  selectionButtons.forEach((button) => {
    button.removeEventListener("click", buttonStart);
  });
}

// Make the buttons able to start rounds
function startGame() {
  const selectionButtons = document.querySelectorAll("button");
  selectionButtons.forEach((button) => {
    button.addEventListener("click", buttonStart);
  });
}

// Track scores
let playerPoints = 0;
let computerPoints = 0;

// Get game information
const roundResult = document.querySelector("#round-result");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const finalResult = document.querySelector("#final-result");

startGame();
