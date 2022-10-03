export class LogIn{
    EmailField(email){
        cy.get('.eSxLXo > .InlineForm__Container-sc-1r23z15-0 > .TextField__Container-sc-r5o2cn-0 > .TextField__InputWrapper-sc-r5o2cn-4 > .ui-reactv2-input').type(email)
    }
    PasswordField(password){
        cy.get('.flxMbT > .InlineForm__Container-sc-1r23z15-0 > .TextField__Container-sc-r5o2cn-0 > .TextField__InputWrapper-sc-r5o2cn-4 > .ui-reactv2-input').type(password)
    }
    SubmitButtonClick(){
        cy.get('.Button__StyledDefaultButton-sc-44gl5i-0').click()
    }
    ForgotPasswordButton(){
        cy.get('.flxMbT > .Text__makeText-sc-1l8eqw9-0 > a').click()
    }
}