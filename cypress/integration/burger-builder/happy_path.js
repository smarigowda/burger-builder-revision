/* global cy */
describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true);
  })

  it('Visits the Burger Builder app', function() {
    cy.visit('http://localhost:3001');
    cy.get(':nth-child(5) > [class^="BuildControl__More"').click();
    cy.get('[class^="BuildControls__OrderButton"').click();
  });
})