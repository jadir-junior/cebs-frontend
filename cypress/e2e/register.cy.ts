describe('Register Page Flow', () => {
  const URL = `${Cypress.env('BASE_URL')}/auth/register`

  beforeEach(() => {
    cy.visit(URL)
  })

  it('should has title, description and terms', () => {
    cy.get('cebs-title').should('contain', 'Crie uma Nova Conta')
    cy.get('[data-testid="description"]').should(
      'contain',
      'Crie uma nova conta para poder gerenciar suas contabilidades'
    )
    cy.get('.wrapper-checkbox').should(
      'contain',
      'Eu aceito os Termos de Serviço e a Politica de Privacidade'
    )
  })

  it('if try register without all fields fill, It need message error required to all fields', () => {
    cy.get('cebs-button').click()
    cy.get('cebs-error').should('have.length', 4)
    cy.get('cebs-error').eq(0).should('contain', 'O nome é obrigatório')
    cy.get('cebs-error').eq(1).should('contain', 'O Email é obrigatório')
    cy.get('cebs-error').eq(2).should('contain', 'A senha é obrigatória')
    cy.get('cebs-error').eq(3).should('contain', 'É obrigatório concordar com os termos')
  })

  it('if try register with a name invalid, should has a error', () => {
    cy.get('cebs-input[placeholder=Nome]').type('An')
    cy.get('cebs-input[type=email]').type('arodine@gmail.com')
    cy.get('cebs-input[placeholder=Senha]').type('Alice2707')
    cy.get('cebs-checkbox').click()
    cy.get('cebs-button').click()
    cy.get('cebs-error').should('have.length', 1)
    cy.get('cebs-error').should('contain', 'O nome deve conter no mínimo 3 letras')
  })

  it('if try register with an email invalid, should has a error', () => {
    cy.get('cebs-input[placeholder=Nome]').type('Alice')
    cy.get('cebs-input[type=email]').type('invalidemail')
    cy.get('cebs-input[placeholder=Senha]').type('Alice2707')
    cy.get('cebs-checkbox').click()
    cy.get('cebs-button').click()
    cy.get('cebs-error').should('have.length', 1)
    cy.get('cebs-error').should('contain', 'Informe um e-mail valido')
  })

  it('if try register with a password invalid, should has a error', () => {
    cy.get('cebs-input[placeholder=Nome]').type('Alice')
    cy.get('cebs-input[type=email]').type('arodine@gmail.com')
    cy.get('cebs-input[placeholder=Senha]').type('invalidpassword')
    cy.get('cebs-checkbox').click()
    cy.get('cebs-button').click()
    cy.get('cebs-error').should('have.length', 1)
    cy.get('cebs-error').should('contain', 'Password should have minimum')
  })

  it('make a register and go to home page', () => {
    cy.get('cebs-input[placeholder=Nome]').type('Alice')
    cy.get('cebs-input[type=email]').type('arodine@gmail.com')
    cy.get('cebs-input[placeholder=Senha]').type('Alice2707')
    cy.get('cebs-checkbox').click()
    cy.get('cebs-button').click()
    cy.url().should('eq', `${Cypress.env('BASE_URL')}/home`)
  })
})
