import calendario from '../fixtures/calendario.json'
import agendamentos from '../fixtures/agendamentos.json'

describe('Agendamento', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/calendario', {
            statusCode: 200,
            body: calendario
        }).as('getCalendario')
    })
    
    it('Deve fazer o pré cadastro com sucesso', () => {
        const agendamento = agendamentos.sucesso

        cy.deleteMany(
            {emailCliente: agendamento.usuario.email},
            {collection: 'agendamentos'}
        ).then(result => {
            cy.log(result)
        })
        
        cy.preCadastro(agendamento.usuario)
        cy.verificarPreCadastro(agendamento.usuario)
        
        cy.iniciarAgendamento()
        cy.escolheProfissional(agendamento.profissional.nome)
        cy.selecionarServico(agendamento.servico)
        cy.escolherDiaDoAgendamento(agendamento.dia)
        cy.escolherHorarioDoAgendamento(agendamento.hora)
        cy.finalizaAgendamento()

        cy.get('img[alt="Agendamento com Sucesso"]')
            .should('be.visible')
        cy.contains('h2', 'Let`s Rock')
            .should('be.visible')
        cy.contains('h3', 'Tudo certo por aqui! Seu horário está confirmado.')
            .should('be.visible')
    })

    it('Deve mostrar o slot ocupado', () => {
        const agendamento = agendamentos.duplicado

        cy.deleteMany(
            {emailCliente: agendamento.usuario.email},
            {collection: 'agendamentos'}
        ).then(result => {
            cy.log(result)
        })

        cy.agendamentoApi(agendamento)
        
        cy.preCadastro(agendamento.usuario)
        cy.verificarPreCadastro(agendamento.usuario)
        cy.iniciarAgendamento()
        cy.escolheProfissional(agendamento.profissional.nome)
        cy.selecionarServico(agendamento.servico)
        cy.escolherDiaDoAgendamento(agendamento.dia)

        cy.get(`[slot="${agendamento.hora} - ocupado"]`)
            .should('be.visible')
            .find('svg')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
    })

    it('Deve retornar uma notificação no sumário no caso de conflito de disponibilidade', () => {
        const agendamento = agendamentos.conflito

        cy.deleteMany(
            {emailCliente: agendamento.usuario.email},
            {collection: 'agendamentos'}
        ).then(result => {
            cy.log(result)
        })
        
        cy.preCadastro(agendamento.usuario)
        cy.verificarPreCadastro(agendamento.usuario)
        cy.iniciarAgendamento()
        cy.escolheProfissional(agendamento.profissional.nome)
        cy.selecionarServico(agendamento.servico)
        cy.escolherDiaDoAgendamento(agendamento.dia)
        cy.escolherHorarioDoAgendamento(agendamento.hora)
        cy.agendamentoApi(agendamento)
        cy.finalizaAgendamento()

        cy.get('.alert-error')
            .should('be.visible')
            .and('have.text', 'Já existe um agendamento para esta data e hora. Por favor, escolha outro horário.')
    })
})