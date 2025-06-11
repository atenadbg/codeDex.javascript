// 0 = Rock, 1 = Paper, 2 = Scissors
const player = 1;
const computer = Math.floor(Math.random() * 3);

if (player === 0) {
  console.log("player picked: Rock");
} else if (player === 1) {
  console.log("player picked: Paper");
} else {
  console.log("player picked: Scissors");
}

if (computer === 0) {
  console.log("computer picked: Rock");
} else if (computer === 1) {
  console.log("computer picked: Paper");
} else {
  console.log("computer picked: Scissors");
}

if (player === computer) {
  console.log("It's a tie!");
} else if (
  (player === 0 && computer === 2) ||
  (player === 1 && computer === 0) ||
  (player === 2 && computer === 1)
) {
  console.log("The player won!");
} else {
  console.log("The computer won!");
}
