describe('Finding store', () => {
    it('changing the Finding store near to the user', () => {
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);


        cy.get('.px-10').dblclick();

        cy.get('#firstName').type('D')

        cy.get('#email').type('nrushimhadevulapalli@gmail.com')

        cy.get('form > :nth-child(3) > .bg-primary').click();

        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        //help

        //contact us

        cy.contains('Contact us').click();

        cy.get(':nth-child(1) > .inputField').type('D')

        cy.get(':nth-child(2) > .inputField').type('Nru')

        cy.get(':nth-child(3) > .inputField').type('0412345698')

        cy.get(':nth-child(4) > .inputField').type('nrushimhadevulapalli@gmail.com')

        cy.get(':nth-child(5) > .inputField').type('3000');

        // Select an option from the auto-complete dropdown
        cy.get('[id="headlessui-combobox-button-:r4:"]').type('Alexandria{enter}');
        //cy.contains('[id="headlessui-combobox-button-:r4:"]', 'Alexandria{enter}').dblclick();


        // Select an option from another listbox (assuming this is a dropdown)
        cy.get('[id="headlessui-listbox-button-\\:r2\\:"]').type('Product{enter}'); // Click to open dropdown
        //cy.contains('.headlessui-listbox-option', 'Product').click(); // Select an option
        cy.get('.textAreaField').type('hello');

        cy.get('form > .bg-primary').click();

        // Find a store
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('Find a store').click();

        // FAQs

        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('FAQs').click();

        //Finance options

        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('Finance options').click();

        //Delivery

        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('Delivery').click();

        // Quick ship delivery
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('Quick ship delivery').click();

        //Returns & warranty
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('Returns & warranty').click();

        //Mattress recycling

        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('Mattress recycling').click();

        //Qantas frequent flyer

        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/qantas-points/').viewport(1280, 720);

        //Buying guides

        //bedMATCH

        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('bedMATCH®').click();

        //Bed size Guide
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('Bed size guide').click();

        //Product care guides
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('Product care guides').click();

        //Bedding glossary
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('Bedding glossary').click();

        //Bed buying checklist
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('Bed buying checklist').click();

        //Catalogues

        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('Catalogues').click();


        //About Forty Winks
        //About Us

        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('About us').click();

        //serious about sleep

        // cy.visit('https://uat.fortywinks.com.au/serious-about-sleep/').viewport(1280, 720);

        //Our Partners

        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('Our partners').click();

        //Franchise Enquiry
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('Franchise Enquiry').click();

        cy.get(':nth-child(1) > .inputField').type('D');

        cy.get(':nth-child(2) > .inputField').type('3000');

        cy.get(':nth-child(3) > .inputField').type('fbffffbd');

        cy.get(':nth-child(4) > .inputField').type('3000');

        cy.get('[id="headlessui-listbox-button-\:r4\:"]').type('WA{enter}');

        cy.get(':nth-child(6) > .inputField').type('nrushimhadevulapalli@gmail.com')

        cy.get(':nth-child(7) > .inputField').type('0412364598')

        cy.get(':nth-child(8) > .inputField').type('uiuiuiuf')

        cy.get(':nth-child(9) > .inputField').type('hbcjhfygf')

        cy.get('.textAreaField').type('cjgdjcucgucgcv')

        cy.get('.justify-center > .bg-primary').click();

        //careers

        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.get(':nth-child(3) > :nth-child(1) > .footer_menu__3kaki > :nth-child(5)').click();

        //Latest news
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('Latest news').click();

        //Social & Environmental Responsibility Strategy

        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('Social & Environmental Responsibility Strategy');

        //facebook icon
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.get('.footer_menu__3kaki > :nth-child(1) > .flex').click();

        //Instagram
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.get('.footer_menu__3kaki > :nth-child(2) > .flex').click();

        //Youtube

        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.get('.footer_menu__3kaki > :nth-child(3) > .flex').click();

        //pinterest

        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.get('.footer_menu__3kaki > :nth-child(4) > .flex').click();

        //Frequent Flyer

        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.get('.w-36 > a > span > img').click();

        //Australian Made

        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.get('.w-11 > a > span > img').click();

        //Terms & Conditions

        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('Terms & conditions').click();

        //Privacy policy

        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('Privacy policy').click();

        //Privacy Collection Statement

        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.contains('Privacy Collection Statement').click();









    })
})