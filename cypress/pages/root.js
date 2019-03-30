export default {
  goToRoot: () => cy.visit('localhost:8080/tech-weights'),
  projectCreateButton: () => cy.get('[data-test="create-project-button"]'),
  projectsList: () => cy.get('[data-test="projects-list"]'),
  projectBuilderError: () => cy.get('[data-test="create-project-failed-error"]')
};
