function cl(content) {
  console.log(content);
}

const choices = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}