describe('Not found page spec', () => {
  it('Should got 404 title', () => {
    cy.visit('/dwa');
    cy.get('button').contains(/get me home/i);
  });
});
