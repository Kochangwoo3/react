const HANDS = ['rock', 'scissor', 'paper'];

const WINS = {
  rock: 'scissor',
  scissor: 'paper',
  paper: 'rock',
}

export function compareHand(me, other) {
  if(WINS[me] === other) return 1;
  else if (WINS[other] === me) return -1;
  return 0;
}

function random(n) {
  return Math.floor(Math.random() * n);  // 0, 1, 2
}

export function generateRandomHand() {
  const idx = random(HANDS.length);
  return HANDS[idx];   //random 0, 1, 2
}