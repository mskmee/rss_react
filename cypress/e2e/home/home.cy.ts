beforeEach(() => {
  cy.visit('');
});

describe('Home spec', () => {
  it('Should have h3 title', () => {
    cy.get('h3').first().should('have.text', 'Welcome to the Rick and Morty world!');
  });
  it('Should have link to cards', () => {
    cy.get('a').last().should('have.text', 'Know more');
  });
  it('Should open cards component on click', () => {
    cy.get('a').last().click();
    cy.url().should('include', '/cards');
  });
});
