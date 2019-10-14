Cypress.Commands.add('open', () => {
    // open and force wait until VueJS has rendered the page
    cy.visit("http://localhost:8080").get("#nav");
});