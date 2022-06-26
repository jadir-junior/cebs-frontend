describe('Login Page Flow', () => {
  const URL = Cypress.env('BASE_URL')

  beforeEach(() => {
    cy.visit(URL)
  })

  it('if try login without all fields fill, It need message error required to all fields', () => {
    cy.get('cebs-button').click()
    cy.get('cebs-error').should('have.length', 2)
    cy.get('cebs-error').eq(0).should('contain', 'O Email é obrigatório')
    cy.get('cebs-error').eq(1).should('contain', 'A senha é obrigatória')
  })

  it('if try login with an email invalid, should has a error', () => {
    cy.get('cebs-input[type=email]').type('emailinvalid')
    cy.get('cebs-input[placeholder=Password]').type('Alice2707')
    cy.get('cebs-button').click()
    cy.get('cebs-error').should('have.length', 1)
    cy.get('cebs-error').should('contain', 'Informe um e-mail')
  })

  it('if try login with a password invalid, should has a error', () => {
    cy.get('cebs-input[type=email]').type('arodini@gmail.com')
    cy.get('cebs-input[placeholder=Password]').type('invalidemail')
    cy.get('cebs-button').click()
    cy.get('cebs-error').should('have.length', 1)
    cy.get('cebs-error').should('contain', 'Password should have minimum')
  })

  it('make login and go to home page', () => {
    cy.get('cebs-input[type=email]').type('arodine@gmail.com')
    cy.get('cebs-input[placeholder=Password]').type('Alice2707')
    cy.get('cebs-button').click()
    cy.url().should('eq', `${URL}/home`)
  })

  it('should go to register page', () => {
    cy.get('[data-testid="register"]').click()
    cy.url().should('eq', `${URL}/auth/register`)
  })

  it('should go to forgot password page', () => {
    cy.get('[data-testid="forgot-password"]').click()
    cy.url().should('eq', `${URL}/auth/forgot-password`)
  })
})
