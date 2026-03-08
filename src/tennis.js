class Tennis {
  constructor() {
    this.player1Points = 0;
    this.player2Points = 0;
  }

  score() {
    const scores = ["Love", "15", "30", "40"];
    
    // Regla: Deuce
    if (this.player1Points >= 3 && this.player2Points === this.player1Points) {
      return "Deuce";
    }

    // Nueva regla: Ventaja
    if (this.player1Points >= 4 && this.player1Points === this.player2Points + 1) {
      return "Advantage Player 1";
    }
    if (this.player2Points >= 4 && this.player2Points === this.player1Points + 1) {
      return "Advantage Player 2";
    }

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