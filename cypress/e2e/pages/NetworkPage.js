export class Network{
    CompetitorNetworks1(){
        cy.get('#tab-2IXQpgM9HStNH0WnUUiWCw > .sc-5c377f4c-3').click()
    }
    CompetitorNetworks2(){
        cy.get('#tab-4azmFSNfuMMzXK062TEcHx > .sc-5c377f4c-3').click()
    }
    PricingLinkButton(){
        cy.get('.sc-181bec92-1 > .sc-5d3a275a-0 > .sc-5d3a275a-1').click()
    }
    ScrollToTab(){
        cy.get('#tab-5qKqtUbJNN3vVehx6JvATL > .sc-5c377f4c-3').scrollIntoView()
    }
    ScrollToTab1(){
        cy.get('#tab-Sq8ENgsX3FFJrQ1xYXJAa > .sc-5c377f4c-3').scrollIntoView()
    }
}