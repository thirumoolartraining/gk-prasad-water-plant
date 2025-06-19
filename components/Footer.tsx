import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--cream-sand)] relative">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="white"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,42.7C672,32,768,32,864,37.3C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* Coral to Yellow Wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full h-auto">
          <defs>
            <linearGradient id="coralYellow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--coral-highlight)" />
              <stop offset="100%" stopColor="var(--citrus-yellow)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#coralYellow)"
            d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,21.3C672,21,768,43,864,48C960,53,1056,43,1152,37.3C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 pt-16 sm:pt-20 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 p-3 bg-white/10 rounded-lg shadow-md backdrop-blur-sm">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="G K Prasad Aqua Farm Logo"
                  fill
                  className="object-contain drop-shadow-md"
                  sizes="(max-width: 640px) 48px, 56px"
                  priority
                />
              </div>
              <div className="font-heading font-bold text-lg sm:text-xl bg-gradient-to-r from-[var(--primary-water-blue)] to-[var(--aqua-accent)] bg-clip-text">
                <span className="drop-shadow-sm">G K PRASAD</span>
                <span className="block text-sm sm:text-base text-[var(--text-light)] font-normal">AQUA FARM</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Delivering pure water and authentic Indian sodas with a commitment 
              to quality and tradition since decades.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-[var(--primary-water-blue)] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-[var(--fizzy-orange)] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-[var(--aqua-accent)] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-base sm:text-lg text-[var(--text-light)] mb-3 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-gray-600 hover:text-[var(--primary-water-blue)] transition-colors text-sm sm:text-base">Home</Link></li>
              <li><Link href="#products" className="text-gray-600 hover:text-[var(--primary-water-blue)] transition-colors text-sm sm:text-base">Products</Link></li>
              <li><Link href="#about" className="text-gray-600 hover:text-[var(--primary-water-blue)] transition-colors text-sm sm:text-base">About Us</Link></li>
              <li><Link href="#bulk-orders" className="text-gray-600 hover:text-[var(--primary-water-blue)] transition-colors text-sm sm:text-base">Bulk Orders</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-[var(--primary-water-blue)] transition-colors text-sm sm:text-base">Contact</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-heading font-semibold text-base sm:text-lg text-[var(--text-light)] mb-3 sm:mb-4">
              Policies
            </h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-gray-600 hover:text-[var(--primary-water-blue)] transition-colors text-sm sm:text-base">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-gray-600 hover:text-[var(--primary-water-blue)] transition-colors text-sm sm:text-base">Terms & Conditions</Link></li>
              <li><Link href="/cancellation-and-refund-policy" className="text-gray-600 hover:text-[var(--primary-water-blue)] transition-colors text-sm sm:text-base">Cancellation & Refund</Link></li>
              <li><Link href="/shipping-info" className="text-gray-600 hover:text-[var(--primary-water-blue)] transition-colors text-sm sm:text-base">Shipping Info</Link></li>
              <li><Link href="/quality-assurance" className="text-gray-600 hover:text-[var(--primary-water-blue)] transition-colors text-sm sm:text-base">Quality Assurance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-base sm:text-lg text-[var(--text-light)] mb-3 sm:mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--primary-water-blue)] mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 text-xs sm:text-sm">
                  No 21, West St, Senbagakollai Village,<br />
                  Kumbakonam Taluk, Thanjavur 612 605
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--primary-water-blue)]" />
                <p className="text-gray-600 text-sm sm:text-base">+91 89517 23337</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--primary-water-blue)]" />
                <p className="text-gray-600 text-sm sm:text-base">info@gkprasadaquafarm.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-6 sm:pt-8">
          <div className="bg-[var(--night-sky-navy)] rounded-lg p-4 sm:p-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-[var(--text-light)] opacity-80 mt-2">
              &copy; {new Date().getFullYear()} G K Prasad Aqua Farm. All rights reserved.
            </p>
            <p className="text-xs text-[var(--text-light)] opacity-60 mt-2">
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </p>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <span className="text-[var(--text-dark)] text-xs sm:text-sm">We Accept:</span>
                <div className="flex space-x-2">
                  <div className="w-6 h-4 sm:w-8 sm:h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    VISA
                  </div>
                  <div className="w-6 h-4 sm:w-8 sm:h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    MC
                  </div>
                  <div className="w-6 h-4 sm:w-8 sm:h-5 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    UPI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}