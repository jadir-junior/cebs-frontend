describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Bem vinda(o)!')
    cy.contains('Eu estou tão feliz em te ver.')
  })
})
