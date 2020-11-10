describe("product3-frontend", () => {
  beforeEach(() => cy.visit("/"));

  it("should display welcome message", () => {
    cy.contains("Welcome to Product3:Frontend!");
  });
});
