import { Types } from 'mongoose'

describe('DELETE /api/agendamentos/:id', () => {
    const funcionario = {
        matricula: '1004',
        senha: 'pwd123'
    }
    beforeEach(() => {
        cy.getToken(funcionario.matricula, funcionario.senha)
    })


    context('Quando tenho um agendamento', () => {
        const agendamento = {
            nomeCliente: 'Daphne Blake',
            emailCliente: 'daphne@gmail.com',
            data: '10/01/2025',
            hora: '10:00',
            codigoServico: 4,
            matricula: funcionario.matricula
        }

        before(() => {
            cy.deleteMany({ matricula: funcionario.matricula }, { collection: 'agendamentos' })
                .then((result) => {
                    cy.log(result)
                })

            cy.postAgendamento(agendamento)
                .then(response => {
                    expect(response.status).to.eq(201)
                    Cypress.env('id', response.body.agendamentoId)
                })
            cy.getToken(funcionario.matricula, funcionario.senha)
        })

        it('Deve cancelar o agendamento com sucesso', () => {
            cy.deleteAgendamento(Cypress.env('id'))
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response.body.message).to.eq("Agendamento cancelado com sucesso")
                })
        })


    })

    it('Deve retornar 404 quando o agendamento não existe', () => {
        cy.deleteAgendamento(new Types.ObjectId())
            .then(response => {
                expect(response.status).to.eq(404)
                expect(response.body.error).to.eq("Agendamento não encontrado")
            })
    })
})