'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Cart, CartItem, PRODUCTS, calculateCartTotals } from '@/lib/cart';

interface CartContextType {
  cart: Cart;
  isLoaded: boolean;
  addToCart: (productId: string, quantity: number) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartAction =
  | { type: 'LOAD_CART'; payload: Cart }
  | { type: 'ADD_TO_CART'; payload: { productId: string; quantity: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_LOADED'; payload: boolean };

function cartReducer(state: Cart & { isLoaded: boolean }, action: CartAction): Cart & { isLoaded: boolean } {
  switch (action.type) {
    case 'LOAD_CART':
      return { ...action.payload, isLoaded: true };
    
    case 'SET_LOADED':
      return { ...state, isLoaded: action.payload };
    
    case 'ADD_TO_CART': {
      const { productId, quantity } = action.payload;
      const product = PRODUCTS[productId as keyof typeof PRODUCTS];
      
      console.log('CartContext ADD_TO_CART:', { productId, quantity, product });
      
      if (!product) return state;

      const existingItemIndex = state.items.findIndex(item => item.id === productId);
      let updatedItems: CartItem[];

      if (existingItemIndex >= 0) {
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        };
        console.log('CartContext: Updated existing item:', updatedItems[existingItemIndex]);
      } else {
        const newItem: CartItem = {
          id: product.id,
          name: product.name,
          image: product.image,
          unitPrice: product.unitPrice,
          quantity,
          minOrder: product.minOrder,
          qtyStep: product.qtyStep,
        };
        updatedItems = [...state.items, newItem];
        console.log('CartContext: Added new item:', newItem);
      }

      const { totalItems, totalAmount } = calculateCartTotals(updatedItems);
      const newState = {
        items: updatedItems,
        totalItems,
        totalAmount,
        isLoaded: state.isLoaded,
      };

      console.log('CartContext: New cart state after ADD_TO_CART:', newState);

      // Save to localStorage
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('gk-prasad-cart', JSON.stringify({
            items: newState.items,
            totalItems: newState.totalItems,
            totalAmount: newState.totalAmount,
          }));
        } catch (error) {
          console.error('Error saving cart to localStorage:', error);
        }
      }

      return newState;
    }
    
    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action.payload;
      
      console.log('CartContext UPDATE_QUANTITY:', { productId, quantity });
      
      let updatedItems: CartItem[];

      if (quantity <= 0) {
        updatedItems = state.items.filter(item => item.id !== productId);
        console.log('CartContext: Removed item from cart');
      } else {
        updatedItems = state.items.map(item => {
          if (item.id === productId) {
            const updatedItem = { ...item, quantity };
            console.log('CartContext: Updated item quantity:', updatedItem);
            return updatedItem;
          }
          return item;
        });
      }

      const { totalItems, totalAmount } = calculateCartTotals(updatedItems);
      const newState = {
        items: updatedItems,
        totalItems,
        totalAmount,
        isLoaded: state.isLoaded,
      };

      console.log('CartContext: New cart state after UPDATE_QUANTITY:', newState);

      // Save to localStorage
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('gk-prasad-cart', JSON.stringify({
            items: newState.items,
            totalItems: newState.totalItems,
            totalAmount: newState.totalAmount,
          }));
        } catch (error) {
          console.error('Error saving cart to localStorage:', error);
        }
      }

      return newState;
    }
    
    case 'CLEAR_CART': {
      const newState = {
        items: [],
        totalItems: 0,
        totalAmount: 0,
        isLoaded: state.isLoaded,
      };

      console.log('CartContext: Cleared cart');

      // Clear localStorage
      if (typeof window !== 'undefined') {
        try {
          localStorage.removeItem('gk-prasad-cart');
        } catch (error) {
          console.error('Error clearing cart from localStorage:', error);
        }
      }

      return newState;
    }
    
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalItems: 0,
    totalAmount: 0,
    isLoaded: false,
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('gk-prasad-cart');
        if (stored) {
          const parsed = JSON.parse(stored);
          console.log('CartContext: Loaded cart from localStorage:', parsed);
          dispatch({ type: 'LOAD_CART', payload: parsed });
        } else {
          console.log('CartContext: No cart found in localStorage');
          dispatch({ type: 'SET_LOADED', payload: true });
        }
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        dispatch({ type: 'SET_LOADED', payload: true });
      }
    }
  }, []);

  const addToCart = (productId: string, quantity: number) => {
    console.log('CartProvider addToCart called:', { productId, quantity });
    dispatch({ type: 'ADD_TO_CART', payload: { productId, quantity } });
  };

  const updateCartItemQuantity = (productId: string, quantity: number) => {
    console.log('CartProvider updateCartItemQuantity called:', { productId, quantity });
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };

  const clearCart = () => {
    console.log('CartProvider clearCart called');
    dispatch({ type: 'CLEAR_CART' });
  };

  const contextValue: CartContextType = {
    cart: {
      items: state.items,
      totalItems: state.totalItems,
      totalAmount: state.totalAmount,
    },
    isLoaded: state.isLoaded,
    addToCart,
    updateCartItemQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}