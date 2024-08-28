describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('suco de laranja{enter}')
  })
  it('segundo', () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('suco de acerola{enter}')
  })
  it('tres', () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('suco de açai{enter}')
  })
})