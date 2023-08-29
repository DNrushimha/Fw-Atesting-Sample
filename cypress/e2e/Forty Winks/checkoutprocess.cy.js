describe('bedMATCH', () => {
    it('checking the bedMATCH Page', () => {
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        //login
        cy.get('.justify-end > :nth-child(1)').click();

        cy.get(':nth-child(1) > .inputField').type('anonymous@gmail.com');
        cy.get(':nth-child(2) > .inputField').type('Devulapalli@123');

        cy.get('form > :nth-child(4) > .flex').click();

        //cart

        cy.get('._cart_menu_cart_menu-toggle__sJmqV').click();

        cy.contains('Continue to checkout').click();

        cy.contains('Continue to delivery').click();

        //cy.get('.border-primary').click();



        cy.get(':nth-child(4) > .bg-primary').dblclick();

        //debit card & credit card

        //cy.get('.py-8').click();

        cy.get('.adyen-checkout__payment-method--afterpaytouch > .adyen-checkout__payment-method__header').click();

        cy.get('.adyen-checkout__payment-method--paypal > .adyen-checkout__payment-method__header').click();

        cy.get('.adyen-checkout__payment-method--card > .adyen-checkout__payment-method__header').click();


        //cy.contains('Card number').type('2665 8955 2516 4654')

        //cy.contains('Expiry date').type('0530')

        //cy.contains('security code').type('252')

        // cy.contains('Name on card').type('bvjbfbju')

        cy.get('.adyen-checkout__button').dblclick();



    })
})