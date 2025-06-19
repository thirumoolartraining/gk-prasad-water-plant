'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function CancellationRefundPolicy() {
  return (
    <main className="min-h-screen bg-[#FDF6ED] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#003366] mb-4 font-heading">Cancellation & Refund Policy</h1>
          <div className="w-24 h-1 bg-[#F78D1E] mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg font-body">
            We strive to make your experience secure, transparent, and customer-friendly.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-10 space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-gray-700 leading-relaxed">
              G K Prasad Aqua Farm is committed to customer satisfaction and follows a fair and transparent cancellation and refund policy. 
              Please read the details below to understand how cancellations and refunds are handled for orders placed through our platform:
            </p>
          </section>

          {/* Cancellations Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Cancellations</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Cancellations will be considered only if requested immediately after placing the order.</li>
              <li>
                Cancellation requests may not be entertained if the order has already been packed or dispatched.
              </li>
              <li>
                As we deal with consumable and perishable products (e.g., bottled water, soda), cancellations are not 
                applicable once shipping has been initiated.
              </li>
            </ul>
          </section>

          {/* Damaged Products Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Damaged or Defective Products</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                If you receive a damaged or defective product, please notify our Customer Support within 
                <span className="font-semibold text-[#F78D1E]"> 7 days </span> 
                of receiving the order.
              </li>
              <li>
                Each such request will be reviewed on a case-by-case basis. Once our team verifies the issue, we will 
                offer either a replacement or refund.
              </li>
              <li>
                Customers must provide supporting photos/videos to help us investigate the claim effectively.
              </li>
            </ul>
          </section>

          {/* Product Not as Expected Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Product Not as Expected</h2>
            <p className="text-gray-700 leading-relaxed">
              If you feel the product received is significantly different from what was displayed on our site or does not 
              meet your expectations, please inform our Customer Support team within 
              <span className="font-semibold text-[#F78D1E]"> 7 days </span> 
              of receiving the order.
            </p>
            <p className="text-gray-700 mt-2">
              Our team will assess the situation and offer an appropriate resolution depending on the case.
            </p>
          </section>

          {/* Manufacturer's Warranty Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Manufacturer's Warranty</h2>
            <p className="text-gray-700">
              For products covered under a manufacturer's warranty, we recommend reaching out to the manufacturer directly 
              for claims, repairs, or replacements.
            </p>
          </section>

          {/* Refunds Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Refunds</h2>
            <p className="text-gray-700">
              Once a refund is approved by G K Prasad Aqua Farm, the amount will be processed within 
              <span className="font-semibold text-[#F78D1E]"> 3–5 business days </span> 
              to the original payment method.
            </p>
          </section>

          {/* Need Help Section */}
          <section className="bg-[#F0F9FA] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#003366] mb-4 font-heading">Need Help?</h2>
            <p className="text-gray-700 mb-6 font-body">
              Contact us via WhatsApp 24/7 or reach out via our Contact page. Our support team is here to assist you with any 
              concerns or clarifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="mt-8 bg-[#003366] hover:bg-[#002244] text-white font-body">
                <a href="https://wa.me/918951723337" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Support
                </a>
              </Button>
              <Button asChild variant="outline" className="border-[#0098A9] text-[#0098A9] hover:bg-[#0098A9] hover:text-white font-body">
                <Link href="/contact" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Support
                </Link>
              </Button>
            </div>
          </section>

          {/* Closing Note */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-gray-700 text-center">
              Thank you for choosing G K Prasad Aqua Farm. We aim to deliver safe and satisfying service, always.
            </p>
            <p className="text-sm text-gray-500 text-center mt-4">
              Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
