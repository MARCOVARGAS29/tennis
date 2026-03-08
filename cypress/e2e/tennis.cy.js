describe("Marcador de Tenis", () => {
  it("debería mostrar Love-Love al iniciar el set", () => {
    cy.visit("/");
    cy.get("#resultado-marcador").should("contain", "Love-Love");
  });
});