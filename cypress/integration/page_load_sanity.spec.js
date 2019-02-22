// @todo #1:DEV/30m move to Given/Then/When plugin
//  https://www.npmjs.com/package/cypress-cucumber-preprocessor

context('Actions', () => {
  beforeEach(() => {
    cy.visit('localhost:8080');
  });

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('.hello')
      .should('contain', 'Vue.js App');
  });
});
