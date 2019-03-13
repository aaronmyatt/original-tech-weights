describe('user adds skills', () => {

  it('adds skill to skill list', () => {
    cy.visit('localhost:8080');
    cy.get('.add-new-skill-button').click();
    cy.get('.skills-list').should('have.length', 1);
  });

});
