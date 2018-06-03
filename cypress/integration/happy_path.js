/* global cy */
describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true);
  });
  it('should be able to visit Burger Builder app', function() {
    cy.visit('http://localhost:3000');
    cy.get(':nth-child(5) > [class^="BuildControl__More"').click();
    cy.get('[class^="BuildControls__OrderButton"').click();
    cy.get('[class^="Modal__Modal__"]').should('be.visible');
    cy.get('[class*="Button__Danger"]').first().click();
    cy.get('[class^="Modal__Modal__"]').should('not.be.visible');
  });
  it('continue on OrderSummary', function() {
    cy.server();
    cy.route({
      method: 'POST',
      url: 'https://react-my-burger-43a92.firebaseio.com/orders.json',
      response: [],
      status: 200
    });
    cy.visit('http://localhost:3000');
    cy.get(':nth-child(5) > [class^="BuildControl__More"').click();
    cy.get('[class^="BuildControls__OrderButton"').click();
    cy.get('[class^="Modal__Modal__"]').should('be.visible');
    cy.get('[class*="Button__Danger"]').first().click();
    cy.get('[class^="Modal__Modal__"]').should('not.be.visible');
    cy.get('[class^="BuildControls__OrderButton"]').click();
    cy.get('[class*="Button__Success"]').click();
    cy.get('h1').contains('Hope it tastes well !');
    cy.get('[class*="Button__Success"]').click();
    cy.get('[class*="ContactData__ContactData"] > h1').contains('Enter your contact info');
    cy.get('form > [class*="Button__Button"]').click();
    cy.get(':nth-child(5) > [class^="BuildControl__More"').click();
  })
})