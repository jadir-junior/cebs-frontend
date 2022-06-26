describe('Check your email page', () => {
  const BASE_URL = Cypress.env('BASE_URL')
  const URL = `${BASE_URL}/auth/forgot-password`

  beforeEach(() => {
    cy.visit(URL)
    cy.get('cebs-input[type=email]').type('arodine@gmail.com')
    cy.get('cebs-button').click()
  })

  it('should has title, description and components', () => {
    cy.get('cebs-title').should('contain', 'Verifique seu email')
    cy.get('cebs-text').should(
      'contain',
      'Nós enviamos uma recuperação de senha para seu email'
    )
    cy.get('cebs-link').should('have.length', 1)
    cy.get('cebs-icon-button').should('have.length', 1)
  })

  it('should go to login page', () => {
    cy.get('cebs-link').click()
    cy.url().should('eq', `${BASE_URL}/auth/login`)
  })

  it('should go back on history when Its clicked in back button', () => {
    cy.get('cebs-icon-button').click()
    cy.url().should('eq', `${BASE_URL}/auth/forgot-password`)
  })
})
