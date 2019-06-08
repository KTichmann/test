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
    handleDraw(playerACardArr, playerBCardArr);
  }
};

const handleDraw = (cardArrOne, cardArrTwo) => {
  const sortedValueArrOne = cardArrOne.sort((a, b) => {
    const valOne = a.substring(0, a.length - 1);
    const valTwo = a.substring(0, a.length - 1);
    //if the card is a face card
    if (Number.isNaN(Number(valOne)) && Number.isNaN(Number(valTwo))) {
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
    } else if (Number.isNaN(Number(valOne) && !Number.isNaN(Number(valTwo)))) {
      return -1;
    } else if (!Number.isNaN(Number(valOne) && Number.isNaN(Number(valTwo)))) {
      return 1;
    } else {
      Number(valOne) > Number(valTwo) ? -1 : 1;
    }
  });

  console.log(sortedValueArrOne);

  function compareFaceCards(cardOne, cardTwo, value) {
    const valOne = cardOne.substring(0, cardOne.length - 1);
    const valTwo = cardTwo.substring(0, cardOne.length - 1);
    console.log(valOne);
    if (valOne === value && valTwo === value) {
      return compareBySuits(a, b) === "a" ? -1 : 1;
    } else if (valTwo === value || valOne === value) {
      return valOne === value ? -1 : 1;
    } else {
      return compareBySuits(cardOne, cardTwo);
    }
  }

  //   const sortedValueArrTwo = cardArrOne.map(card.substring(0, card.length - 1));
  const helperFunction = (valueArrOne, valueArrTwo) => {};
};

const compareBySuits = (cardOne, cardTwo) => {
  //Compare by suits
};

//Draw scenario:
// 5S 6S
// 5, 6
// 5, 3, 3
// QD JD
// K Q J 10
// 11
// 5D 3C 3S

//take items in array --> sort by value
//compare --> take into account first number/score
// if number is the same --> go by suit
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
  playerA: ["10S", "KS", "JC", "AH"],
  playerAWins: false,
  playerB: ["10S", "JC", "AS", "QH"]
});

console.log(a);
