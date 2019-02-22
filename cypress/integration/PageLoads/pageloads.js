// @todo #2:30m/DEV suppress or address lint errors
//  not sure how to satisfy the lint errors at this point
//  either make it more permissive, or at least understand why it is complaining


import {Given, Then} from 'cypress-cucumber-preprocessor/steps';

const url = 'localhost:8080';
Given('I open the home page', () => {
  cy.visit(url);
});

Then(`I see {string} in the title`, (title) => {
  cy.get("h1").should('contain', title);
});
