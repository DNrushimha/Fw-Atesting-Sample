describe('Navigating to Mattresses Page', () => {
    it('should navigate to the Mattresses page', () => {
        cy.visit('https://uat.fortywinks.com.au/bed-bases/').viewport(1280, 720);


        cy.get(':nth-child(1) > a > ._header_menu_item_text__GAqZR').click();

        cy.get("div:nth-of-type(3) div.swiper-slide-active img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(3) div.swiper-slide-next img").click();

        cy.get(':nth-child(1) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();

        cy.get("div:nth-of-type(3) div.swiper-wrapper > div:nth-of-type(3) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(3) div:nth-of-type(4) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div.swiper-slide-active img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div.swiper-slide-next img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div:nth-of-type(3) img").click();
        //  cy.get("div:nth-of-type(4) div.swiper-wrapper > div:nth-of-type(4) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div:nth-of-type(5) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div:nth-of-type(6) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div:nth-of-type(7) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();


        cy.get("div:nth-of-type(5) div.swiper-slide-active img").click();
        cy.get("div.text-lg p").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(5) div.swiper-slide-next img").click();
        cy.get("div.Breadcrumb").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.contains('Medium').click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div.swiper-wrapper > div:nth-of-type(4) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(5) div > div > div:nth-of-type(5) img").click();
        //cy.get("div:nth-of-type(5) div:nth-of-type(6) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.HelpCarousel div.swiper-slide-active img").click();
        cy.get(':nth-child(1) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();
        cy.get("div.HelpCarousel div.swiper-slide-active img").click();
        cy.get(':nth-child(1) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();
        cy.get("div.HelpCarousel div.swiper-slide-next img").click();
        cy.get(':nth-child(1) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();
        cy.get("div.LogosTileContainer a:nth-of-type(1) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("a:nth-of-type(2) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("a:nth-of-type(3) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("a:nth-of-type(4) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("a:nth-of-type(5) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("a:nth-of-type(6) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("a:nth-of-type(7) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("a:nth-of-type(8) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(9) div.swiper-slide-active img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(9) div.swiper-slide-next img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(9) div:nth-of-type(3) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(9) div:nth-of-type(4) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.ArticleTileItemCarousel div.swiper-slide-active img").click();
        cy.get(':nth-child(1) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();
        cy.get("div.ArticleTileItemCarousel div.swiper-slide-next img").click();
        cy.get(':nth-child(1) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();






    });
});


/*
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

        cy.visit('https://uat.fortywinks.com.au/mattresses/luxury/').viewport(1280, 720);*/

