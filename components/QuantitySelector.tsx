'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import SmartDialog from '@/components/ui/SmartDialog';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus, Plus } from 'lucide-react';
import { PRODUCTS } from '@/lib/cart';
import { snapQty, formatINR } from '@/lib/qty';
import { useMediaQuery } from '@/hooks/use-media-query';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface QuantitySelectorProps {
  productId: string;
  isOpen: boolean;
  onClose: () => void;
  onAdd: (quantity: number) => void;
}

export default function QuantitySelector({ productId, isOpen, onClose, onAdd }: QuantitySelectorProps) {
  const product = PRODUCTS[productId as keyof typeof PRODUCTS];
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const isMounted = useRef(true);
  const hasInitialized = useRef(false);
  
  const MIN = product?.minOrder || 50;
  const STEP = product?.qtyStep || 50;
  
  const [quantity, setQuantity] = useState<number>(MIN);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Only reset quantity when dialog first opens for a new product
  useEffect(() => {
    if (product && isOpen && !hasInitialized.current) {
      console.log('QuantitySelector: Initializing quantity to MIN:', MIN);
      setQuantity(MIN);
      hasInitialized.current = true;
    }
    
    // Reset initialization flag when dialog closes
    if (!isOpen) {
      hasInitialized.current = false;
    }
  }, [productId, isOpen, MIN]);

  // Don't render until media query is resolved to prevent hydration mismatch
  if (isDesktop === undefined) {
    return null;
  }

  if (!product) {
    return null;
  }

  const handleQuantityChange = (newQuantity: number) => {
    const adjustedQuantity = snapQty(newQuantity, MIN, STEP);
    console.log('QuantitySelector: handleQuantityChange', {
      input: newQuantity,
      snapped: adjustedQuantity,
      min: MIN,
      step: STEP
    });
    
    if (isMounted.current) {
      setQuantity(adjustedQuantity);
    }
  };

  const incrementQuantity = () => {
    const newQuantity = quantity + STEP;
    console.log('QuantitySelector: incrementQuantity', {
      current: quantity,
      step: STEP,
      new: newQuantity
    });
    handleQuantityChange(newQuantity);
  };

  const decrementQuantity = () => {
    const newQuantity = Math.max(MIN, quantity - STEP);
    console.log('QuantitySelector: decrementQuantity', {
      current: quantity,
      step: STEP,
      new: newQuantity,
      min: MIN
    });
    handleQuantityChange(newQuantity);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const value = parseInt(inputValue) || 0;
    console.log('QuantitySelector: handleInputChange', {
      inputValue,
      parsedValue: value
    });
    handleQuantityChange(value);
  };

  const handleAdd = () => {
    console.log('QuantitySelector: handleAdd', { quantity });
    onAdd(quantity);
    onClose();
  };

  const subtotal = quantity * product.unitPrice;

  const content = (
    <div className="space-y-6">
      {/* Product Info */}
      <div className="flex items-center space-x-4">
        <div className="relative w-16 h-16 bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg p-2">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-1"
            sizes="64px"
          />
        </div>
        <div>
          <h3 className="font-poppins font-semibold text-lg text-[var(--text-light)]">
            {product.name}
          </h3>
          <p className="text-[var(--primary-water-blue)] font-semibold">
            {formatINR(product.unitPrice)} per bottle
          </p>
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">
          Quantity (bottles)
        </label>
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="icon"
            onClick={decrementQuantity}
            disabled={quantity <= MIN}
            className="h-10 w-10"
            aria-label="Decrease quantity"
            type="button"
          >
            <Minus className="h-4 w-4" />
          </Button>
          
          <Input
            type="number"
            value={quantity}
            onChange={handleInputChange}
            min={MIN}
            step={STEP}
            className="text-center w-24 h-10"
            aria-label="Quantity"
            inputMode="numeric"
            data-testid={`qty-input-${productId}`}
          />
          
          <Button
            variant="outline"
            size="icon"
            onClick={incrementQuantity}
            className="h-10 w-10"
            aria-label="Increase quantity"
            type="button"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-gray-500">
          Minimum order: {MIN} bottles (increments of {STEP})
        </p>
      </div>

      {/* Subtotal */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Subtotal:</span>
          <span className="font-bold text-xl text-[var(--primary-water-blue)]">
            {formatINR(subtotal)}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-3">
        <Button
          variant="ghost"
          onClick={onClose}
          className="flex-1"
          type="button"
        >
          Cancel
        </Button>
        <Button
          onClick={handleAdd}
          className="flex-1 bg-[var(--primary-water-blue)] text-white hover:bg-[var(--primary-water-blue)]/90"
          type="button"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );

  if (isDesktop) {
    return (
      <SmartDialog 
        open={isOpen} 
        onOpenChange={onClose}
        title={`Select quantity for ${product.name}`}
        className="sm:max-w-md"
      >
        {content}
      </SmartDialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <VisuallyHidden asChild>
            <DrawerTitle>
              Select quantity for {product.name}
            </DrawerTitle>
          </VisuallyHidden>
        </DrawerHeader>
        <div className="px-4 pb-6">
          {content}
        </div>
      </DrawerContent>
    </Drawer>
  );
}