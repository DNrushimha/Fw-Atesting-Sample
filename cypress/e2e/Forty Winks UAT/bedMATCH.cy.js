describe('bedMATCH', () => {
    it('checking the bedMATCH Page', () => {
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.get('.gap-3 > :nth-child(4) > a').click();
    })
});