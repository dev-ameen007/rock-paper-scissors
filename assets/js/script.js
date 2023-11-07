// Shortcut to console.log(), simply use cl()
function cl(content) {
  console.log(content);
}

const choices = ['rock', 'paper', 'scissor'];

// Gets a random choice for the computer player from the 'choices' array
function getComputerChoice() {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

// Prompts the user for their choice and validates it against the 'choices' array
function getPlayerChoice() {

  let playerChoice;
  let notFirstPrompt = false;

  do {
    if(notFirstPrompt) alert(`Invalid input '${playerChoice}'.\nPlease enter any of the following 'Rock', 'Paper', or 'Scissor'.`);

    playerChoice = prompt(`Rock, paper, or scissor. What's your choice?`);

    if(playerChoice === null) {
      alert('Game cancelled!');
      return playerChoice;
    }

    playerChoice = playerChoice.toLowerCase();
    notFirstPrompt = true;
  } while(!choices.includes(playerChoice));

  return playerChoice;
}

function playRound(playerSelection, computerSelection) {
  let winner=''; 
  let message=``;

  switch(true) {
    // Case where user cancel the prompt
    case playerSelection === null:
      winner = null;
      break;
    // Case where both players made the same choice
    case playerSelection === computerSelection:
      message = `Whoooo!! Both choose ${computerSelection}, It's a tie!!`;
      break;
    // Cases where the computer wins  
    case playerSelection === 'rock' && computerSelection === 'paper' || 
         playerSelection === 'scissor' && computerSelection === 'rock' || 
         playerSelection === 'paper' && computerSelection === 'scissor':
      winner = 'computer';
      message = `Oops!! You Lose! ${computerSelection} beats ${playerSelection}.`;
      break;
    // Default case where the player wins
    default: 
      winner = 'player';
      message = `Hooray!! You Won! ${playerSelection} beats ${computerSelection}.`      
  }

  return [winner, message];
}

const MAX_GAME_ROUNDS=5;

function game() {
  try {
    let gameRound=1;
    let computerScore=0;
    let playerScore=0;
  
    // Game loop that runs for MAX_GAME_ROUNDS, updates scores based on the winner of each round, and logs the result of each round
    while(gameRound <= MAX_GAME_ROUNDS) {
  
      const playerChoice = getPlayerChoice();
      const computerChoice = getComputerChoice();
  
      const result = playRound(playerChoice, computerChoice);
      const winner = result[0];
      const message = result[1];
  
      // If player cancel the prompt, log a message and exit the game
      if(winner === null) return 'Game Cancelled!';
  
      // updates scores based on the winner of each round, and logs the result of each round
      if(winner==='computer') computerScore++;
      if(winner==='player') playerScore++;
  
      console.log(message);
  
      gameRound++;
    }
  
    // Determine the game winner based on the scores
    const winnerAnnouncement = 
      playerScore === computerScore ? `What a match, It's a tie!!! Try Again!!` :
      playerScore > computerScore ? `Congrats!! You won the GAME!!!` :
      `Oopsy, Computer won the game, better luck next time!!`;
  
    return `Game Over \n\nComputer Score: ${computerScore} \nPlayer Score: ${playerScore} \n\n${winnerAnnouncement}`;
  } catch(error) {
    console.error('An unexpected error occurred:', error);
  }
}

cl(game());