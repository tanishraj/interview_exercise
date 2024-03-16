describe('Home Page', () => {
  it('should have 20 articles on the home page', () => {
    cy.visit('http://localhost:1234/');
    cy.get('.article-link').should($p => {
      expect($p).to.have.length(20);
    });
  });

  it('should redirect to article details page on click', () => {
    cy.visit('http://localhost:1234/');
    cy.get('.article-link');
    cy.get('.article-link').first().click();
    cy.url().should('include', '/article/');
  });
});
