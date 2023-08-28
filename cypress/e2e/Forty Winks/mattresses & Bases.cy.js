describe('Navigating to Mattresses Page', () => {
    it('should navigate to the Mattresses page', () => {
        cy.visit('https://uat.fortywinks.com.au/bed-bases/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/beds-frames/bed-bases/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/mattresses/adjustable/').viewport(1280, 720);


        cy.visit('https://uat.fortywinks.com.au/mattresses/bed-in-a-box/').viewport(1280, 720);

        //sizes

        cy.visit('https://uat.fortywinks.com.au/mattresses/super-king/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/mattresses/king/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/mattresses/queen/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/mattresses/double/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/mattresses/king-single/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/mattresses/long-single/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/mattresses/single/').viewport(1280, 720);

        //shop feel

        cy.visit('https://uat.fortywinks.com.au/mattresses/?q=&order=recommended&dir=asc&comfortLevel=Ultra+Plush').viewport(1280, 720)

        cy.visit('https://uat.fortywinks.com.au/mattresses/?q=&order=recommended&dir=asc&comfortLevel=Plush').viewport(1280, 720)

        cy.visit('https://uat.fortywinks.com.au/mattresses/?q=&order=recommended&dir=asc&comfortLevel=Medium').viewport(1280, 720)

        cy.visit('https://uat.fortywinks.com.au/mattresses/?q=&order=recommended&dir=asc&comfortLevel=Firm').viewport(1280, 720)

        cy.visit('https://uat.fortywinks.com.au/mattresses/?q=&order=recommended&dir=asc&comfortLevel=Super+Firm').viewport(1280, 720)

        cy.visit('https://uat.fortywinks.com.au/mattresses/?q=&order=recommended&dir=asc&comfortLevel=Ultra+Firm').viewport(1280, 720)



        //SHOP BRANDS

        cy.visit('https://uat.fortywinks.com.au/bed-bases/sealy/').viewport(1280, 720)

        //cy.vist('https://uat.fortywinks.com.au/mattresses/king-koil/').viewport(1280, 720)

        cy.visit('https://uat.fortywinks.com.au/bed-bases/myside/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/mattresses/tempur/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/mattresses/serta/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/mattresses/silent-partner/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/mattresses/active-sleep/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/mattresses/crown-posture/').viewport(1280, 720);

        //shop range

        cy.visit('https://uat.fortywinks.com.au/mattresses/australian-made/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/mattresses/sleep-saver/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/mattresses/back-care/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/mattresses/luxury/').viewport(1280, 720);







    });
});

