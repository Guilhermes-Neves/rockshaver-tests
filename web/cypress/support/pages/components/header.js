class Header {
    verifyPreReg(user) {
        cy.get('span.user-name')
            .should('be.visible')
            .and('have.text', 'Olá, ' + user.firstName)

        cy.get('span.user-email')
            .should('be.visible')
            .and('have.text', user.email)
    }
}

export default new Header()