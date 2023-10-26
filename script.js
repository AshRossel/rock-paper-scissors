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


function game() {

  // Create tracking variables
  let roundsPlayed = 0;
  let playerPoints = 0;
  let computerPoints = 0;

  while (roundsPlayed < 5) {

    // Get player and computer's selections
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Rock, Paper or Scissors");
    let result = playRound(playerSelection, computerSelection);

    // Update score based on the result
    if (result.startsWith("You win!")) {
        playerPoints++;
    } else if (result.startsWith("You lose!")) {
        computerPoints++;
    }
    
    // Update rounds played, excluding draws
    if (!result.startsWith("You draw!")) {
        roundsPlayed++;
    }

    // Display the result of the current round
    console.log(result);
  }

  // Determine and display the game's overall winner
  if (playerPoints > computerPoints) {
    console.log("You win the game!")
  } else {
    console.log("You lose the game!");
  }
}

game();