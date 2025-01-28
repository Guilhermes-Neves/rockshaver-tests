Cypress.Commands.add('iniciarAgendamento', () => {
    cy.get('a[href="/agendamento"]')
        .should('be.visible')
        .click();
});

Cypress.Commands.add('escolheProfissional', (profissional) => {
    cy.contains('span', 'Membros da Equipe')
        .should('be.visible');

    cy.get(`img[alt="${profissional}"]`)
        .parent()
        .click();
});

Cypress.Commands.add('selecionarServico', (servico) => {
    cy.contains('span', 'Serviços')
        .should('be.visible');

    cy.get(`img[alt="${servico.descricao}"]`)
        .parent()
        .click();
});

Cypress.Commands.add('escolherDiaDoAgendamento', (dia) => {
    cy.contains('span', 'Dias Disponíveis')
        .should('be.visible');

    cy.contains('div.dia-semana', dia)
        .click();
});

Cypress.Commands.add('escolherHorarioDoAgendamento', (hora) => {
    cy.contains('span', 'Horários Disponíveis')
        .should('be.visible');
    cy.contains('div.hora-opcao', hora)
        .click();
});

Cypress.Commands.add('finalizaAgendamento', () => {
    cy.contains('button', 'Confirmar e reservar')
        .click();
});
