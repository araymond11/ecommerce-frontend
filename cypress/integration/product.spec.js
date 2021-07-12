describe('renders the product page', () => {

  beforeEach(() => {
    cy.visit('/products');
  });

  it('renders the product page correctly', () => {
    cy.get('.products_container').should('exist');
  });

  it('redirects to the product detail', () => {
    cy.get('button').first().click();
    cy.get('.productDetail__container').should('exist');
  });
  
});