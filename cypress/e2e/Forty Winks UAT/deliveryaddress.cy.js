describe('Delevery address changing Test', () => {
    it('changing the delivery address of the user', () => {
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('change').dblclick();

        //cy.get('#address').should('be.visible').type('3000{enter}');
        // cy.get('#address')
        // .invoke('attr', 'autocomplete', 'off') // Disable autocomplete
        // .type('Melbourne VIC 3000, Australia{enter}');



        cy.get('#address').type('3000');

        cy.get('form > .bg-primary').click();

    })
})