'use client';

import Image from 'next/image';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { formatCurrency } from '@/lib/cart';
import { snapQty } from '@/lib/qty';
import Link from 'next/link';

interface CartDrawerProps {
  children: React.ReactNode;
}

export default function CartDrawer({ children }: CartDrawerProps) {
  const { cart, updateCartItemQuantity, clearCart } = useCart();

  const handleQuantityChange = (productId: string, currentQuantity: number, change: number) => {
    const item = cart.items.find(item => item.id === productId);
    if (!item) return;
    
    // Calculate new quantity first, then snap it
    const targetQuantity = currentQuantity + change;
    const newQuantity = snapQty(targetQuantity, item.minOrder, item.qtyStep);
    
    console.log('Cart quantity change:', {
      productId,
      currentQuantity,
      change,
      targetQuantity,
      newQuantity,
      minOrder: item.minOrder,
      qtyStep: item.qtyStep
    });
    
    updateCartItemQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: string) => {
    updateCartItemQuantity(productId, 0);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent 
        className="w-full sm:w-96 flex flex-col" 
        data-testid="cart-drawer"
        role="dialog"
        aria-labelledby="cart-drawer-title"
      >
        <SheetHeader>
          <SheetTitle id="cart-drawer-title" className="flex items-center space-x-2">
            <ShoppingCart className="h-5 w-5" />
            <span>Your Cart ({cart.totalItems} items)</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {cart.items.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
              <p className="text-sm text-gray-400 mt-2">Add some products to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="relative w-12 h-12 bg-white rounded p-1 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                      sizes="48px"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-gray-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {formatCurrency(item.unitPrice)} each
                    </p>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => handleQuantityChange(item.id, item.quantity, -item.qtyStep)}
                          disabled={item.quantity <= item.minOrder}
                          aria-label={`Decrease ${item.name} quantity`}
                          type="button"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => handleQuantityChange(item.id, item.quantity, item.qtyStep)}
                          aria-label={`Increase ${item.name} quantity`}
                          type="button"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => handleRemoveItem(item.id)}
                        aria-label={`Remove ${item.name} from cart`}
                        type="button"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-semibold text-sm text-[var(--primary-water-blue)]">
                      {formatCurrency(item.quantity * item.unitPrice)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.items.length > 0 && (
          <div className="border-t pt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">Total:</span>
              <span className="font-bold text-xl text-[var(--primary-water-blue)]">
                {formatCurrency(cart.totalAmount)}
              </span>
            </div>
            
            <div className="space-y-2">
              <Button
                variant="destructive"
                size="sm"
                onClick={clearCart}
                className="w-full"
                type="button"
              >
                Empty Cart
              </Button>
              
              <Button asChild className="w-full bg-[var(--primary-water-blue)] text-white hover:bg-[var(--primary-water-blue)]/90">
                <Link href="/checkout">
                  Proceed to Checkout
                </Link>
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}