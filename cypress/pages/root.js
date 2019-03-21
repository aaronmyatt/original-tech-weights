export default {
  goToRoot: () => cy.visit('localhost:8080'),
  projectCreateButton: () => cy.get('.create-project-button'),
  projectsList: () => cy.get('.projects-list'),
  projectBuilderError: () => cy.get('[data-test="create-project-failed-error"]'),
};