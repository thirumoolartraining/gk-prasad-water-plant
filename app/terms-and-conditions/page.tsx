import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions - G K Prasad Aqua Farm',
  description: 'Review the terms and conditions for using G K Prasad Aqua Farm\'s website and services.',
};

export default function TermsAndConditions() {
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
          <h1 className="text-4xl font-bold text-[#003366] mb-4 font-heading">Terms & Conditions</h1>
          <div className="w-24 h-1 bg-[#F78D1E] mx-auto"></div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-10 space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-gray-700 leading-relaxed font-body">
              Welcome to G K Prasad Aqua Farm. By accessing or using our website, you agree to abide by these Terms and Conditions. 
              These terms govern all interactions, purchases, and services provided through our website. Please read carefully before 
              using our website or placing an order.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Continued use of our website indicates full acceptance of these terms. If you disagree with any part of these terms, 
              we advise discontinuing your use of the website immediately.
            </p>
          </section>

          {/* General Use of the Website */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">General Use of the Website</h2>
            <p className="text-gray-700 mb-4">
              By using our website, you confirm that you are at least 18 years of age or accessing under supervision of a legal guardian. 
              You agree to use this website solely for lawful purposes and in ways that do not infringe upon, restrict, or inhibit any 
              third party's rights or enjoyment of this site.
            </p>
            <p className="text-gray-700">
              We reserve the right to restrict or terminate access to part or all of the website without prior notice or liability.
            </p>
          </section>

          {/* Products, Pricing & Availability */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Products, Pricing & Availability</h2>
            <p className="text-gray-700 mb-4">
              All products listed are subject to availability and may be modified or removed without prior notice.
            </p>
            <p className="text-gray-700">
              We strive for accuracy in product descriptions, images, and pricing; however, errors might occasionally occur. We reserve 
              the right to correct such errors, cancel affected orders, and issue refunds where applicable.
            </p>
            <p className="mt-4 text-gray-700">
              Prices displayed are in INR (₹) unless stated otherwise and may be subject to change without prior notice due to market 
              conditions or internal policy updates.
            </p>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Payment Terms</h2>
            <p className="text-gray-700 mb-4">
              Payments must be completed in full at the time of order confirmation unless otherwise explicitly agreed.
            </p>
            <p className="text-gray-700 mb-4">
              We accept major payment methods via secure payment gateways. All payment transactions are secured with industry-standard 
              encryption and security protocols.
            </p>
            <p className="text-gray-700">
              In cases of transaction failures, duplicate charges, or unauthorized transactions, please promptly contact our support team 
              for resolution.
            </p>
          </section>

          {/* User Responsibilities & Conduct */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">User Responsibilities & Conduct</h2>
            <p className="text-gray-700 mb-4">
              As a user, you agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Post or transmit any unlawful, offensive, or misleading content on our website.</li>
              <li>Attempt unauthorized access to the website's backend or other user accounts.</li>
              <li>Reproduce, duplicate, or exploit any part of our website content for commercial use without explicit written consent from G K Prasad Aqua Farm.</li>
            </ul>
            <p className="text-gray-700">
              We reserve the right to suspend or terminate user access in cases of misconduct or violation of these terms.
            </p>
          </section>

          {/* Modifications to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Modifications to Terms</h2>
            <p className="text-gray-700">
              G K Prasad Aqua Farm reserves the right to modify, update, or revise these Terms & Conditions at any time without prior 
              notification. Changes will be published on this page. Your continued usage of our website following any changes signifies 
              your acceptance of the revised terms. We recommend reviewing these terms regularly.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Limitation of Liability</h2>
            <p className="text-gray-700">
              G K Prasad Aqua Farm and its affiliates shall not be liable for any direct, indirect, incidental, or consequential damages 
              arising from your use or inability to use our website or products. This includes but is not limited to delays in delivery, 
              service interruptions, or unavailability of products.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have questions or concerns regarding these Terms & Conditions, please reach out to us.
            </p>
            <div className="flex justify-center">
              <Button asChild className="mt-8 bg-[#003366] hover:bg-[#002244] text-white font-body">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>

          {/* Last Updated */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
