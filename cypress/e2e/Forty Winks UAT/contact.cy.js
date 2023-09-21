describe('Auto-Complete Dropdown Test', () => {
    it('interacts with auto-complete dropdown', () => {
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.get('.gap-3 > :nth-child(3) > a').click();

        cy.get(':nth-child(1) > .inputField').type('D');
        cy.get(':nth-child(2) > .inputField').type('Nrushimha');
        //cy.get(':nth-child(3) > .inputField').type('0452526992');
        cy.get(':nth-child(4) > .inputField').type('dnrushimha@gmail.com');
        cy.get(':nth-child(5) > .inputField').type('3000');

        // Select an option from the auto-complete dropdown
        cy.get('[id="headlessui-combobox-button-:r4:"]').type('Alexandria{enter}');
        //cy.contains('[id="headlessui-combobox-button-:r4:"]', 'Alexandria{enter}').dblclick();


        // Select an option from another listbox (assuming this is a dropdown)
        cy.get('[id="headlessui-listbox-button-\\:r2\\:"]').type('Product{enter}'); // Click to open dropdown
        //cy.contains('.headlessui-listbox-option', 'Product').click(); // Select an option
        cy.get('.textAreaField').type('hello');

        //cy.get('style="width: 304px; height: 78px;"] > div > iframe').click();
        cy.get('[style="width: 304px; height: 78px;"] > div > iframe').dblclick();

        cy.get('form > .bg-primary').click();
    });
});
