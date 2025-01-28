Cypress.Commands.add('verificarToast', (mensagem) => {
    cy.get('.toast')
        .should('be.visible')
        .find('div[role=status]')
        .should('have.text', mensagem)
})

Cypress.Commands.add('criarAgendamentoApi', (profissional, agendamentos) => {
    agendamentos.forEach(a => {
        cy.deleteMany(
            { emailCliente: a.usuario.email },
            { collection: 'agendamentos' }
        ).then(result => {
            cy.log(result)
        })
    })

    agendamentos.forEach(a => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseApi') + '/api/agendamentos',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 3a8a9b8fae87baf503e7c5fe5b97fd72'
            },
            body: {
                nomeCliente: a.usuario.nome,
                emailCliente: a.usuario.email,
                data: a.data,
                hora: a.hora,
                matricula: profissional.matricula,
                codigoServico: a.servico.codigo
            }
        }).then((resp) => {
            expect(resp.status).to.eql(201)
        })
    })
})
