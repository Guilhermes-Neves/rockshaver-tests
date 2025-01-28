import { profissional, agendamentos } from '../fixtures/agendamentos.json'

describe('Meus Agendamentos', () => {
  before(() => {
    cy.criarAgendamentoApi(profissional, agendamentos)
  })

  beforeEach(() => {
    cy.configurarViewportEAcessarHome()
    cy.login(profissional)
    cy.verificarUsuarioLogado(profissional)
  })

  it('Deve exibir os meus agendamentos', () => {
    cy.get('ul li')
      .should('be.visible')
      .and('have.length', agendamentos.length)
      .each(($li, index) => {
        const agendamento = agendamentos[index]
        const resultado = `${agendamento.servico.descricao} no dia ${agendamento.data} às ${agendamento.hora}`

        cy.wrap($li)
          .invoke('text')
          .should('contain', agendamento.usuario.nome)
          .and('contain', resultado)
      })
  })

  it('Deve cancelar um agendamento', () => {
    const agendamento = agendamentos.find(x=> x.usuario.email === 'peter@stark.com')

    cy.contains('ul li', agendamento.usuario.nome).as('agendamentoItem')
    cy.get('@agendamentoItem')
      .should('be.visible')
      .click()
    cy.contains('ul li span', 'Cancelar agendamento')
      .should('be.visible')
      .click()
    cy.verificarToast('Agendamento cancelado com sucesso!')

    cy.get('@agendamentoItem')
      .should('not.exist')
  })

  it('Deve enviar uma solicitação de lembrete para o cliente', () => {
    const agendamento = agendamentos.find(x=> x.usuario.email === 'destino@marvel.com')

    cy.contains('ul li', agendamento.usuario.nome).as('agendamentoItem')
    cy.get('@agendamentoItem')
      .should('be.visible')
      .click()
    cy.contains('ul li span', 'Enviar lembrete por e-mail')
      .should('be.visible')
      .click()
    cy.verificarToast('Lembrete enviado com sucesso!')
  })
})
