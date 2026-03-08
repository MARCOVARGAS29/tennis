class Tennis {
  constructor() {
    this.player1Points = 0;
    this.player2Points = 0;
  }

  score() {
    const scores = ["Love", "15", "30", "40"];
    return `${scores[this.player1Points]} - ${scores[this.player2Points]}`;
  }

  player1Scores() {
    this.player1Points++;
  }

  player2Scores() {
    this.player2Points++;
  }
}

module.exports = Tennis;