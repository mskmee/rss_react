beforeEach(() => {
  cy.visit('/cards');
});

describe('Characters spec', () => {
  it('Should got page title', () => {
    cy.contains('h2', /cards/i);
  });
});

describe('Load cards on the page', () => {
  it.only('Should load cards on the page', () => {
    cy.intercept(
      {
        method: 'GET',
        url: 'cards',
      },
      ['hello']
    ).as('getUsers'); //
  });
});
