describe('Pre-Cadastro', () => {
  it('Deve fazer o pré cadastro com sucesso', () => {
    const usuario = {
      nome: 'Guilherme Neves',
      email: 'guilherme@gmail.com'
    }
    
    cy.iniciarPreCadastro(usuario)
    cy.verificarPreCadastro(usuario)
  })

  it('Campos obrigatórios', () => {
    cy.iniciarPreCadastro()
    cy.verificarAlerta('Nome Completo', 'O campo nome é obrigatório.')
    cy.verificarAlerta('E-mail', 'O campo e-mail é obrigatório.')
  })

  it('Nao deve fazer o pré-cadastro apenas com o primeiro nome', () => {
    const usuario = {
      nome: 'Guilherme',
      email: 'guilherme@gmail.com'
    }

    cy.iniciarPreCadastro(usuario)
    cy.verificarAlerta('Nome Completo', 'Informe seu nome completo.')
  })

  it('Nao deve fazer o pré-cadastro com o email incorreto', () => {
    const usuario = {
      nome: 'Guilherme Neves',
      email: 'www.link.com'
    }

    cy.iniciarPreCadastro(usuario)
    cy.verificarAlerta('E-mail', 'O e-mail inserido é inválido.')
  })
})