import { Types } from 'mongoose'

describe('POST /api/agendamentos/:id/lembrete', () => {
    const funcionario = {
        matricula: '1005',
        senha: 'pwd123'
    }
    beforeEach(() => {
        cy.getToken(funcionario.matricula, funcionario.senha)
    })


    context('Quando tenho um agendamento', () => {
        const agendamento = {
            nomeCliente: 'Miguel Dias',
            emailCliente: 'dias@gmail.com',
            data: '10/01/2025',
            hora: '10:00',
            codigoServico: 2,
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

        it('Deve poder enviar um lembrete por email', () => {
            cy.enviarLembrete(Cypress.env('id'))
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response.body.message).to.eq("Lembrete enviado com sucesso")
                })

                cy.findOne(
                    {agendamentoId: new Types.ObjectId(Cypress.env('id'))},
                    {collection: 'lembretes'}
                ).then((result) => {
                    expect(result.conteudoHtml).to.include(agendamento.nomeCliente)
                })
        })
    })

    it('Deve retornar 404 quando o agendamento não existe', () => {
        cy.enviarLembrete(new Types.ObjectId())
            .then(response => {
                expect(response.status).to.eq(404)
            })
    })
})