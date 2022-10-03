export class RegistrationPage{

    EnterEmail(){
        cy.get('#email').type(Math.random().toString(36).substring(2, 35)+"@gmail.com")
    }

    EnterFullName(Name){
        cy.get('#full_name').type(Name)
    }
    EnterPassword(Password){
        cy.get('#password').type(Password)
    }
    CreateAccountButtonClick(){
        cy.get('.sc-26f7330-6 > .sc-5d3a275a-0 > .sc-5d3a275a-1').click()
    }
    AgreeCheckClick(){
        cy.get('.sc-26f7330-5 > .sc-e117dd75-0 > svg > rect').click()
    }
}



