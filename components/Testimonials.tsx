'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Kumbakonam',
    text: 'The Jeera soda brings back so many childhood memories! The taste is authentic and refreshing. Our family has been buying Prasad Aqua Farm water for years.'
  },
  {
    name: 'Rajesh Kumar',
    location: 'Thanjavur',
    text: 'Best quality water in the region. We use it for our restaurant and customers always compliment the taste. The 20L cans are perfect for our needs.'
  },
  {
    name: 'Meera Devi',
    location: 'Trichy',
    text: 'The Orange soda is my favorite! It has the perfect balance of sweetness and fizz. Quality is consistent and delivery is always on time.'
  }
];

export default function Testimonials() {
  return (
    <section className="section-spacing bg-[var(--cream-sand)] relative">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="var(--night-sky-navy)"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,42.7C672,32,768,32,864,37.3C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#003366] mb-4 sm:mb-6">
            What Our <span className="text-[#0098A9]">Customers</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4 font-body">
            Real stories from families and businesses who trust G K Prasad Aqua Farm 
            for their daily hydration and refreshment needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-100 hover:border-[#0098A9]/20 transition-all duration-300 h-full flex flex-col">
              <CardContent className="p-6 sm:p-8 flex-1 flex flex-col">
                <div className="flex-1">
                  <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-[#0098A9]/30 mb-4" />
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-body italic mb-6">
                    {testimonial.text}
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <h3 className="font-semibold text-base sm:text-lg text-[#003366] font-heading">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 font-body">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}