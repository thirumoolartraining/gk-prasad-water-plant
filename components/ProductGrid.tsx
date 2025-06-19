'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import QuantitySelector from '@/components/QuantitySelector';
import { PRODUCTS, formatCurrency } from '@/lib/cart';

const products = [
  {
    id: '20l-water-can',
    name: '20L Water Can',
    image: '/images/20 Liter.png',
    originalPrice: 85,
    salePrice: 50,
    onSale: true,
    category: 'Water',
    rating: 4.8,
    description: 'Perfect for offices and homes'
  },
  {
    id: '1l-water-bottle',
    name: '1L Water Bottle',
    image: '/images/One Liter.png',
    originalPrice: 25,
    salePrice: 20,
    onSale: true,
    category: 'Water',
    rating: 4.9,
    description: 'Premium packaged drinking water'
  },
  {
    id: 'half-liter-bottle',
    name: '500ml Water Bottle',
    image: '/images/Half Liter.png',
    originalPrice: 15,
    salePrice: 12,
    onSale: true,
    category: 'Water',
    rating: 4.9,
    description: 'Convenient single-serve bottle'
  },
  {
    id: 'jeera-soda',
    name: 'Jeera Soda',
    image: '/images/Jeera Soda.png',
    originalPrice: 30,
    salePrice: 30,
    onSale: false,
    category: 'Soda',
    rating: 4.9,
    description: 'Sparkling Indian refreshment'
  },
  {
    id: 'orange-soda',
    name: 'Orange Soda',
    image: '/images/Orange Soda.png',
    originalPrice: 30,
    salePrice: 30,
    onSale: false,
    category: 'Soda',
    rating: 4.8,
    description: 'Zesty citrus burst'
  },
  {
    id: 'ginger-ale-soda',
    name: 'Ginger Ale',
    image: '/images/Ginger Ale Soda.png',
    originalPrice: 30,
    salePrice: 30,
    onSale: false,
    category: 'Soda',
    rating: 4.6,
    description: 'Sparkling Indian refreshment'
  }
];

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (productId: string) => {
    setSelectedProduct(productId);
  };

  const handleQuantityConfirm = (quantity: number) => {
    if (selectedProduct) {
      addToCart(selectedProduct, quantity);
      const product = PRODUCTS[selectedProduct as keyof typeof PRODUCTS];
      toast({
        title: "Added to cart!",
        description: `${quantity} bottles of ${product.name} added to your cart.`,
      });
    }
    setSelectedProduct(null);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-16 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-[var(--primary-water-blue)] mb-2 font-body">
            OUR PRODUCTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4 font-heading">
            Premium Quality <span className="text-[var(--aqua-accent)]">Beverages</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary-water-blue)] to-[var(--aqua-accent)] mx-auto mb-6 rounded-full"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-body">
            Experience the pure taste of nature with our premium selection of beverages
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => {
            const productData = PRODUCTS[product.id as keyof typeof PRODUCTS];
            return (
              <Card 
                key={product.id} 
                className="group overflow-hidden transition-all duration-300 bg-white border border-gray-100 hover:border-[var(--primary-water-blue)]/20 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
              >
                <CardContent className="p-5 sm:p-6 flex flex-col h-full">
                  <div className="relative mb-5 flex-1">
                    {product.onSale && (
                      <Badge className="absolute top-0 left-0 z-10 bg-gradient-to-r from-[var(--coral-highlight)] to-[var(--fizzy-orange)] text-white text-xs px-3 py-1 rounded-r-md">
                        SALE
                      </Badge>
                    )}
                    <div className="aspect-square relative bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-4 sm:p-6 group-hover:shadow-inner transition-shadow">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        onError={(e) => {
                          console.error(`Failed to load image: ${product.image}`);
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-3 mt-4">
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="outline" className="text-xs bg-white/80 backdrop-blur-sm border-gray-200">
                        {product.category.toUpperCase()}
                      </Badge>
                      <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-full">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium text-yellow-700">{product.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-xl text-gray-800 font-heading group-hover:text-[var(--primary-water-blue)] transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 min-h-[2.5rem]">
                      {product.description}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-2xl text-[var(--primary-water-blue)]">
                          {formatCurrency(productData.unitPrice)}
                        </span>
                        {product.onSale && (
                          <span className="text-sm text-gray-400 line-through">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400">
                        Minimum order: {productData.qtyStep} {productData.qtyStep > 1 ? 'bottles' : 'bottle'}
                      </p>
                    </div>

                    <Button 
                      onClick={() => handleAddToCart(product.id)}
                      className="w-full bg-gradient-to-r from-[var(--primary-water-blue)] to-[var(--aqua-accent)] hover:from-[var(--primary-water-blue)]/90 hover:to-[var(--aqua-accent)]/90 text-white font-medium rounded-lg py-2.5 mt-2 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                      data-testid={`add-to-cart-btn-${product.id}`}
                      type="button"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {selectedProduct && (
        <QuantitySelector
          productId={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={handleModalClose}
          onAdd={handleQuantityConfirm}
        />
      )}
    </section>
  );
}