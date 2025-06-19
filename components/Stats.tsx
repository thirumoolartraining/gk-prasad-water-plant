'use client';

import { useEffect, useState } from 'react';

const stats = [
  { number: 50000, suffix: '+', label: 'Happy Customers' },
  { number: 25, suffix: '+', label: 'Years of Excellence' },
  { number: 100, suffix: '%', label: 'Quality Assured' },
  { number: 500, suffix: '+', label: 'Retail Partners' }
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const increment = target / 100;
    const timer = setInterval(() => {
      setCurrent(prev => {
        if (prev < target) {
          return Math.min(prev + increment, target);
        }
        clearInterval(timer);
        return target;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white">
      {Math.floor(current).toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="section-spacing bg-[var(--night-sky-navy)] relative">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="white"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,42.7C672,32,768,32,864,37.3C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-poppins font-bold heading-lg text-white mb-4 sm:mb-6">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-responsive text-[var(--text-dark)] max-w-3xl mx-auto px-4">
            Numbers that reflect our commitment to quality, customer satisfaction, 
            and community trust built over decades.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="mb-2 sm:mb-4">
                <AnimatedNumber target={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-white/90 text-sm sm:text-base lg:text-lg font-body">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}