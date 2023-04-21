beforeEach(() => {
  cy.visit('');
});

describe('Header Spec', () => {
  it('Should have valid a tags', () => {
    cy.get('a').each(($a) => {
      const message = $a.text();
      expect($a, message).to.have.attr('href').not.contain('undefined');
    });
  });

  it('Should have href on main page in logo', () => {
    cy.contains('a').first().should('have.attr', 'href', '/');
  });

  it('Should have href on characters page', () => {
    cy.contains('a', /characters/i).should('have.attr', 'href', '/cards');
  });

  it('Should have href on about us page', () => {
    cy.contains('a', /about us/i).should('have.attr', 'href', '/about');
  });

  it('Should have href on form page', () => {
    cy.contains('a', /form/i).should('have.attr', 'href', '/form');
  });
});
