Cypress.Commands.add('iniciarPreCadastro', (usuario) => {
    cy.visit('/pre-cadastro')

    cy.get('form h2')
        .should('be.visible')
        .and('have.text', 'Seus dados')

    cy.get('#fullname').as('fullname')
    cy.get('#email').as('email')

    if (usuario?.nome) {
        cy.get('@fullname').type(usuario.nome)
    }

    if (usuario?.email) {
        cy.get('@email').type(usuario.email)
    }

    cy.contains('button[type=submit]', 'Continuar')
        .click()
})

Cypress.Commands.add('preCadastro', (usuario) => {
    cy.window().then((win) => {
        win.localStorage.setItem('usuario', JSON.stringify(usuario))
    })
    cy.visit('/')
})

Cypress.Commands.add('verificarPreCadastro', (usuario) => {
    cy.get('span.usuario-nome')
        .should('be.visible')
        .and('have.text', 'Olá, ' + usuario.nome.split(' ')[0])

    cy.get('span.usuario-email')
        .should('be.visible')
        .and('have.text', usuario.email)

    cy.window().then((win) => {
        const chaveUsuario = win.localStorage.getItem('usuario')
        expect(chaveUsuario).to.eql(JSON.stringify(usuario))
    })
})

Cypress.Commands.add('verificarAlerta', (campo, texto) => {
    cy.contains('label', campo)
        .parent()
        .find('.alert-msg')
        .should('have.text', texto)
})