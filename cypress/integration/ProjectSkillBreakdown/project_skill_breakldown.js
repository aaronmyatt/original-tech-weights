/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps';

const url = 'localhost:8080';
Given('a user on the home page', () => {
  cy.visit(url);
});

Given('an active project form', () => {
  cy.get('.create-project-button').click()
});

When('they click {string}', (cls) => {
  cy.get(cls).click()
});

Then(`the {string} will have one child element`, (cls) => {
  cy.get(cls).should('have.length', 1);
});

Then(`the {string} will have one child element`, (cls) => {
  cy.get(cls).should('have.length', 1);
});

Then(`the {string} will be visible`, (cls) => {
  cy.get(cls).should('be.visible');
});
