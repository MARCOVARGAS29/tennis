class Tennis {
  constructor() {
    this.player1Points = 0;
    this.player2Points = 0;
  }

 score() {
    if (this.isDeuce()) return "Deuce";
    // 1. Verificamos primero si alguien GANÓ el juego
    if (this.hasWinner()) return this.getWinnerScore();
    // 2. Si nadie ganó, entonces verificamos si alguien tiene ventaja
    if (this.hasAdvantage()) return this.getAdvantageScore();
    
    return this.getRegularScore();
  }

  isDeuce() {
    return this.player1Points >= 3 && this.player1Points === this.player2Points;
  }

  hasAdvantage() {
    return this.player1Points >= 4 || this.player2Points >= 4;
  }

  getAdvantageScore() {
    const leader = this.player1Points > this.player2Points ? "Player 1" : "Player 2";
    return `Advantage ${leader}`;
  }

  hasWinner() {
    return (this.player1Points >= 4 || this.player2Points >= 4) && 
           Math.abs(this.player1Points - this.player2Points) >= 2;
  }

  getWinnerScore() {
    const winner = this.player1Points > this.player2Points ? "Player 1" : "Player 2";
    return `Game for ${winner}`;
  }

  getRegularScore() {
    const scores = ["Love", "15", "30", "40"];
    return `${scores[this.player1Points]} - ${scores[this.player2Points]}`;
  }

  player1Scores() { this.player1Points++; }
  player2Scores() { this.player2Points++; }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Tennis;
} else {
  // Solo asignamos a window si estamos en el navegador
  window.Tennis = Tennis;
}