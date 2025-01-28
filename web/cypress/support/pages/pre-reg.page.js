class PreRegPage {
    go() {
        cy.visit('/pre-cadastro')
        
        cy.get('form h2')
            .should('be.visible')
            .and('have.text', 'Seus dados')
    }

    fillForm(user) {
        cy.get('#fullname')
            .type(user.getfullName())

        cy.get('#email')
            .type(user.email)
    }

    submit() {
        cy.contains('button[type=submit]', 'Continuar')
            .click()
    }

    alertHave(fieldName, text) {
        cy.contains('label', fieldName)
            .parent()
            .find('.alert-msg')
            .should('have.text', text)
    }
}

export default new PreRegPage()