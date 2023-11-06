function cl(content) {
  console.log(content);
}

const choices = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function getPlayerChoice() {

  let playerChoice = prompt(`Rock, paper, or scissor. What's your choice?`);

  playerChoice = playerChoice.toLowerCase();
  
  let validChoice = choices.indexOf(playerChoice)>-1 ? true : false;

  if(validChoice) return [true, playerChoice];

  return [false, playerChoice];
}

function playRound(playerSelectionDetailsArray, computerSelection) {
  let winner; 
  let message=``;

  const playerSelectionInvalid = playerSelectionDetailsArray[0]==false ? true : false;
  const playerSelection = playerSelectionDetailsArray[1];

  if(playerSelectionInvalid) {
    winner = '';
    message = `Invalid input '${playerSelection}'. Please enter any of the following 'Rock', 'Paper', or 'Scissor'.`;
    return [winner, message];
  }

  if(playerSelection===computerSelection) {
    winner = 'draw';
    message = `Whoooo!! Both choose ${computerSelection}, It's a tie!!`;
    return [winner, message];
  }

  if(
    playerSelection == 'rock' && computerSelection == 'paper' || 
    playerSelection == 'scissor' && computerSelection == 'rock' || 
    playerSelection == 'paper' && computerSelection == 'scissor'
    ) {
      winner = 'computer';
      message = `Oops!! You Lose! ${computerSelection} beats ${playerSelection}.`
      return [winner, message];
  } else {
    winner = 'player';
    message = `Hooray!! You Won! ${playerSelection} beats ${computerSelection}.`
    return [winner, message];
  }
}