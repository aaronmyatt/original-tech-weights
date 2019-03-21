import rootPage from '../pages/root';

describe('user arrives for the first time', () => {
  it('displays project builder', () => {
    rootPage.goToRoot();
    rootPage.projectCreateButton().should('be.visible');
  });
});

describe('user must complete form/add skills before creating project', () => {
  it('adds to the project list', () => {
    rootPage.goToRoot();
    rootPage.projectCreateButton()
      .click();
    rootPage.projectsList()
      .should('have.length', 0);
  });
});
