export interface CartItem {
  id: string;
  name: string;
  image: string;
  unitPrice: number;
  quantity: number;
  minOrder: number;
  qtyStep: number;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
}

export const PRODUCTS = {
  '20l-water-can': {
    id: '20l-water-can',
    name: '20L Water Can',
    image: '/images/20 Liter copy.png',
    unitPrice: 50,
    minOrder: 50,
    qtyStep: 50,
  },
  '1l-water-bottle': {
    id: '1l-water-bottle',
    name: '1L Water Bottle',
    image: '/images/One Liter.png',
    unitPrice: 20,
    minOrder: 50,
    qtyStep: 50,
  },
  'half-liter-bottle': {
    id: 'half-liter-bottle',
    name: '500ml Water Bottle',
    image: '/images/Half Liter.png',
    unitPrice: 12,
    minOrder: 50,
    qtyStep: 50,
  },
  'jeera-soda': {
    id: 'jeera-soda',
    name: 'Jeera Soda',
    image: '/images/Jeera Soda.png',
    unitPrice: 30,
    minOrder: 50,
    qtyStep: 50,
  },
  'orange-soda': {
    id: 'orange-soda',
    name: 'Orange Soda',
    image: '/images/Orange Soda.png',
    unitPrice: 30,
    minOrder: 50,
    qtyStep: 50,
  },
  'ginger-ale-soda': {
    id: 'ginger-ale-soda',
    name: 'Ginger Ale',
    image: '/images/Ginger Ale Soda copy.png',
    unitPrice: 30,
    minOrder: 50,
    qtyStep: 50,
  },
} as const;

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);
};

export const getCartFromStorage = (): Cart => {
  if (typeof window === 'undefined') {
    return { items: [], totalItems: 0, totalAmount: 0 };
  }
  
  try {
    const stored = localStorage.getItem('gk-prasad-cart');
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed;
    }
  } catch (error) {
    console.error('Error parsing cart from localStorage:', error);
  }
  
  return { items: [], totalItems: 0, totalAmount: 0 };
};

export const saveCartToStorage = (cart: Cart): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem('gk-prasad-cart', JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

export const calculateCartTotals = (items: CartItem[]): { totalItems: number; totalAmount: number } => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
  
  return { totalItems, totalAmount };
};

export const addToCart = (productId: string, quantity: number): Cart => {
  const product = PRODUCTS[productId as keyof typeof PRODUCTS];
  if (!product) {
    throw new Error('Product not found');
  }

  const currentCart = getCartFromStorage();
  const existingItemIndex = currentCart.items.findIndex(item => item.id === productId);

  let updatedItems: CartItem[];
  
  if (existingItemIndex >= 0) {
    // Update existing item
    updatedItems = [...currentCart.items];
    updatedItems[existingItemIndex] = {
      ...updatedItems[existingItemIndex],
      quantity: updatedItems[existingItemIndex].quantity + quantity,
    };
  } else {
    // Add new item
    const newItem: CartItem = {
      id: product.id,
      name: product.name,
      image: product.image,
      unitPrice: product.unitPrice,
      quantity,
      minOrder: product.minOrder,
      qtyStep: product.qtyStep,
    };
    updatedItems = [...currentCart.items, newItem];
  }

  const { totalItems, totalAmount } = calculateCartTotals(updatedItems);
  const updatedCart: Cart = {
    items: updatedItems,
    totalItems,
    totalAmount,
  };

  saveCartToStorage(updatedCart);
  return updatedCart;
};

export const updateCartItemQuantity = (productId: string, quantity: number): Cart => {
  const currentCart = getCartFromStorage();
  
  let updatedItems: CartItem[];
  
  if (quantity <= 0) {
    // Remove item if quantity is 0 or less
    updatedItems = currentCart.items.filter(item => item.id !== productId);
  } else {
    // Update quantity
    updatedItems = currentCart.items.map(item =>
      item.id === productId ? { ...item, quantity } : item
    );
  }

  const { totalItems, totalAmount } = calculateCartTotals(updatedItems);
  const updatedCart: Cart = {
    items: updatedItems,
    totalItems,
    totalAmount,
  };

  saveCartToStorage(updatedCart);
  return updatedCart;
};

export const clearCart = (): Cart => {
  const emptyCart: Cart = { items: [], totalItems: 0, totalAmount: 0 };
  saveCartToStorage(emptyCart);
  return emptyCart;
};