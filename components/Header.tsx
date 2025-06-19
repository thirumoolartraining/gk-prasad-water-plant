'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import CartDrawer from '@/components/CartDrawer';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, isLoaded } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center flex-shrink-0">
              <div className="relative w-10 h-10 sm:w-14 sm:h-14 -my-1">
                <Image
                  src="/images/logo.png"
                  alt="G K Prasad Aqua Farm"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 40px, 56px"
                  priority
                />
              </div>
            </Link>
            <span className="text-lg sm:text-xl font-bold text-[#003366] whitespace-nowrap uppercase font-heading">
              G K PRASAD AQUA FARM
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link href="#home" className="text-[var(--text-light)] hover:text-[var(--primary-water-blue)] transition-colors text-sm lg:text-base font-medium font-body">
              HOME
            </Link>
            <Link href="#products" className="text-[var(--text-light)] hover:text-[var(--primary-water-blue)] transition-colors text-sm lg:text-base font-medium font-body">
              SHOP
            </Link>
            <Link href="#about" className="text-[var(--text-light)] hover:text-[var(--primary-water-blue)] transition-colors text-sm lg:text-base font-medium font-body">
              ABOUT
            </Link>
            <Link href="#bulk-orders" className="text-[var(--text-light)] hover:text-[var(--primary-water-blue)] transition-colors text-sm lg:text-base font-medium font-body">
              BULK ORDERS
            </Link>
            <Link href="/contact" className="text-[var(--text-light)] hover:text-[var(--primary-water-blue)] transition-colors text-sm lg:text-base font-medium font-body">
              CONTACT
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <CartDrawer>
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {isLoaded && cart.totalItems > 0 && (
                  <Badge 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-[var(--coral-highlight)] text-white text-xs"
                  >
                    {cart.totalItems > 99 ? '99+' : cart.totalItems}
                  </Badge>
                )}
              </Button>
            </CartDrawer>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-2">
            <CartDrawer>
              <Button
                variant="ghost"
                size="icon"
                className="relative min-h-[44px] min-w-[44px]"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {isLoaded && cart.totalItems > 0 && (
                  <Badge 
                    className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 bg-[var(--coral-highlight)] text-white text-xs"
                  >
                    {cart.totalItems > 99 ? '99+' : cart.totalItems}
                  </Badge>
                )}
              </Button>
            </CartDrawer>

            <button
              className="min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="#home" 
                className="text-[var(--text-light)] hover:text-[var(--primary-water-blue)] transition-colors py-2 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="#products" 
                className="text-[var(--text-light)] hover:text-[var(--primary-water-blue)] transition-colors py-2 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                SHOP
              </Link>
              <Link 
                href="#about" 
                className="text-[var(--text-light)] hover:text-[var(--primary-water-blue)] transition-colors py-2 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link 
                href="#bulk-orders" 
                className="text-[var(--text-light)] hover:text-[var(--primary-water-blue)] transition-colors py-2 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                BULK ORDERS
              </Link>
              <Link 
                href="/contact" 
                className="text-[var(--text-light)] hover:text-[var(--primary-water-blue)] transition-colors py-2 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}