const Tennis = require("./tennis.js");

describe("Tennis Scorer", () => {
  it("toma en cuenta el caso de inicio del juego", () => {
    let tennis = new Tennis();
    expect(tennis.score()).toEqual("Love - Love");
  });

  it("jugador 1 anota jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    let resultado = tennis.score();
    expect(resultado).toEqual("15 - Love");
  });

  it("jugador 1 anota 2 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("30 - Love");
  });
  it("debería mostrar 15-15 cuando ambos anotan una vez", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("15 - 15");
  });
  it("debería mostrar Deuce cuando ambos tienen 3 puntos", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores(); // 40
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores(); // 40
    expect(tennis.score()).toEqual("Deuce");
  });
  it("debería mostrar Advantage Player 1 cuando el jugador 1 tiene ventaja", () => {
    let tennis = new Tennis();
    // Ambos llegan a 40 (3 puntos)
    for (let i = 0; i < 3; i++) {
        tennis.player1Scores();
        tennis.player2Scores();
    }
    // Jugador 1 anota para obtener ventaja
    tennis.player1Scores();
    expect(tennis.score()).toEqual("Advantage Player 1");
  });
  it("debería mostrar Game for Player 1 cuando el jugador 1 gana", () => {
    let tennis = new Tennis();
    // Llegamos a ventaja
    for (let i = 0; i < 3; i++) {
        tennis.player1Scores();
        tennis.player2Scores();
    }
    // Jugador 1 anota dos veces seguidas para ganar
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("Game for Player 1");
  });
});