/* global cy */
describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true);
  });
  it('simulate error response', function() {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/ingredients.json',
      response: [],
      status: 404
    });
    cy.visit('http://localhost:3000');
    cy.get('[class^="Modal__Modal"]').contains('Something did not work !');
    cy.get('[class^="Backdrop__Backdrop"]').click();
    cy.get('[class^="Modal__Modal"]').should('not.be.visible');
  });
});