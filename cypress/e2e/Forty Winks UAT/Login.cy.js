describe('Log In Test', () => {
    it('Logging the user', () => {
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.get('.justify-end > :nth-child(1)').click();

        cy.get(':nth-child(1) > .inputField').type('anonymous@gmail.com');
        cy.get(':nth-child(2) > .inputField').type('Devulapalli@123');

        cy.get('form > :nth-child(4) > .flex').click();

    })
})