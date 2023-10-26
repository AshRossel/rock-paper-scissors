function getComputerChoice() {
  // Get a random number between 0 and 2
  let randomChoice = Math.floor(Math.random() * 3);

  // Determine the computer's choice in the game
  switch(randomChoice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  // Convert string selections to title case
  playerSelection = playerSelection.toLowerCase();
  playerSelection = playerSelection.replace(playerSelection.charAt(0), 
  playerSelection.charAt(0).toUpperCase());

  computerSelection = computerSelection.toLowerCase();
  computerSelection = computerSelection.replace(computerSelection.charAt(0), 
  computerSelection.charAt(0).toUpperCase());

  // Create the result round messages
  let winMessage = `You win! ${playerSelection} beats ${computerSelection}`;
  let loseMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
  let drawMessage = "You draw! Both choices are equal";

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