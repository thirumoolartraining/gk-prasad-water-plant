import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - G K Prasad Aqua Farm',
  description: 'Learn how we protect your personal information and ensure your privacy at G K Prasad Aqua Farm.',
};

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-[#003366] mb-4 font-heading">Privacy Policy</h1>
          <div className="w-24 h-1 bg-[#F78D1E] mx-auto"></div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-10 space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-gray-700 leading-relaxed font-body">
              At G K Prasad Aqua Farm, your privacy is our utmost priority. We are committed to protecting your personal information, ensuring your data is managed securely, responsibly, and in compliance with applicable data protection regulations.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              This Privacy Policy details the information we collect, its use, storage, and the security measures we implement when you interact with our website, products, or services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4 font-heading">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              When you engage with our website—whether you're browsing, ordering products, or requesting quotes—we collect specific personal information such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Full Name</li>
              <li>Shipping and Billing Address</li>
              <li>Contact Number</li>
              <li>Email Address</li>
              <li>Payment Information (securely processed through encrypted payment gateways)</li>
              <li>Order History and User Preferences</li>
            </ul>
            <p className="mt-4 text-gray-700">
              We collect only essential information necessary for efficient service delivery and enhanced customer experience.
            </p>
          </section>

          {/* Why We Collect Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Why We Collect Your Information</h2>
            <p className="text-gray-700 mb-4">
              Your personal data is strictly used for legitimate business operations, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Processing and fulfilling orders</li>
              <li>Providing customer support, order confirmations, and shipment updates</li>
              <li>Managing your account and preferences</li>
              <li>Enhancing our website experience and improving product offerings</li>
              <li>Sending promotional materials (only with your explicit consent)</li>
            </ul>
            <p className="mt-4 text-gray-700">
              We never collect irrelevant or excessive information. All data gathered aligns directly with improving your experience and our service quality.
            </p>
          </section>

          {/* How Your Information Is Protected */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">How Your Information Is Protected</h2>
            <p className="text-gray-700 mb-4">
              We prioritize the security of your data. All personal information is stored securely with restricted access to authorized personnel only. Our platform employs advanced security practices, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Secure Sockets Layer (SSL) encryption for data transmissions</li>
              <li>Robust firewall and server security protocols</li>
              <li>Internal controls restricting sensitive data access exclusively to trained, trusted staff</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Your payment information is never stored directly on our servers. Instead, it is securely handled via certified third-party payment processors.
            </p>
          </section>

          {/* No Sharing with Third Parties */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">No Sharing with Third Parties</h2>
            <p className="text-gray-700">
              Your privacy is our commitment. Under no circumstances do we sell, rent, or share your personal information with unauthorized third parties.
            </p>
            <p className="mt-4 text-gray-700">
              Any information shared with third-party providers (e.g., logistics, payment processors) is exclusively for fulfilling the services requested by you. Such partners are obligated contractually to maintain confidentiality and protect your data.
            </p>
          </section>

          {/* Your Rights & Choices */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Your Rights & Choices</h2>
            <p className="text-gray-700">
              You have full control over your data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
              <li>Request to view, correct, or delete your personal data anytime.</li>
              <li>Opt-out from promotional communications through the unsubscribe link in our emails.</li>
              <li>Contact our support team directly if you believe your data is inaccurate, misused, or requires updating.</li>
            </ul>
          </section>

          {/* Questions or Concerns */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4 font-heading">Questions or Concerns?</h2>
            <p className="text-gray-700 mb-6 font-body">
              If you have any queries regarding our Privacy Policy or data handling practices, please don't hesitate to contact us.
            </p>
            <div className="flex justify-center">
              <Button asChild className="mt-8 bg-[#003366] hover:bg-[#002244] text-white font-body">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>

          {/* Closing Note */}
          <section className="pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-sm italic">
              By continuing to use our platform, you consent to the practices detailed in this Privacy Policy. We reserve the right to periodically update this policy to reflect legal and operational changes. Please review this page regularly to stay informed.
            </p>
            <p className="mt-4 text-gray-800 font-medium">
              Thank you for trusting G K Prasad Aqua Farm.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
