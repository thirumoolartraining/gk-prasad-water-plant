import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Shipping Policy - G K Prasad Aqua Farm',
  description: 'Learn about our shipping policies, delivery timelines, and order tracking at G K Prasad Aqua Farm.',
};

export default function ShippingInfo() {
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
          <h1 className="text-4xl font-bold text-[#003366] mb-4 font-heading">Shipping Policy</h1>
          <div className="w-24 h-1 bg-[#F78D1E] mx-auto"></div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-10 space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-gray-700 leading-relaxed font-body">
              At G K Prasad Aqua Farm, we are dedicated to delivering your order safely, securely, and promptly. 
              Our shipping policy ensures transparency and confidence throughout your shopping experience. Below is 
              important information about our order processing, delivery timelines, tracking, and more.
            </p>
          </section>

          {/* Order Processing Time */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Order Processing Time</h2>
            <p className="text-gray-700">
              Upon successful order placement and payment confirmation, we process your order within 2 to 5 business days. 
              This time allows careful verification, packaging, and preparation of your items for shipment. Orders received 
              on weekends or public holidays will commence processing on the following business day.
            </p>
            <p className="mt-4 text-gray-700">
              In exceptional cases—such as during promotional events or peak demand periods—processing times may slightly increase. 
              We assure you that our team actively works to expedite your order dispatch.
            </p>
          </section>

          {/* Shipping Timelines */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Shipping Timelines</h2>
            <p className="text-gray-700 mb-4">
              We deliver orders across India, utilizing reliable courier services. Typical delivery timeframes after dispatch are:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Metro Cities:</strong> 3–6 business days</li>
              <li><strong>Non-Metro and Remote Areas:</strong> 5–10 business days</li>
            </ul>
            <p className="text-gray-700">
              Delivery timelines can vary depending on your specific location, courier networks, and logistical circumstances. 
              We partner with trusted shipping companies to ensure timely deliveries and real-time tracking capabilities.
            </p>
          </section>

          {/* Shipping Charges */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Shipping Charges</h2>
            <p className="text-gray-700 mb-4">
              Shipping charges, if applicable, are calculated based on the order amount, delivery location, and chosen shipping method. 
              These charges are transparently shown at checkout before confirming your order.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Free Shipping:</strong> Offered on orders exceeding a specified value. Check our current promotions or website banners for details.</li>
              <li><strong>Standard Shipping:</strong> For orders below the free shipping threshold, a reasonable shipping fee is applied, calculated based on your delivery area.</li>
            </ul>
          </section>

          {/* Order Tracking */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Order Tracking</h2>
            <p className="text-gray-700">
              When your order ships, we provide you with a tracking number via email or SMS, including a tracking link for real-time updates. 
              Additionally, tracking information is accessible through the My Orders section of your account on our website.
            </p>
            <p className="mt-4 text-gray-700">
              Tracking details may take 24–48 hours to update after dispatch confirmation.
            </p>
          </section>

          {/* Delays and Exceptions */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Delays and Exceptions</h2>
            <p className="text-gray-700 mb-4">
              While we aim for prompt deliveries, unforeseen delays may occasionally occur due to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Adverse weather conditions</li>
              <li>Transportation or courier service disruptions</li>
              <li>Regional or governmental restrictions</li>
              <li>High-demand periods such as festivals</li>
            </ul>
            <p className="text-gray-700">
              In such situations, we proactively communicate with you via email or phone, keeping you informed until your order is delivered.
            </p>
          </section>

          {/* Need Help? */}
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Need Help?</h2>
            <p className="text-gray-700 mb-6">
              If you encounter any issues related to delivery or tracking of your order, please contact our customer support team. 
              We are here to assist you throughout your shopping journey.
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
          <div className="pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              Thank you for choosing G K Prasad Aqua Farm. We appreciate your trust and patience and are committed to 
              providing you with an exceptional experience every time.
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
