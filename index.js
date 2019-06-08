const testArr = require("./test.js");

const findBlackjackWinner = playerObj => {
  const playerACardArr = playerObj.playerA;
  const playerBCardArr = playerObj.playerB;
  const playerAScore = playerACardArr
    .map(card => getCardScore(card))
    .reduce((acc, current) => acc + current);

  const playerBScore = playerBCardArr
    .map(card => getCardScore(card))
    .reduce((acc, current) => acc + current);

  const result = compareScores(playerAScore, playerBScore);

  if (result === 1) {
    return "Player A Wins";
  } else if (result === 2) {
    return "Player B Wins";
  } else {
    return handleDraw(playerACardArr, playerBCardArr) === 1
      ? "Player A Wins"
      : "Player B Wins";
  }
};

const handleDraw = (cardArrOne, cardArrTwo) => {
  const sortedValueArrOne = cardArrOne.sort(sortTwoCards);
  const sortedValueArrTwo = cardArrTwo.sort(sortTwoCards);
  function findWinner(arrOne, arrTwo) {
    if (arrOne.length === 0 || arrTwo.length === 0) {
      return 0;
    }
    const result = sortTwoCards(arrOne[0], arrTwo[0]);
    if (result === 0) {
      findWinner(arrOne.shift(), arrTwo.shift());
    } else {
      return result;
    }
  }
  return findWinner(sortedValueArrOne, sortedValueArrTwo);
};

function sortTwoCards(a, b) {
  const valOne = a.substring(0, a.length - 1);
  const valTwo = b.substring(0, b.length - 1);
  const faceCardValues = ["A", "K", "Q", "J"];
  //if the card is a face card
  if (
    faceCardValues.indexOf(valOne) > -1 &&
    faceCardValues.indexOf(valTwo) > -1
  ) {
    //change to handle face cards with compareSuit
    if (compareFaceCards(a, b, "A") === 0) {
      if (compareFaceCards(a, b, "K") === 0) {
        if (compareFaceCards(a, b, "Q") === 0) {
          return compareFaceCards(a, b, "J");
        } else {
          return compareFaceCards(a, b, "Q");
        }
      } else {
        return compareFaceCards(a, b, "K");
      }
    } else {
      return compareFaceCards(a, b, "A");
    }
  } else if (
    faceCardValues.indexOf(valOne) > -1 &&
    !(faceCardValues.indexOf(valTwo) > -1)
  ) {
    return -1;
  } else if (
    !(faceCardValues.indexOf(valOne) > -1) &&
    faceCardValues.indexOf(valTwo) > -1
  ) {
    return 1;
  } else if (Number(valOne) === Number(valTwo)) {
    return compareBySuits(a, b);
  } else {
    return Number(valOne) > Number(valTwo) ? -1 : 1;
  }
}

function compareFaceCards(cardOne, cardTwo, value) {
  const valOne = cardOne.substring(0, cardOne.length - 1);
  const valTwo = cardTwo.substring(0, cardOne.length - 1);
  if (valOne === value && valTwo === value) {
    return compareBySuits(cardOne, cardTwo);
  } else if (valTwo === value || valOne === value) {
    return valOne === value ? -1 : 1;
  } else {
    return 0;
  }
}

const compareBySuits = (cardOne, cardTwo) => {
  const suitOne = cardOne[cardOne.length - 1];
  const suitTwo = cardTwo[cardTwo.length - 1];
  const suitValArr = ["S", "H", "C", "D"];
  const suitOneVal = suitValArr.indexOf(suitOne);
  const suitTwoVal = suitValArr.indexOf(suitTwo);
  if (suitOneVal === suitTwoVal) {
    return 0;
  } else {
    return suitOneVal < suitTwoVal ? 1 : -1;
  }
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

testArr.map(obj => {
  const result = findBlackjackWinner(obj);
  console.log("Result: ", findBlackjackWinner(obj));
  if (obj.playerAWins && findBlackjackWinner(obj).includes("Player A")) {
    console.log("Correct Answer: ", true);
  } else if (
    !obj.playerAWins &&
    findBlackjackWinner(obj).includes("Player B")
  ) {
    console.log("Correct Answer: ", true);
  } else {
    console.log("Correct Answer: ", false);
    console.log(console.log(JSON.stringify(obj, null, 2)));
  }
  console.log("--------------------------");
});
