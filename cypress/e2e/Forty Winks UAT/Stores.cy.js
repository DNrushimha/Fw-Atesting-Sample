describe('Finding store', () => {
    it('changing the Finding store near to the user', () => {
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        // Click the location selector
        cy.get("header > div.flex li:nth-of-type(1) > a").click();

        // Type the postal code in the input field
        cy.get("#__next > div.flex input").type('3000{enter}').click();

        // Press Enter to submit the form






















        /*  cy.get('.z-100 > .gap-3 > :nth-child(1) > a')
            .should('exist') // Ensure the link exists in the DOM
            .click();

        // Wait for the input field to exist and be visible
        cy.get('.appearance-none')
            .should('exist') // Ensure the input field exists in the DOM
            .should('be.visible') // Ensure the input field is visible
            .type('5000')
            .type('{enter}'); // Press Enter key after typing the value

        // Log a message to indicate the test progress
        cy.log('Typed "5000" and pressed Enter');           */
    });
});
