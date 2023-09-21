describe('beds', () => {
    it('checking the beds Page', () => {
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.get(':nth-child(2) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();

        cy.get("div:nth-of-type(3) div.swiper-slide-active img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(3) div.swiper-slide-next img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(3) div > div > div:nth-of-type(3) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div.swiper-slide-active img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div.swiper-slide-next img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div:nth-of-type(3) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div.swiper-wrapper > div:nth-of-type(4) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div:nth-of-type(5) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div:nth-of-type(6) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div:nth-of-type(7) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(5) div.swiper-slide-active img").click();
        cy.get(':nth-child(2) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();
        cy.get("div:nth-of-type(5) div.swiper-slide-next img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(5) div:nth-of-type(3) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(5) div.swiper-slide-next img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(5) div.swiper-slide-active img").click();
        cy.get(':nth-child(2) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();
        cy.get("div:nth-of-type(5) div.swiper-slide-active img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(5) div:nth-of-type(7) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(5) div:nth-of-type(8) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(6) div.swiper-slide-active img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(6) div.swiper-slide-next img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(6) div.swiper-slide-active img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(6) div.swiper-slide-active img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(6) div.swiper-slide-next img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(6) div.swiper-wrapper > div:nth-of-type(6) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.HelpCarousel div.swiper-slide-active img").click();
        cy.get(':nth-child(2) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();
        cy.get("div.HelpCarousel div.swiper-slide-next img").click();
        cy.get(':nth-child(2) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();
        cy.get("div.HelpCarousel div.swiper-slide-next img").click();
        cy.get(':nth-child(2) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();





    })
})




/*cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

//Bed Bases

cy.visit('https://uat.fortywinks.com.au/beds-frames/bed-bases/').viewport(1280, 720);

//bed frames

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds/beds-frames/').viewport(1280, 720);

//Bed heads

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/bedheads/').viewport(1280, 720);

//Shop Size
//Super King

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/super-king/').viewport(1280, 720);

//King

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/king/').viewport(1280, 720);

//Queen

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/queen/').viewport(1280, 720);

//Double

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/double/').viewport(1280, 720);

//King Single

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/king-single/').viewport(1280, 720);

//long Single

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/long-single/').viewport(1280, 720);

//Single
cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/single/').viewport(1280, 720);

//Shop Style
//Coastal

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/coastal/').viewport(1280, 720);

//Urban

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/urban/').viewport(1280, 720);

//Traditional

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/traditional/').viewport(1280, 720);

//Scandi 

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/scandi/').viewport(1280, 720);

//Country

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/country/').viewport(1280, 720);

//Glam

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/glam/').viewport(1280, 720);

//Mix & Match

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/mix-match/').viewport(1280, 720);

//Kids

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/kids-furniture/').viewport(1280, 720);

//Shop Range
//Australian Made

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/australian-made/').viewport(1280, 720);

//Modren Australian Made

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/contemporary/').viewport(1280, 720);

//Crafted Luxe

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/luxury/').viewport(1280, 720);

//Timber Mix & Match

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/mix-match/').viewport(1280, 720);

//Designer upholstered

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/upholstered/').viewport(1280, 720);

//Sleep Saver Beds

cy.visit('https://uat.fortywinks.com.au/beds-frames/').viewport(1280, 720);

cy.visit('https://uat.fortywinks.com.au/beds-frames/sleep-saver/').viewport(1280, 720);    */