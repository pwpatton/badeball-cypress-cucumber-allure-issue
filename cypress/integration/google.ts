import { Then, When } from '@badeball/cypress-cucumber-preprocessor';

const url = 'https://google.com';

When("I visit the webpage", () => {
  cy.visit(url);
});

Then('I should see the webpage', () => {
  cy.log("I should see google");
  cy.get('title').should('have.text', 'Google');
});
