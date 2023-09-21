describe('Kids', () => {
    it('checking the Kids Page', () => {
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        //SHOP PRODUCT
        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
        cy.get("div.CategoryTileItemCarousel div.swiper-slide-active img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.CategoryTileItemCarousel div.swiper-slide-next img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.CategoryTileItemCarousel div.swiper-slide-active img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.CategoryTileItemCarousel div.swiper-slide-active img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.CategoryTileItemCarousel div.swiper-slide-active img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.CategoryTileItemCarousel div.swiper-slide-next img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.CategoryTileItemCarousel div:nth-of-type(7) img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.CategoryTileItemCarousel div.swiper-slide-active img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.CategoryTileItemCarousel div.swiper-slide-active img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(10) img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(11) img").click();

        //WE’RE HERE TO HELP
        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
        cy.get("div.HelpCarousel div.swiper-slide-active img").click();

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
        cy.get("div.HelpCarousel div.swiper-slide-next img").click();

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
        cy.get("div.HelpCarousel div.swiper-slide-next img").click();

        //Quick ship 
        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
        cy.get("div.IconTileContainer > div > div > div:nth-of-type(1) img").click();

        //Interest free
        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
        cy.get("div.IconTileContainer div:nth-of-type(2) img").click();

        //widest range
        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
        cy.get("div.IconTileContainer div:nth-of-type(3) img").click();

        //Austarlian owned
        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
        cy.get("div.IconTileContainer div:nth-of-type(4) img").click();
        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);


    })
})

/*  //Shop Product
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


           //WE’RE HERE TO HELP
            //bedMATCH
    
            cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
    
            cy.visit('https://uat.fortywinks.com.au/bedmatch/').viewport(1280, 720);
    
    
            //Myside
    
                cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
         
                 cy.visit('https://uat.fortywinks.com.au/bed-bases/myside/').viewport(1280, 720);
         
         
                 //Bed size guide
         
                 cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
         
                 cy.visit('https://uat.fortywinks.com.au/help-faqs/bed-size-guide/').viewport(1280, 720);*/
