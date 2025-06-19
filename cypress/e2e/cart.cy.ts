describe('Cart Flow', () => {
  beforeEach(() => {
    cy.visit('/');
    // Clear localStorage before each test
    cy.clearLocalStorage();
  });

  it('should add each SKU at MOQ and verify grand total', () => {
    // Expected products and their MOQ
    const products = [
      { testId: '20l-water-can', name: '20L Water Can', price: 50, moq: 50 },
      { testId: '1l-water-bottle', name: '1L Water Bottle', price: 20, moq: 50 },
      { testId: 'jeera-soda', name: 'Jeera Soda', price: 30, moq: 50 },
      { testId: 'orange-soda', name: 'Orange Soda', price: 30, moq: 50 },
      { testId: 'ginger-ale-soda', name: 'Ginger Ale', price: 30, moq: 50 },
    ];

    let expectedTotal = 0;
    let expectedItems = 0;

    // Add each product to cart
    products.forEach((product) => {
      // Scroll to products section
      cy.get('#products').scrollIntoView();
      
      // Click add to cart button
      cy.get(`[data-testid="add-to-cart-btn-${product.testId}"]`).click();
      
      // Verify quantity selector modal opens with correct MOQ
      cy.get('input[type="number"]').should('have.value', product.moq);
      
      // Verify subtotal in modal
      const subtotal = product.price * product.moq;
      cy.contains(`₹${subtotal.toLocaleString('en-IN')}`).should('be.visible');
      
      // Click Add to Cart in modal
      cy.contains('button', 'Add to Cart').click();
      
      // Update expected totals
      expectedTotal += subtotal;
      expectedItems += product.moq;
      
      // Verify cart badge updates
      cy.get('header').within(() => {
        cy.get('[aria-label="Shopping cart"]').within(() => {
          cy.get('.bg-\\[var\\(--coral-highlight\\)\\]').should('contain', expectedItems > 99 ? '99+' : expectedItems.toString());
        });
      });
    });

    // Open cart drawer
    cy.get('[aria-label="Shopping cart"]').click();
    
    // Verify cart drawer opens
    cy.get('[data-testid="cart-drawer"]').should('be.visible');
    
    // Verify all products are in cart
    products.forEach((product) => {
      cy.get('[data-testid="cart-drawer"]').within(() => {
        cy.contains(product.name).should('be.visible');
        cy.contains(`${product.moq} bottles`).should('be.visible');
      });
    });
    
    // Verify grand total
    cy.get('[data-testid="cart-drawer"]').within(() => {
      cy.contains('Total:').parent().should('contain', `₹${expectedTotal.toLocaleString('en-IN')}`);
    });
  });

  it('should proceed to checkout and verify required field errors', () => {
    // First add a product to cart
    cy.get('#products').scrollIntoView();
    cy.get('[data-testid="add-to-cart-btn-20l-water-can"]').click();
    cy.contains('button', 'Add to Cart').click();
    
    // Open cart and proceed to checkout
    cy.get('[aria-label="Shopping cart"]').click();
    cy.get('[data-testid="cart-drawer"]').within(() => {
      cy.contains('Proceed to Checkout').click();
    });
    
    // Verify we're on checkout page
    cy.url().should('include', '/checkout');
    cy.contains('h1', 'Checkout').should('be.visible');
    
    // Try to submit form without filling required fields
    cy.contains('button', 'Place Order').click();
    
    // Verify required field errors appear
    const requiredFields = [
      'Name must be at least 2 characters',
      'Please enter a valid email address',
      'Phone number must be at least 10 digits',
      'Address must be at least 10 characters',
      'City is required',
      'State is required',
      'Pincode must be 6 digits',
    ];
    
    requiredFields.forEach((errorMessage) => {
      cy.contains(errorMessage).should('be.visible');
    });
    
    // Fill in valid data
    cy.get('#name').type('John Doe');
    cy.get('#email').type('john@example.com');
    cy.get('#phone').type('9876543210');
    cy.get('#address').type('123 Main Street, Apartment 4B');
    cy.get('#city').type('Chennai');
    cy.get('#state').type('Tamil Nadu');
    cy.get('#pincode').type('600001');
    
    // Submit form
    cy.contains('button', 'Place Order').click();
    
    // Verify success (should redirect to bulk orders section)
    cy.url().should('include', '/#bulk-orders');
    cy.contains('Thank you for your inquiry!').should('be.visible');
  });

  it('should handle cart quantity updates correctly', () => {
    // Add a product to cart
    cy.get('#products').scrollIntoView();
    cy.get('[data-testid="add-to-cart-btn-jeera-soda"]').click();
    cy.contains('button', 'Add to Cart').click();
    
    // Open cart drawer
    cy.get('[aria-label="Shopping cart"]').click();
    
    // Verify initial quantity
    cy.get('[data-testid="cart-drawer"]').within(() => {
      cy.contains('50 bottles').should('be.visible');
      cy.contains('₹1,500').should('be.visible'); // 50 * 30
    });
    
    // Increase quantity
    cy.get('[data-testid="cart-drawer"]').within(() => {
      cy.get('[aria-label="Increase Jeera Soda quantity"]').click();
    });
    
    // Verify quantity updated
    cy.get('[data-testid="cart-drawer"]').within(() => {
      cy.contains('100 bottles').should('be.visible');
      cy.contains('₹3,000').should('be.visible'); // 100 * 30
    });
    
    // Decrease quantity
    cy.get('[data-testid="cart-drawer"]').within(() => {
      cy.get('[aria-label="Decrease Jeera Soda quantity"]').click();
    });
    
    // Verify quantity decreased
    cy.get('[data-testid="cart-drawer"]').within(() => {
      cy.contains('50 bottles').should('be.visible');
      cy.contains('₹1,500').should('be.visible'); // 50 * 30
    });
    
    // Remove item
    cy.get('[data-testid="cart-drawer"]').within(() => {
      cy.get('[aria-label="Remove Jeera Soda from cart"]').click();
    });
    
    // Verify cart is empty
    cy.get('[data-testid="cart-drawer"]').within(() => {
      cy.contains('Your cart is empty').should('be.visible');
    });
  });

  it('should persist cart state after page refresh', () => {
    // Add a product to cart
    cy.get('#products').scrollIntoView();
    cy.get('[data-testid="add-to-cart-btn-orange-soda"]').click();
    cy.contains('button', 'Add to Cart').click();
    
    // Verify cart badge shows item
    cy.get('[aria-label="Shopping cart"]').within(() => {
      cy.get('.bg-\\[var\\(--coral-highlight\\)\\]').should('contain', '50');
    });
    
    // Refresh page
    cy.reload();
    
    // Verify cart state persisted
    cy.get('[aria-label="Shopping cart"]').within(() => {
      cy.get('.bg-\\[var\\(--coral-highlight\\)\\]').should('contain', '50');
    });
    
    // Open cart and verify product is still there
    cy.get('[aria-label="Shopping cart"]').click();
    cy.get('[data-testid="cart-drawer"]').within(() => {
      cy.contains('Orange Soda').should('be.visible');
      cy.contains('50 bottles').should('be.visible');
    });
  });

  it('should handle keyboard navigation and screen reader accessibility', () => {
    // Test keyboard navigation on add to cart button
    cy.get('#products').scrollIntoView();
    cy.get('[data-testid="add-to-cart-btn-20l-water-can"]').focus().type('{enter}');
    
    // Verify modal opens and has proper ARIA attributes
    cy.get('[role="dialog"]').should('be.visible');
    cy.get('[role="dialog"]').should('have.attr', 'aria-labelledby');
    
    // Verify the dialog title exists and is accessible
    cy.get('[role="dialog"]').then(($dialog) => {
      const labelledBy = $dialog.attr('aria-labelledby');
      cy.get(`#${labelledBy}`).should('exist').should('contain', 'Select quantity for 20L Water Can');
    });
    
    // Test ESC key closes modal
    cy.get('body').type('{esc}');
    cy.get('[role="dialog"]').should('not.exist');
    
    // Test cart drawer accessibility
    cy.get('[aria-label="Shopping cart"]').focus().type('{enter}');
    cy.get('[data-testid="cart-drawer"]').should('be.visible');
    cy.get('[data-testid="cart-drawer"]').should('have.attr', 'role', 'dialog');
    cy.get('[id="cart-drawer-title"]').should('be.visible');
  });

  it('should handle quantity input snapping correctly', () => {
    // Add a product to cart
    cy.get('#products').scrollIntoView();
    cy.get('[data-testid="add-to-cart-btn-jeera-soda"]').click();
    
    // Type irregular number in quantity field
    cy.get('[data-testid="qty-input-jeera-soda"]').clear().type('59');
    
    // Verify it snaps to 50 (nearest valid quantity)
    cy.get('[data-testid="qty-input-jeera-soda"]').should('have.value', '50');
    
    // Type another irregular number
    cy.get('[data-testid="qty-input-jeera-soda"]').clear().type('149');
    
    // Verify it snaps to 150
    cy.get('[data-testid="qty-input-jeera-soda"]').should('have.value', '150');
    
    // Add to cart
    cy.contains('button', 'Add to Cart').click();
    
    // Verify correct quantity was added
    cy.get('[aria-label="Shopping cart"]').click();
    cy.get('[data-testid="cart-drawer"]').within(() => {
      cy.contains('150 bottles').should('be.visible');
    });
  });

  it('should verify dialog accessibility attributes', () => {
    // Add a product to cart to open quantity selector
    cy.get('#products').scrollIntoView();
    cy.get('[data-testid="add-to-cart-btn-20l-water-can"]').click();
    
    // Verify dialog has proper accessibility attributes
    cy.get('[role="dialog"]')
      .should('have.attr', 'aria-labelledby')
      .then((labelledBy) => {
        // Verify the title element exists with the correct ID
        cy.get(`#${labelledBy}`).should('exist').should('contain', 'Select quantity for 20L Water Can');
      });
    
    // Close modal
    cy.get('body').type('{esc}');
    
    // Test cart drawer accessibility
    cy.get('[aria-label="Shopping cart"]').click();
    cy.get('[data-testid="cart-drawer"]')
      .should('have.attr', 'role', 'dialog')
      .should('have.attr', 'aria-labelledby', 'cart-drawer-title');
    
    cy.get('#cart-drawer-title').should('exist').should('contain', 'Your Cart');
  });

  it('should not show console warnings for missing DialogTitle', () => {
    // Monitor console for warnings
    cy.window().then((win) => {
      cy.stub(win.console, 'warn').as('consoleWarn');
    });
    
    // Add a product to cart to open quantity selector
    cy.get('#products').scrollIntoView();
    cy.get('[data-testid="add-to-cart-btn-20l-water-can"]').click();
    
    // Verify dialog opens
    cy.get('[role="dialog"]').should('be.visible');
    
    // Close modal
    cy.get('body').type('{esc}');
    
    // Open cart drawer
    cy.get('[aria-label="Shopping cart"]').click();
    cy.get('[data-testid="cart-drawer"]').should('be.visible');
    
    // Verify no console warnings about missing DialogTitle
    cy.get('@consoleWarn').should('not.have.been.calledWith', 
      Cypress.sinon.match(/DialogContent requires a DialogTitle/));
  });

  it('should handle quantity increment and decrement buttons correctly in product modal', () => {
    // Add a product to cart
    cy.get('#products').scrollIntoView();
    cy.get('[data-testid="add-to-cart-btn-1l-water-bottle"]').click();

    // Verify initial quantity is MOQ (50)
    cy.get('[data-testid="qty-input-1l-water-bottle"]').should('have.value', '50');

    // Click increment button multiple times
    cy.get('[aria-label="Increase quantity"]').click();
    cy.get('[data-testid="qty-input-1l-water-bottle"]').should('have.value', '100');

    cy.get('[aria-label="Increase quantity"]').click();
    cy.get('[data-testid="qty-input-1l-water-bottle"]').should('have.value', '150');

    cy.get('[aria-label="Increase quantity"]').click();
    cy.get('[data-testid="qty-input-1l-water-bottle"]').should('have.value', '200');

    // Click decrement button
    cy.get('[aria-label="Decrease quantity"]').click();
    cy.get('[data-testid="qty-input-1l-water-bottle"]').should('have.value', '150');

    // Verify subtotal updates correctly
    cy.contains('₹3,000').should('be.visible'); // 150 * 20

    // Add to cart with the selected quantity
    cy.contains('button', 'Add to Cart').click();

    // Verify cart badge shows correct total
    cy.get('[aria-label="Shopping cart"]').within(() => {
      cy.get('.bg-\\[var\\(--coral-highlight\\)\\]').should('contain', '150');
    });

    // Open cart and verify quantity
    cy.get('[aria-label="Shopping cart"]').click();
    cy.get('[data-testid="cart-drawer"]').within(() => {
      cy.contains('1L Water Bottle').should('be.visible');
      cy.contains('150 bottles').should('be.visible');
      cy.contains('₹3,000').should('be.visible');
    });
  });

  it('should handle manual quantity input with snapping', () => {
    // Add a product to cart
    cy.get('#products').scrollIntoView();
    cy.get('[data-testid="add-to-cart-btn-jeera-soda"]').click();

    // Test various manual inputs
    const testCases = [
      { input: '123', expected: '100' }, // Rounds down to nearest 50
      { input: '175', expected: '200' }, // Rounds up to nearest 50
      { input: '25', expected: '50' },   // Below minimum, snaps to minimum
      { input: '0', expected: '50' },    // Zero, snaps to minimum
      { input: '-10', expected: '50' },  // Negative, snaps to minimum
    ];

    testCases.forEach(({ input, expected }) => {
      cy.get('[data-testid="qty-input-jeera-soda"]').clear().type(input);
      cy.get('[data-testid="qty-input-jeera-soda"]').should('have.value', expected);
    });

    // Add to cart with final quantity
    cy.contains('button', 'Add to Cart').click();

    // Verify cart reflects the snapped quantity
    cy.get('[aria-label="Shopping cart"]').click();
    cy.get('[data-testid="cart-drawer"]').within(() => {
      cy.contains('50 bottles').should('be.visible'); // Final snapped value
    });
  });

  it('should properly increment and decrement quantities without resetting', () => {
    // Add a product to cart
    cy.get('#products').scrollIntoView();
    cy.get('[data-testid="add-to-cart-btn-jeera-soda"]').click();

    // Verify initial quantity is 50
    cy.get('[data-testid="qty-input-jeera-soda"]').should('have.value', '50');

    // Increment several times and verify each step
    cy.get('[aria-label="Increase quantity"]').click();
    cy.get('[data-testid="qty-input-jeera-soda"]').should('have.value', '100');

    cy.get('[aria-label="Increase quantity"]').click();
    cy.get('[data-testid="qty-input-jeera-soda"]').should('have.value', '150');

    cy.get('[aria-label="Increase quantity"]').click();
    cy.get('[data-testid="qty-input-jeera-soda"]').should('have.value', '200');

    // Now decrement and verify
    cy.get('[aria-label="Decrease quantity"]').click();
    cy.get('[data-testid="qty-input-jeera-soda"]').should('have.value', '150');

    cy.get('[aria-label="Decrease quantity"]').click();
    cy.get('[data-testid="qty-input-jeera-soda"]').should('have.value', '100');

    // Verify decrement button is disabled when at minimum
    cy.get('[aria-label="Decrease quantity"]').click();
    cy.get('[data-testid="qty-input-jeera-soda"]').should('have.value', '50');
    cy.get('[aria-label="Decrease quantity"]').should('be.disabled');

    // Verify subtotal updates correctly
    cy.contains('₹1,500').should('be.visible'); // 50 * 30

    // Add to cart
    cy.contains('button', 'Add to Cart').click();

    // Verify cart shows correct quantity
    cy.get('[aria-label="Shopping cart"]').click();
    cy.get('[data-testid="cart-drawer"]').within(() => {
      cy.contains('50 bottles').should('be.visible');
    });
  });
});