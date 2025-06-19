import { Badge } from '@/components/ui/badge';
import { Shield, Droplets, Recycle, Award, Zap, Heart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'BIS Certified',
    description: 'Bureau of Indian Standards certified for quality assurance'
  },
  {
    icon: Droplets,
    title: 'RO-UV Purified',
    description: 'Advanced reverse osmosis and UV treatment process'
  },
  {
    icon: Recycle,
    title: '100% Recyclable',
    description: 'Eco-friendly packaging that cares for our planet'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Rigorous quality control at every step of production'
  },
  {
    icon: Zap,
    title: 'Fresh & Pure',
    description: 'Bottled at source with natural minerals preserved'
  },
  {
    icon: Heart,
    title: 'Family Trusted',
    description: 'Loved by families across Tamil Nadu for generations'
  }
];

export default function WhySenbagam() {
  return (
    <section id="about" className="section-spacing bg-white relative">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="var(--cream-sand)"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,42.7C672,32,768,32,864,37.3C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003366] text-center mb-12 font-heading">
          Why Choose <span className="text-[#0098A9]">Senbagam</span>
        </h2>
          <p className="text-responsive text-gray-600 max-w-3xl mx-auto px-4">
            We're committed to delivering the highest quality water and beverages 
            while maintaining our rich tradition of authentic Indian flavors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300 p-4"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[var(--primary-water-blue)] to-[var(--aqua-accent)] text-white mb-4 sm:mb-6 group-hover:shadow-lg transition-shadow">
                <feature.icon className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-lg font-semibold text-[#003366] mb-2 font-heading">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}