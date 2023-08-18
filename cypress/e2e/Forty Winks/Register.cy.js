describe('Registration Test', () => {
    it('Registers a new user', () => {
        cy.visit('https://uat.fortywinks.com.au/')

        cy.viewport(1280, 720);
        cy.get('.justify-end > :nth-child(1)').click();
        cy.get('.font-bold > a').dblclick();

        cy.get(':nth-child(1) > .inputField').type('D');

        cy.get(':nth-child(2) > .inputField').type('Nrushimha');

        cy.get(':nth-child(3) > .inputField').type('anonymou@gmail.com');

        cy.get(':nth-child(4) > .inputField').type('0412345678');

        cy.get(':nth-child(5) > .inputField').type('Devulapalli@123');

        cy.get(':nth-child(6) > .inputField').type('Devulapalli@123');

        cy.get('.px-8').dblclick();

        //login after completing the register

        cy.get('.px-8').click();

        cy.get(':nth-child(1) > .inputField').type('anonymous@gmail.com');
        cy.get(':nth-child(2) > .inputField').type('Devulapalli@123');

        cy.get('form > :nth-child(3) > .flex').dblclick();

    })
})
