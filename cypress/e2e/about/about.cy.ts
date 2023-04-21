beforeEach(() => {
  cy.visit('about');
});

describe('About us Spec', () => {
  it('Should have page titile', () => {
    cy.contains('h2', /about us/i);
  });
});
