import './actions/precadastro.action'
import './actions/agendamento.action'

Cypress.Commands.add('agendamentoApi', (agendamento) => {
    cy.request({
        method: 'POST',
        url:  Cypress.env('baseApi') + '/api/agendamentos',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 3a8a9b8fae87baf503e7c5fe5b97fd72'
        },
        body: {
            nomCliente: agendamento.usuario.nome,
            emailCliente: agendamento.usuario.email,
            data: agendamento.data,
            hora: agendamento.hora,
            matricula: agendamento.profissional.matricula,
            codigoServico: 1
        }
    }).then((resp) => {
        expect(resp.status).to.eql(201)
    }) 
})



