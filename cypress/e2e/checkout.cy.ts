describe('Checkout Page', () => {
  beforeEach(() => {
    cy.visit('/');
    // Clear localStorage before each test
    cy.clearLocalStorage();
  });

  it('should allow quantity changes in checkout order summary', () => {
    // Add a product to cart
    cy.get('#products').scrollIntoView();
    cy.get('[data-testid="add-to-cart-btn-jeera-soda"]').click();
    cy.contains('button', 'Add to Cart').click();
    
    // Go to checkout
    cy.get('[aria-label="Shopping cart"]').click();
    cy.get('[data-testid="cart-drawer"]').within(() => {
      cy.contains('Proceed to Checkout').click();
    });
    
    // Verify we're on checkout page
    cy.url().should('include', '/checkout');
    cy.contains('h1', 'Checkout').should('be.visible');
    
    // Verify initial quantity and total
    cy.contains('50 bottles').should('be.visible');
    cy.contains('₹1,500').should('be.visible'); // 50 * 30
    
    // Increase quantity using + button
    cy.get('[aria-label="Increase Jeera Soda quantity"]').click();
    
    // Verify quantity and total updated
    cy.contains('100 bottles').should('be.visible');
    cy.contains('₹3,000').should('be.visible'); // 100 * 30
    
    // Verify total in summary also updated
    cy.contains('Total:').parent().should('contain', '₹3,000');
    
    // Decrease quantity using - button
    cy.get('[aria-label="Decrease Jeera Soda quantity"]').click();
    
    // Verify quantity decreased back
    cy.contains('50 bottles').should('be.visible');
    cy.contains('₹1,500').should('be.visible'); // 50 * 30
    
    // Verify total in summary also updated
    cy.contains('Total:').parent().should('contain', '₹1,500');
  });

  it('should remove items from checkout order summary', () => {
    // Add multiple products to cart
    cy.get('#products').scrollIntoView();
    cy.get('[data-testid="add-to-cart-btn-jeera-soda"]').click();
    cy.contains('button', 'Add to Cart').click();
    
    cy.get('[data-testid="add-to-cart-btn-orange-soda"]').click();
    cy.contains('button', 'Add to Cart').click();
    
    // Go to checkout
    cy.get('[aria-label="Shopping cart"]').click();
    cy.get('[data-testid="cart-drawer"]').within(() => {
      cy.contains('Proceed to Checkout').click();
    });
    
    // Verify both items are present
    cy.contains('Jeera Soda').should('be.visible');
    cy.contains('Orange Soda').should('be.visible');
    cy.contains('Total:').parent().should('contain', '₹3,000'); // (50 * 30) + (50 * 30)
    
    // Remove one item
    cy.get('[aria-label="Remove Jeera Soda from cart"]').click();
    
    // Verify item removed and total updated
    cy.contains('Jeera Soda').should('not.exist');
    cy.contains('Orange Soda').should('be.visible');
    cy.contains('Total:').parent().should('contain', '₹1,500'); // 50 * 30
    
    // Verify toast notification
    cy.contains('Item removed').should('be.visible');
  });

  it('should redirect to products if cart becomes empty during checkout', () => {
    // Add one product to cart
    cy.get('#products').scrollIntoView();
    cy.get('[data-testid="add-to-cart-btn-jeera-soda"]').click();
    cy.contains('button', 'Add to Cart').click();
    
    // Go to checkout
    cy.get('[aria-label="Shopping cart"]').click();
    cy.get('[data-testid="cart-drawer"]').within(() => {
      cy.contains('Proceed to Checkout').click();
    });
    
    // Remove the only item
    cy.get('[aria-label="Remove Jeera Soda from cart"]').click();
    
    // Should show empty cart message
    cy.contains('Your cart is empty').should('be.visible');
    cy.contains('Add some products to proceed with checkout').should('be.visible');
    cy.contains('Continue Shopping').should('be.visible');
  });

  it('should respect minimum order quantities in checkout', () => {
    // Add a product to cart
    cy.get('#products').scrollIntoView();
    cy.get('[data-testid="add-to-cart-btn-1l-water-bottle"]').click();
    cy.contains('button', 'Add to Cart').click();
    
    // Go to checkout
    cy.get('[aria-label="Shopping cart"]').click();
    cy.get('[data-testid="cart-drawer"]').within(() => {
      cy.contains('Proceed to Checkout').click();
    });
    
    // Verify initial quantity is at minimum (50)
    cy.contains('50 bottles').should('be.visible');
    
    // Verify decrease button is disabled at minimum quantity
    cy.get('[aria-label="Decrease 1L Water Bottle quantity"]').should('be.disabled');
    
    // Increase quantity
    cy.get('[aria-label="Increase 1L Water Bottle quantity"]').click();
    cy.contains('100 bottles').should('be.visible');
    
    // Now decrease button should be enabled
    cy.get('[aria-label="Decrease 1L Water Bottle quantity"]').should('not.be.disabled');
    
    // Decrease back to minimum
    cy.get('[aria-label="Decrease 1L Water Bottle quantity"]').click();
    cy.contains('50 bottles').should('be.visible');
    
    // Decrease button should be disabled again
    cy.get('[aria-label="Decrease 1L Water Bottle quantity"]').should('be.disabled');
  });

  it('should handle multiple items with different quantities in checkout', () => {
    // Add multiple products with different quantities
    cy.get('#products').scrollIntoView();
    
    // Add Jeera Soda (50 bottles)
    cy.get('[data-testid="add-to-cart-btn-jeera-soda"]').click();
    cy.contains('button', 'Add to Cart').click();
    
    // Add Orange Soda and increase quantity
    cy.get('[data-testid="add-to-cart-btn-orange-soda"]').click();
    cy.get('[aria-label="Increase quantity"]').click(); // 100 bottles
    cy.contains('button', 'Add to Cart').click();
    
    // Go to checkout
    cy.get('[aria-label="Shopping cart"]').click();
    cy.get('[data-testid="cart-drawer"]').within(() => {
      cy.contains('Proceed to Checkout').click();
    });
    
    // Verify both items with correct quantities
    cy.contains('Jeera Soda').parent().parent().should('contain', '50');
    cy.contains('Orange Soda').parent().parent().should('contain', '100');
    
    // Verify individual totals
    cy.contains('Jeera Soda').parent().parent().should('contain', '₹1,500'); // 50 * 30
    cy.contains('Orange Soda').parent().parent().should('contain', '₹3,000'); // 100 * 30
    
    // Verify grand total
    cy.contains('Total:').parent().should('contain', '₹4,500'); // 1500 + 3000
    
    // Modify quantities in checkout
    cy.get('[aria-label="Increase Jeera Soda quantity"]').click();
    cy.contains('Jeera Soda').parent().parent().should('contain', '100');
    cy.contains('Total:').parent().should('contain', '₹6,000'); // 3000 + 3000
    
    cy.get('[aria-label="Decrease Orange Soda quantity"]').click();
    cy.contains('Orange Soda').parent().parent().should('contain', '50');
    cy.contains('Total:').parent().should('contain', '₹4,500'); // 3000 + 1500
  });

  it('should maintain checkout form data when quantities change', () => {
    // Add a product to cart
    cy.get('#products').scrollIntoView();
    cy.get('[data-testid="add-to-cart-btn-jeera-soda"]').click();
    cy.contains('button', 'Add to Cart').click();
    
    // Go to checkout
    cy.get('[aria-label="Shopping cart"]').click();
    cy.get('[data-testid="cart-drawer"]').within(() => {
      cy.contains('Proceed to Checkout').click();
    });
    
    // Fill in some form data
    cy.get('#name').type('John Doe');
    cy.get('#email').type('john@example.com');
    cy.get('#phone').type('9876543210');
    
    // Change quantity
    cy.get('[aria-label="Increase Jeera Soda quantity"]').click();
    
    // Verify form data is still there
    cy.get('#name').should('have.value', 'John Doe');
    cy.get('#email').should('have.value', 'john@example.com');
    cy.get('#phone').should('have.value', '9876543210');
    
    // Verify quantity change took effect
    cy.contains('100 bottles').should('be.visible');
    cy.contains('Total:').parent().should('contain', '₹3,000');
  });
});