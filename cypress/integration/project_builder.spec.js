import rootPage from '../pages/root';

describe('user arrives for the first time', () => {
  it('displays project builder', () => {
    rootPage.goToRoot();
    rootPage.projectCreateButton().should('be.visible');
  });
});

describe('user must complete form/add skills before creating project', () => {
  it.skip('adds to the project list', () => {
    rootPage.goToRoot();
    rootPage.projectCreateButton()
      .click();
    rootPage.projectList()
      .should('have.length', 0);
  });
});
