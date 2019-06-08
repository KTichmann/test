const findBlackjackWinner = playerObj => {
  const playerACardArr = playerObj.playerA;
  const playerBCardArr = playerObj.playerB;
  const playerAScore = playerACardArr
    .map(card => getCardScore(card))
    .reduce((acc, current) => acc + current);

  const playerBScore = playerBCardArr
    .map(card => getCardScore(card))
    .reduce((acc, current) => acc + current);
  console.log(playerAScore, playerBScore);
  return compareScores(playerAScore, playerBScore);
};

//Takes card of type "10D" and returns its score
const getCardScore = card => {
  let num;
  let cardValue = card.substring(0, card.length - 1);
  if (["J", "Q", "K"].indexOf(cardValue) !== -1) {
    num = 10;
  } else if (cardValue === "A") {
    num = 11;
  } else {
    num = parseInt(cardValue);
  }
  return num;
};

//returns 0 if a draw, 1 if player one wins, 2 if player 2 wins
const compareScores = (scoreOne, scoreTwo) => {
  if (scoreOne > 21 && scoreTwo > 21) {
    return 0;
  } else if (scoreOne > 21) {
    return 2;
  } else if (scoreTwo > 21) {
    return 1;
  } else if (scoreOne > scoreTwo) {
    return 1;
  } else if (scoreTwo > scoreOne) {
    return 2;
  } else {
    return 0;
  }
};

let a = findBlackjackWinner({
  playerA: ["10S", "JC"],
  playerAWins: false,
  playerB: ["JH", "QS"]
});

console.log(a);
