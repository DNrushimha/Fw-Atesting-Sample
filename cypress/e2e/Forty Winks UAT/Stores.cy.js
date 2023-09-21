describe('Finding store', () => {
    it('changing the Finding store near to the user', () => {
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.get('.z-100 > .gap-3 > :nth-child(1) > a').click();

        cy.get('.appearance-none')
            .type('Bunbury WA, Australia')
            .click();

    })
})