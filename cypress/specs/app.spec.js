describe('Browswer-Api app', function() {
  beforeEach(() => {
    cy.open();
  });

  it('should be loaded', function() {
    cy.get("#nav").should("not.be.visible");
  })
})