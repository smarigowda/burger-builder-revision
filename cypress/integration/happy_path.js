/* global cy */
describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true);
  });
  it('Visits the Burger Builder app', function() {
    cy.visit('http://localhost:3000');
    cy.get(':nth-child(5) > [class^="BuildControl__More"').click();
    cy.get('[class^="BuildControls__OrderButton"').click();
    cy.get('[class^="Modal__Modal__"]').should('be.visible');
    cy.get('[class*="Button__Danger"]').click();
    cy.get('[class^="Modal__Modal__"]').should('not.be.visible');
  });
})