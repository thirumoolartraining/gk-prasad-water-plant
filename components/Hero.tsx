'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleShopNowClick = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-[var(--night-sky-navy)] overflow-hidden">
      {/* Background SVG Hills */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="var(--coral-highlight)"
            fillOpacity="0.8"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path
            fill="var(--cream-sand)"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,165.3C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex items-center justify-center min-h-screen py-16 sm:py-20">
          {/* Content - Now centered */}
          <div className="text-center max-w-4xl">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-white">Drink</span>{' '}
                <span className="gradient-text tracking-wide">Pure.</span>
              </h1>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 sm:mt-4">
                <span className="text-white">Taste</span>{' '}
                <span className="gradient-text tracking-wide">Nostalgia.</span>
              </h2>
              <p className="text-responsive text-[var(--text-dark)] max-w-2xl mx-auto leading-relaxed px-4 font-body text-lg">
                From crystal-clear packaged drinking water to authentic Indian sodas that bring back childhood memories. 
                Experience the perfect blend of purity and tradition with G K Prasad Aqua Farm.
              </p>
              <div className="pt-4 sm:pt-8">
                <Button 
                  size="lg" 
                  className="gradient-button text-white hover:opacity-90 transition-opacity min-h-[44px] text-sm sm:text-base"
                  onClick={handleShopNowClick}
                >
                  Shop Now <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}