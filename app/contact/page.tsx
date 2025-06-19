'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#FDF6ED] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#003366] mb-4 font-heading">Online Support</h1>
          <div className="w-24 h-1 bg-[#F78D1E] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-body">
            We're here to help. Whether you have questions about our products, need assistance with an order, 
            want to share feedback, or are interested in business collaboration — the team at G K Prasad Aqua Farm 
            is ready to support you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-[#003366] mb-6 font-heading">Reach Out for Any of the Following</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#0098A9] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-body">General Inquiries about our products and services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#0098A9] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-body">Order Support and tracking assistance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#0098A9] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-body">Feedback & Suggestions for improvement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#0098A9] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-body">Business & Collaboration Opportunities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-[#003366] mb-6 font-heading">Ways to Connect</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#F0F9FA] p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-[#0098A9]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Us</h3>
                    <a href="mailto:info@gkprasadaquafarm.com" className="text-[#0098A9] hover:underline">
                      info@gkprasadaquafarm.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Response within 24-48 business hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#F0F9FA] p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-[#0098A9]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Call Us</h3>
                    <a href="tel:+918951723337" className="text-[#0098A9] hover:underline">
                      +91 89517 23337
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#F0F9FA] p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-[#0098A9]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Visit Us</h3>
                    <p className="text-gray-700">
                      G K Prasad Aqua Farm<br />
                      No. 21, West St, Senbagakollai Village<br />
                      Kumbakonam Taluk, Thanjavur 612 605
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#F0F9FA] p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-[#0098A9]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday - Saturday: 9:00 AM - 6:00 PM IST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-[#003366] mb-4">A Few Things to Keep in Mind</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#0098A9] mr-2">•</span>
                  <span>We respond to all queries as promptly as possible, typically within one business day.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0098A9] mr-2">•</span>
                  <span>For order-related inquiries, please include your order ID or registered email to speed up resolution.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0098A9] mr-2">•</span>
                  <span>For urgent assistance, we recommend calling us during our working hours.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit sticky top-28">
            <h2 className="text-2xl font-bold text-[#003366] mb-6">Send Us a Message</h2>
            
            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                <p className="text-green-700">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0098A9] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0098A9] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0098A9] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0098A9] focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-[#F78D1E] hover:bg-[#e07d0e] text-white py-3 px-6 rounded-md transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>

                <p className="text-center text-gray-600 text-sm mt-6">
                  We look forward to hearing from you!
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-700 leading-relaxed">
            At G K Prasad Aqua Farm, we believe that meaningful service begins with meaningful communication. 
            Whether it's a small clarification or a large-scale query, we're here to make your experience smooth, 
            transparent, and satisfying.
          </p>
          <p className="mt-4 text-gray-700 font-medium">
            Thank you for choosing G K Prasad Aqua Farm. We look forward to hearing from you!
          </p>
        </div>
      </div>
    </main>
  );
}
