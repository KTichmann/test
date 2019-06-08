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
};

const sumCardArrScore = cardArr => {
  cardArr.reduce((acc, card = 0) => (acc += getCardScore(card)));
};

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

findBlackjackWinner({
  playerA: ["10D", "JH"],
  playerAWins: true,
  playerB: ["QS", "4C", "JC"]
});
