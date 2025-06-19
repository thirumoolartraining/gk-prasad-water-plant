'use client';

import { Button } from '@/components/ui/button';
import { Check, Droplets, ShieldCheck, Leaf, Award, RefreshCw, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function QualityAssurance() {
  return (
    <main className="min-h-screen bg-[#FDF6ED] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Button 
            asChild 
            variant="ghost" 
            className="text-[#0098A9] hover:bg-[#0098A9]/10 flex items-center gap-1 px-0"
          >
            <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Back to Home
            </Link>
          </Button>
        </div>
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#003366] mb-4 font-heading">Quality Assurance</h1>
          <div className="w-24 h-1 bg-[#F78D1E] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 font-body">
            Where purity meets precision — every drop is our promise.
          </p>
        </div>

        {/* Introduction Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <p className="text-gray-700 text-lg leading-relaxed mb-6 font-body">
            At G K Prasad Aqua Farm, quality isn't just a benchmark — it's a promise we uphold in every drop. 
            With over two decades of experience, we combine traditional values with advanced processes to ensure 
            that every product you receive is safe, pure, and consistent in quality.
          </p>
        </section>

        {/* Our Commitment Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#003366] mb-8 text-center font-heading">Our Commitment to Purity</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Droplets className="h-8 w-8 text-[#0098A9] mr-3" />
                <h3 className="text-xl font-semibold text-[#003366]">Source Integrity</h3>
              </div>
              <p className="text-gray-700">
                Our water is sourced from trusted, mineral-rich aquifers and is stringently tested at the source.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <RefreshCw className="h-8 w-8 text-[#0098A9] mr-3" />
                <h3 className="text-xl font-semibold text-[#003366]">Multi-Stage Purification</h3>
              </div>
              <p className="text-gray-700">
                Each batch undergoes comprehensive purification including sand filtration, carbon filtration, UV treatment, and reverse osmosis.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-[#0098A9] mr-3" />
                <h3 className="text-xl font-semibold text-[#003366]">Flavor Preservation</h3>
              </div>
              <p className="text-gray-700">
                For our soda range, we use food-grade ingredients and natural flavor profiles to deliver authentic taste without compromising health.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <ShieldCheck className="h-8 w-8 text-[#0098A9] mr-3" />
                <h3 className="text-xl font-semibold text-[#003366]">Rigorous Quality Checks</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#F78D1E] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Daily Batch Testing for microbial safety, pH balance, and TDS levels.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#F78D1E] mr-2 mt-0.5 flex-shrink-0" />
                  <span>UV and Ozone Sterilization of bottles and caps before filling.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#F78D1E] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Sanitized Bottling Zones operated under hygienic, contactless conditions.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#F78D1E] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Food Safety Standards aligned with FSSAI and BIS certifications.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sustainable Packaging Section */}
        <section className="mb-16 bg-[#F0F9FA] p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-[#003366] mb-6 text-center">Sustainable Packaging</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Leaf className="h-8 w-8 text-[#0098A9]" />
              </div>
              <h3 className="font-semibold text-[#003366] mb-2">100% Recyclable PET Bottles</h3>
              <p className="text-gray-700 text-sm">Environmentally friendly packaging across all sizes.</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="h-8 w-8 text-[#0098A9]" />
              </div>
              <h3 className="font-semibold text-[#003366] mb-2">Leak-Proof Seals</h3>
              <p className="text-gray-700 text-sm">Ensuring product freshness during transportation.</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Award className="h-8 w-8 text-[#0098A9]" />
              </div>
              <h3 className="font-semibold text-[#003366] mb-2">Tamper-Evident Caps</h3>
              <p className="text-gray-700 text-sm">Guaranteeing safety from source to sip.</p>
            </div>
          </div>
        </section>

        {/* Certified Assurance Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#003366] mb-6 text-center">Certified Assurance</h2>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <p className="text-gray-700 text-center mb-6">
              We continuously audit and upgrade our processes to align with national safety regulations and customer expectations.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 border border-gray-100 rounded-lg">
                <div className="text-4xl font-bold text-[#0098A9] mb-2">FSSAI</div>
                <p className="text-gray-600">Certified</p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg">
                <div className="text-4xl font-bold text-[#0098A9] mb-2">ISO</div>
                <p className="text-gray-600">Compliant</p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg">
                <div className="text-4xl font-bold text-[#0098A9] mb-2">500+</div>
                <p className="text-gray-600">Retail Partners</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Focus Section */}
        <section className="mb-16">
          <div className="bg-[#003366] text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Customer-Centric Focus</h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              We actively monitor feedback from customers, retailers, and bulk buyers. Any product deviation is taken seriously, 
              with prompt corrective action and traceability systems in place.
            </p>
            <p className="text-xl font-medium italic mb-8">
              "Tested, trusted, and tailored for your well-being."
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-[#003366] mb-4">Have a quality-related concern or suggestion?</h2>
          <p className="text-gray-700 mb-8">
            Reach us anytime — your satisfaction is what drives our excellence.
          </p>
          <Button asChild className="bg-[#003366] hover:bg-[#002244] text-white font-body text-lg px-8 py-6">
            <Link href="/contact" className="flex items-center">
              Report a Quality Issue
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
