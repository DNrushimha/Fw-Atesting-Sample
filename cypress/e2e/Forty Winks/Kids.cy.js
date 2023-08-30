describe('Kids', () => {
    it('checking the Kids Page', () => {
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.get(':nth-child(4) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();

        //Shop Product
        //Bed Frames

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/beds/frames/').viewport(1280, 720)

        //Bunk Beds

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/beds/bunk/').viewport(1280, 720);

        //Trundle

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/beds/trundle/').viewport(1280, 720);

        //Bed heads

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/beds/heads/').viewport(1280, 720);

        //Bases

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/products/kids/bases/').viewport(1280, 720);

        //Beside tabled

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/bedside-tables/').viewport(1280, 720);

        //Book cases

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/bookcases/').viewport(1280, 720);


        //Desks

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/desks/').viewport(1280, 720);


        //Dressers

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/dressers/').viewport(1280, 720);


        //Mattresses

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/mattresses/').viewport(1280, 720);


        //Tallboys

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/tallboys/').viewport(1280, 720);


        /*     //WE’RE HERE TO HELP
            //bedMATCH
    
            cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
    
            cy.visit('https://uat.fortywinks.com.au/bedmatch/').viewport(1280, 720);
    
    
            //Myside
    
                cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
         
                 cy.visit('https://uat.fortywinks.com.au/bed-bases/myside/').viewport(1280, 720);
         
         
                 //Bed size guide
         
                 cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
         
                 cy.visit('https://uat.fortywinks.com.au/help-faqs/bed-size-guide/').viewport(1280, 720);*/



    })
})