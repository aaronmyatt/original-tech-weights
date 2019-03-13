describe('user arrives for the first time', () => {
  it('displays project builder', () => {
    cy.visit('localhost:8080');
    cy.get('.create-project-button').should('be.visible');
  });
});

describe('user can create projects', () => {
  it('adds to the project list', () => {
    cy.visit('localhost:8080');
    cy.get('.create-project-button').click();
    cy.get('.projects-list').should('have.length', 1);
  });
});
