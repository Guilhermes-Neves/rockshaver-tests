describe('Login', () => {
  beforeEach(() => {
    cy.configurarViewportEAcessarHome()
  })

  it('Deve logar como barbeiro', () => {
    const funcionario = {
      matricula: 1007,
      senha: 'pwd123',
      nome: 'Slash'
    }

    cy.login(funcionario)
    cy.verificarUsuarioLogado(funcionario)
  })

  it('Não deve logar com a senha inválida', () => {
    const funcionario = {
      matricula: 1008,
      senha: 'incorreta'
    }

    cy.login(funcionario)
    cy.verificarToast('Falha ao realizar login. Verifique suas credenciais.')
  })

  it('Não deve logar quando a matricula não existe', () => {
    const funcionario = {
      matricula: 9999,
      senha: 'pwd123'
    }

    cy.login(funcionario)
    cy.verificarToast('Falha ao realizar login. Verifique suas credenciais.')
  })

  it('Não deve logar quando os campos não são preenchidos', () => {
    cy.get('form').submit()
    cy.verificarToast('Informe sua matrícula e sua senha!')
  })
})
