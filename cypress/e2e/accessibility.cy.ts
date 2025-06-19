describe('Accessibility Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have no critical accessibility violations on homepage', () => {
    cy.injectAxe();
    cy.checkA11y(null, {
      rules: {
        'color-contrast': { enabled: true },
        'keyboard-navigation': { enabled: true },
        'focus-management': { enabled: true }
      }
    });
  });

  it('should verify all dialogs have accessible titles', () => {
    // Test quantity selector dialog
    cy.get('#products').scrollIntoView();
    cy.get('[data-testid="add-to-cart-btn-20l-water-can"]').click();
    
    // Verify dialog has proper accessibility attributes
    cy.get('[role="dialog"]')
      .should('be.visible')
      .should('have.attr', 'aria-labelledby')
      .then((labelledBy) => {
        // Verify the title element exists with the correct ID
        cy.get(`#${labelledBy}`)
          .should('exist')
          .should('contain', 'Select Quantity for 20L Water Can');
      });
    
    // Check for no console warnings
    cy.window().then((win) => {
      cy.wrap(win.console).should('not.have.property', 'warn');
    });
    
    // Close dialog
    cy.get('body').type('{esc}');
    
    // Test cart drawer accessibility
    cy.get('[aria-label="Shopping cart"]').click();
    cy.get('[data-testid="cart-drawer"]')
      .should('be.visible')
      .should('have.attr', 'role', 'dialog')
      .should('have.attr', 'aria-labelledby');
  });

  it('should support keyboard navigation', () => {
    // Test keyboard navigation on product grid
    cy.get('#products').scrollIntoView();
    cy.get('[data-testid="add-to-cart-btn-20l-water-can"]')
      .focus()
      .should('be.focused')
      .type('{enter}');
    
    // Verify dialog opens and is keyboard accessible
    cy.get('[role="dialog"]').should('be.visible');
    
    // Test tab navigation within dialog
    cy.get('[aria-label="Decrease quantity"]').should('be.visible');
    cy.get('[data-testid="qty-input-20l-water-can"]').should('be.visible');
    cy.get('[aria-label="Increase quantity"]').should('be.visible');
    
    // Test ESC key closes dialog
    cy.get('body').type('{esc}');
    cy.get('[role="dialog"]').should('not.exist');
  });

  it('should have proper ARIA labels and roles', () => {
    // Check header navigation
    cy.get('header').within(() => {
      cy.get('[aria-label="Shopping cart"]').should('exist');
      cy.get('[aria-label="Toggle menu"]').should('exist');
    });

    // Check product cards
    cy.get('#products').within(() => {
      cy.get('[data-testid^="add-to-cart-btn"]').each(($btn) => {
        cy.wrap($btn).should('have.attr', 'type', 'button');
      });
    });

    // Test form accessibility in bulk order section
    cy.get('#bulk-orders').scrollIntoView();
    cy.get('#bulk-orders').within(() => {
      cy.get('label[for="name"]').should('exist');
      cy.get('label[for="email"]').should('exist');
      cy.get('label[for="phone"]').should('exist');
    });
  });

  it('should maintain focus management in modals', () => {
    // Open quantity selector
    cy.get('#products').scrollIntoView();
    cy.get('[data-testid="add-to-cart-btn-jeera-soda"]').click();
    
    // Verify focus is trapped within dialog
    cy.get('[role="dialog"]').should('be.visible');
    
    // Tab through all focusable elements
    cy.get('[aria-label="Decrease quantity"]').focus();
    cy.focused().tab();
    cy.get('[data-testid="qty-input-jeera-soda"]').should('be.focused');
    
    cy.focused().tab();
    cy.get('[aria-label="Increase quantity"]').should('be.focused');
    
    // Close dialog and verify focus returns
    cy.get('body').type('{esc}');
    cy.get('[data-testid="add-to-cart-btn-jeera-soda"]').should('be.focused');
  });

  it('should have no DialogTitle warnings in console', () => {
    // Monitor console for warnings
    cy.window().then((win) => {
      const consoleWarn = cy.stub(win.console, 'warn').as('consoleWarn');
    });
    
    // Open various dialogs
    cy.get('#products').scrollIntoView();
    cy.get('[data-testid="add-to-cart-btn-20l-water-can"]').click();
    cy.get('[role="dialog"]').should('be.visible');
    cy.get('body').type('{esc}');
    
    // Add item to cart and open cart drawer
    cy.get('[data-testid="add-to-cart-btn-jeera-soda"]').click();
    cy.contains('button', 'Add to Cart').click();
    cy.get('[aria-label="Shopping cart"]').click();
    cy.get('[data-testid="cart-drawer"]').should('be.visible');
    
    // Verify no DialogTitle warnings
    cy.get('@consoleWarn').should('not.have.been.calledWith', 
      Cypress.sinon.match(/DialogContent requires a DialogTitle/));
  });
});