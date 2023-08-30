describe('Search', () => {
    it('checking the Search Page', () => {
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);


        cy.get('.relative > .text-black').click();

        cy.get('form.w-full > .text-black-100').type('Mattresses{enter}')

    })
})