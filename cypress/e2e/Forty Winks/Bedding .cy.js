describe('Bedding', () => {
    it('checking the Bedding Page', () => {
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.get(':nth-child(5) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();

        //shop products
        //pillows

        cy.visit('https://uat.fortywinks.com.au/bedding/pillows/').viewport('1280,720');

        //Bed Sheets

        cy.visit('https://uat.fortywinks.com.au/bedding/').viewport('1280, 720');

        cy.visit('https://uat.fortywinks.com.au/bedding/bed-sheets/').viewport('1280, 720');

        //Mattresses Protecter

        cy.visit('https://uat.fortywinks.com.au/bedding/').viewport('1280, 720');

        cy.visit('https://uat.fortywinks.com.au/bedding/mattress-protectors/').viewport('1280, 720');
    })
})