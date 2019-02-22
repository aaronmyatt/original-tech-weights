/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import {Given, Then} from 'cypress-cucumber-preprocessor/steps';

const url = 'localhost:8080';
Given('I open the home page', () => {
  cy.visit(url);
});

Then(`I see {string} in the title`, (title) => {
  cy.get('h1').should('contain', title);
});
