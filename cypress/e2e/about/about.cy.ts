/// <reference types="cypress" />

// beforeEach(() => {
//   cy.visit('about');
//   cy.on('window:load', (e) => {
//     console.log(e);
//   });
// });

describe('About us Spec', () => {
  it('Should have page titile', () => {
    cy.visit('about');
    cy.contains('h2', /about us/i);
  });
});
