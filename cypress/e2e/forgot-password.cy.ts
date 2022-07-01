describe('Forgot password page and Check your email page Flow', () => {
  const BASE_URL = Cypress.env('BASE_URL')
  const URL = `${BASE_URL}/auth/login`

  beforeEach(() => {
    cy.visit(URL)
    cy.get('[data-testid="forgot-password"]').click()
  })

  it('should has title, description and components', () => {
    cy.get('cebs-title').should('contain', 'Esqueceu sua senha?')
    cy.get('cebs-text').should('contain', 'Preencha seu e-mail abaixo')
    cy.get('cebs-input').should('have.length', 1)
    cy.get('cebs-button').should('have.length', 1)
    cy.get('cebs-link').should('have.length', 1)
    cy.get('cebs-icon-button').should('have.length', 1)
  })

  it('if try send without e-mail field fill, It need message error required', () => {
    cy.get('cebs-button').click()
    cy.get('cebs-error').should('contain', 'O Email é obrigatório')
  })

  it('if try login with an email invalid, should has a error', () => {
    cy.get('cebs-input[type=email]').type('emailinvalid')
    cy.get('cebs-button').click()
    cy.get('cebs-error').should('contain', 'Informe um e-mail')
  })

  it('should go to login page if clicked on link', () => {
    cy.get('cebs-link').click()
    cy.url().should('eq', `${BASE_URL}/auth/login`)
  })

  it('should go to login page if clicked on icon button', () => {
    cy.get('cebs-icon-button').click()
    cy.url().should('eq', `${BASE_URL}/auth/login`)
  })

  it.only('send email to reset password', () => {
    cy.get('cebs-input[type=email]').type('arodine@gmail.com')
    cy.get('cebs-button').click()
    cy.url().should('eq', `${BASE_URL}/auth/check-your-email`)
    cy.get('cebs-title').should('contain', 'Verifique seu email')
    cy.get('cebs-text').should(
      'contain',
      'Nós enviamos uma recuperação de senha para seu email'
    )
  })
})
