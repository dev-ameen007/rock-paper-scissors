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

  if(validChoice) {
    return [true, playerChoice];
  }

  return [false, playerChoice];
}