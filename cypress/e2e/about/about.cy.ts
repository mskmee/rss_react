/// <reference types="cypress" />

describe('About us Spec', () => {
  it('Should have page title', () => {
    cy.on('window:load', () => console.log('load'));
    cy.on('window:unload', () => console.log('unload'));
    cy.visit('about');
    cy.contains('h2', /about us/i);
  });
});
