Cypress.Commands.add('configurarViewportEAcessarHome', () => {
    cy.viewport('iphone-xr')
    cy.visit('/')
    cy.contains('p', 'Faça login com a sua conta')
        .should('be.visible')
})

Cypress.Commands.add('login', (profissional) => {
    cy.get('#matricula').type(profissional.matricula)
    cy.get('#senha').type(profissional.senha)
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('verificarUsuarioLogado', (profissional) => {
    cy.get('.usuario-logado').within(() => {
        cy.get('small')
            .should('be.visible')
            .and('have.text', `Olá ${profissional.nome},`)

        cy.get('h2')
            .should('be.visible')
            .and('have.text', 'esse é o seu painel de atendimento!')
    })
})

Cypress.Commands.add('apiLogin', (profissional) => {
    cy.request({
        method: 'POST',
        url: Cypress.env('baseApi') + '/api/login',
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            matricula: profissional.matricula,
            senha: profissional.senha
        }
    }).then(resp => {
        expect(resp.status).to.eq(200)
        cy.window().then((win) => {
            win.localStorage.setItem('authToken', JSON.stringify(resp.body.token))
            win.localStorage.setItem('profissional', JSON.stringify(resp.body.profissional))
        })
    })

    cy.visit('/agendamentos')
})

