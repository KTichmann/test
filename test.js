const testArr = [
  {
    playerA: ["8D", "JS"],
    playerAWins: false,
    playerB: ["5D", "QS", "3H"]
  },
  {
    playerA: ["10D", "JH"],
    playerAWins: true,
    playerB: ["QS", "4C", "JC"]
  },
  {
    playerA: ["JH", "KS", "3C"],
    playerAWins: false,
    playerB: ["JC", "QS"]
  },
  {
    playerA: ["10D", "KS"],
    playerAWins: true,
    playerB: ["JH", "JC", "QS"]
  },
  {
    playerA: ["QS", "4C", "2D", "3C"],
    playerAWins: true,
    playerB: ["KS", "10D", "JC"]
  },
  {
    playerA: ["QS", "3C"],
    playerAWins: true,
    playerB: ["4C", "KS", "JH"]
  },
  {
    playerA: ["3C", "QS"],
    playerAWins: true,
    playerB: ["JC", "JH", "10D"]
  },
  {
    playerA: ["2D", "10D"],
    playerAWins: false,
    playerB: ["JH", "4C"]
  },
  {
    playerA: ["JH", "QS", "4C"],
    playerAWins: false,
    playerB: ["10D", "JC"]
  },
  {
    playerA: ["KS", "3C", "JC"],
    playerAWins: false,
    playerB: ["4C", "2D", "QS"]
  },
  {
    playerA: ["2D", "4C", "JH", "QS"],
    playerAWins: false,
    playerB: ["3C", "10D"]
  },
  {
    playerA: ["KS", "JC", "4C"],
    playerAWins: false,
    playerB: ["JH", "QS"]
  },
  {
    playerA: ["10D", "2D"],
    playerAWins: true,
    playerB: ["JH", "QS", "4C"]
  },
  {
    playerA: ["2D", "10D"],
    playerAWins: true,
    playerB: ["3C", "QS", "4C", "KS"]
  },
  {
    playerA: ["10D", "JC", "KS"],
    playerAWins: false,
    playerB: ["4C", "3C"]
  },
  {
    playerA: ["10D", "QS", "2D"],
    playerAWins: false,
    playerB: ["JC", "KS"]
  },
  {
    playerA: ["JC", "10D"],
    playerAWins: true,
    playerB: ["3C", "JH", "2D"]
  },
  {
    playerA: ["KS", "JC", "QS"],
    playerAWins: false,
    playerB: ["3C", "10D"]
  },
  {
    playerA: ["3C", "2D", "KS"],
    playerAWins: false,
    playerB: ["10D", "JH"]
  },
  {
    playerA: ["4C", "3C", "JH"],
    playerAWins: true,
    playerB: ["JC", "2D", "KS"]
  },
  {
    playerA: ["4C", "JH"],
    playerAWins: true,
    playerB: ["3C", "KS"]
  },
  {
    playerA: ["JC", "3C", "QS"],
    playerAWins: false,
    playerB: ["4C", "KS"]
  },
  {
    playerA: ["10D", "JH", "4C"],
    playerAWins: false,
    playerB: ["3C", "QS", "2D"]
  },
  {
    playerA: ["QS", "2D", "3C"],
    playerAWins: true,
    playerB: ["10D", "JH", "KS"]
  },
  {
    playerA: ["JC", "KS", "QS"],
    playerAWins: false,
    playerB: ["JH", "10D"]
  },
  {
    playerA: ["QS", "4C", "JC"],
    playerAWins: false,
    playerB: ["KS", "JH"]
  },
  {
    playerA: ["KS", "3C", "2D", "QS"],
    playerAWins: false,
    playerB: ["4C", "10D"]
  },
  {
    playerA: ["KS", "4C", "QS"],
    playerAWins: false,
    playerB: ["JC", "10D"]
  },
  {
    playerA: ["QS", "JH", "2D"],
    playerAWins: false,
    playerB: ["4C", "JC"]
  },
  {
    playerA: ["2D", "QS", "10D"],
    playerAWins: false,
    playerB: ["JH", "KS"]
  },
  {
    playerA: ["4C", "3C", "JC", "QS"],
    playerAWins: false,
    playerB: ["10D", "2D"]
  },
  {
    playerA: ["KS", "10D"],
    playerAWins: true,
    playerB: ["QS", "JC", "JH"]
  },
  {
    playerA: ["3C", "2D", "JH"],
    playerAWins: true,
    playerB: ["10D", "JC", "QS"]
  },
  {
    playerA: ["KS", "JH", "3C"],
    playerAWins: false,
    playerB: ["10D", "2D", "4C"]
  },
  {
    playerA: ["QS", "JH"],
    playerAWins: true,
    playerB: ["3C", "KS"]
  },
  {
    playerA: ["KS", "QS"],
    playerAWins: true,
    playerB: ["JH", "2D", "10D"]
  },
  {
    playerA: ["8C", "7C", "3C", "2C"],
    playerAWins: false,
    playerB: ["8H", "7H", "5H"]
  },
  {
    playerA: ["QS", "JH", "10D"],
    playerAWins: false,
    playerB: ["JC", "3C"]
  },
  {
    playerA: ["KS", "QS", "2D"],
    playerAWins: false,
    playerB: ["JC", "3C"]
  },
  {
    playerA: ["KS", "QS", "3C"],
    playerAWins: false,
    playerB: ["JH", "4C"]
  },
  {
    playerA: ["10D", "4C", "2D", "KS"],
    playerAWins: false,
    playerB: ["QS", "JH"]
  },
  {
    playerA: ["4C", "3C", "QS"],
    playerAWins: true,
    playerB: ["JH", "JC", "2D"]
  },
  {
    playerA: ["KS", "10D", "JC"],
    playerAWins: false,
    playerB: ["JH", "2D"]
  },
  {
    playerA: ["3C", "QS", "JH"],
    playerAWins: false,
    playerB: ["10D", "2D"]
  },
  {
    playerA: ["KS", "JC", "10D"],
    playerAWins: false,
    playerB: ["JH", "3C"]
  },
  {
    playerA: ["3C", "2D"],
    playerAWins: false,
    playerB: ["10D", "4C"]
  },
  {
    playerA: ["10D", "JH", "3C"],
    playerAWins: false,
    playerB: ["QS", "4C"]
  },
  {
    playerA: ["KS", "3C", "4C"],
    playerAWins: true,
    playerB: ["JH", "QS", "10D"]
  },
  {
    playerA: ["JC", "2D"],
    playerAWins: true,
    playerB: ["4C", "JH", "3C", "QS"]
  },
  {
    playerA: ["4C", "QS", "KS"],
    playerAWins: false,
    playerB: ["JH", "3C"]
  },
  {
    playerA: ["10D", "KS", "QS"],
    playerAWins: false,
    playerB: ["2D", "JH", "4C"]
  },
  {
    playerA: ["KS", "JC", "3C"],
    playerAWins: false,
    playerB: ["10D", "QS"]
  },
  {
    playerA: ["2D", "10D"],
    playerAWins: false,
    playerB: ["3C", "JH"]
  },
  {
    playerA: ["QS", "JH", "KS"],
    playerAWins: false,
    playerB: ["3C", "2D"]
  },
  {
    playerA: ["4C", "2D"],
    playerAWins: false,
    playerB: ["QS", "KS"]
  },
  {
    playerA: ["QS", "2D", "JH"],
    playerAWins: false,
    playerB: ["JC", "KS"]
  },
  {
    playerA: ["3C", "4C", "JC", "10D"],
    playerAWins: false,
    playerB: ["JH", "2D"]
  },
  {
    playerA: ["4C", "KS"],
    playerAWins: false,
    playerB: ["QS", "JH"]
  },
  {
    playerA: ["3C", "10D"],
    playerAWins: false,
    playerB: ["JH", "KS"]
  },
  {
    playerA: ["10D", "JC"],
    playerAWins: true,
    playerB: ["3C", "KS", "2D"]
  },
  {
    playerA: ["QS", "JH", "4C"],
    playerAWins: false,
    playerB: ["JC", "10D"]
  },
  {
    playerA: ["3C", "10D", "JC"],
    playerAWins: false,
    playerB: ["4C", "JH", "2D"]
  },
  {
    playerA: ["2D", "QS"],
    playerAWins: true,
    playerB: ["JH", "3C", "4C", "10D"]
  },
  {
    playerA: ["JH", "JC"],
    playerAWins: false,
    playerB: ["10D", "KS"]
  },
  {
    playerA: ["QS", "KS"],
    playerAWins: true,
    playerB: ["2D", "JH", "10D"]
  },
  {
    playerA: ["AC", "AH"],
    playerAWins: false,
    playerB: ["10H", "10C"]
  },
  {
    playerA: ["QS", "10D", "4C"],
    playerAWins: false,
    playerB: ["JH", "2D", "3C"]
  },
  {
    playerA: ["KS", "JH"],
    playerAWins: true,
    playerB: ["4C", "3C", "QS", "2D"]
  },
  {
    playerA: ["KS", "10D", "QS"],
    playerAWins: false,
    playerB: ["JH", "2D", "3C", "4C"]
  },
  {
    playerA: ["KS", "JC"],
    playerAWins: true,
    playerB: ["10D", "QS", "2D"]
  },
  {
    playerA: ["JH", "QS", "3C"],
    playerAWins: false,
    playerB: ["2D", "KS"]
  },
  {
    playerA: ["2D", "JC", "KS"],
    playerAWins: false,
    playerB: ["10D", "4C"]
  },
  {
    playerA: ["JC", "10D", "4C"],
    playerAWins: false,
    playerB: ["JH", "KS"]
  },
  {
    playerA: ["KS", "JC", "10D"],
    playerAWins: false,
    playerB: ["3C", "4C", "2D"]
  },
  {
    playerA: ["JH", "4C", "KS"],
    playerAWins: false,
    playerB: ["JC", "2D"]
  },
  {
    playerA: ["JC", "JH", "QS"],
    playerAWins: false,
    playerB: ["10D", "4C", "2D"]
  },
  {
    playerA: ["JC", "JH"],
    playerAWins: true,
    playerB: ["QS", "4C"]
  },
  {
    playerA: ["10D", "KS"],
    playerAWins: true,
    playerB: ["QS", "2D", "3C", "JC"]
  },
  {
    playerA: ["3C", "JC", "10D"],
    playerAWins: false,
    playerB: ["QS", "JH"]
  },
  {
    playerA: ["AC", "KH"],
    playerAWins: true,
    playerB: ["9H", "5S", "7C"]
  },
  {
    playerA: ["JH", "4C", "JC"],
    playerAWins: false,
    playerB: ["10D", "KS"]
  },
  {
    playerA: ["10D", "4C", "2D", "3C"],
    playerAWins: true,
    playerB: ["JH", "JC", "QS"]
  },
  {
    playerA: ["4C", "KS"],
    playerAWins: true,
    playerB: ["10D", "2D"]
  },
  {
    playerA: ["QS", "4C", "JC"],
    playerAWins: false,
    playerB: ["2D", "JH", "3C"]
  },
  {
    playerA: ["4C", "10D", "3C", "QS"],
    playerAWins: false,
    playerB: ["JH", "KS"]
  },
  {
    playerA: ["3C", "4C", "QS"],
    playerAWins: true,
    playerB: ["2D", "JH", "JC"]
  },
  {
    playerA: ["10D", "4C"],
    playerAWins: true,
    playerB: ["JC", "JH", "3C"]
  },
  {
    playerA: ["4C", "10D", "2D"],
    playerAWins: true,
    playerB: ["KS", "QS", "JC"]
  },
  {
    playerA: ["10D", "KS", "4C"],
    playerAWins: false,
    playerB: ["2D", "QS"]
  },
  {
    playerA: ["JH", "JC", "QS"],
    playerAWins: false,
    playerB: ["10D", "KS"]
  },
  {
    playerA: ["AS", "KH"],
    playerAWins: true,
    playerB: ["AC", "KS"]
  },
  {
    playerA: ["QS", "KS", "JC"],
    playerAWins: false,
    playerB: ["10D", "JH"]
  },
  {
    playerA: ["9D", "9S"],
    playerAWins: true,
    playerB: ["9C", "9H"]
  },
  {
    playerA: ["JC", "10D", "KS"],
    playerAWins: false,
    playerB: ["JH", "4C"]
  },
  {
    playerA: ["KS", "3C", "2D", "4C"],
    playerAWins: true,
    playerB: ["JH", "10D", "JC"]
  },
  {
    playerA: ["4C", "JH", "10D"],
    playerAWins: false,
    playerB: ["KS", "2D", "3C"]
  },
  {
    playerA: ["KS", "JC", "10D"],
    playerAWins: false,
    playerB: ["2D", "4C", "JH"]
  },
  {
    playerA: ["10D", "3C", "QS"],
    playerAWins: false,
    playerB: ["JH", "JC"]
  },
  {
    playerA: ["4C", "10D"],
    playerAWins: true,
    playerB: ["JC", "KS", "JH"]
  },
  {
    playerA: ["2D", "QS", "KS"],
    playerAWins: false,
    playerB: ["JH", "JC"]
  },
  {
    playerA: ["2D", "3C", "JH"],
    playerAWins: true,
    playerB: ["QS", "4C", "10D"]
  },
  {
    playerA: ["2D", "JC", "10D"],
    playerAWins: false,
    playerB: ["3C", "4C"]
  },
  {
    playerA: ["JC", "QS"],
    playerAWins: true,
    playerB: ["KS", "4C", "JH"]
  },
  {
    playerA: ["10D", "KS"],
    playerAWins: true,
    playerB: ["JH", "3C"]
  },
  {
    playerA: ["JH", "KS", "JC"],
    playerAWins: false,
    playerB: ["QS", "2D", "4C", "3C"]
  },
  {
    playerA: ["10S", "8C"],
    playerAWins: true,
    playerB: ["8S", "10H"]
  },
  {
    playerA: ["10S", "8C"],
    playerAWins: true,
    playerB: ["7S", "JH"]
  },
  {
    playerA: ["6S", "5S", "4S"],
    playerAWins: false,
    playerB: ["5H", "10C"]
  },
  {
    playerA: ["8H", "7C", "3C", "2C"],
    playerAWins: false,
    playerB: ["8C", "7H", "5H"]
  },
  {
    playerA: ["8H", "JC", "QC"],
    playerAWins: false,
    playerB: ["8C", "9H", "5H"]
  }
];
module.exports = testArr;
