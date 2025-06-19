'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Truck, Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function BulkOrderForm() {
  const [volume, setVolume] = useState([100]);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    pincode: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          volume: volume[0]
        }),
      });

      if (response.ok) {
        toast({
          title: "Thank you for your inquiry!",
          description: "We'll contact you within 24 hours with a customized quote.",
        });
        
        // Reset form
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          pincode: ''
        });
        setVolume([100]);
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="bulk-orders" className="section-spacing bg-white relative">
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6 sm:mb-8">
              <h2 className="font-poppins font-bold heading-lg text-[var(--text-light)] mb-4 sm:mb-6">
                <span className="gradient-text">Bulk Orders</span> Made Easy
              </h2>
              <p className="text-responsive text-gray-600 leading-relaxed">
                Whether you're a restaurant, office, or event organizer, we provide 
                competitive pricing and reliable delivery for all your hydration needs.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[var(--primary-water-blue)] rounded-full flex items-center justify-center">
                  <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-base sm:text-lg text-[var(--text-light)]">
                    Free Delivery
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">On orders above ₹500 within 50km radius</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[var(--aqua-accent)] rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-base sm:text-lg text-[var(--text-light)]">
                    24/7 Support
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">Dedicated customer service for bulk orders</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[var(--fizzy-orange)] rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-base sm:text-lg text-[var(--text-light)]">
                    Wide Coverage
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">Serving across Tamil Nadu with timely delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <Card className="shadow-xl border-0 order-1 lg:order-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-[#003366] font-heading">Bulk Order Inquiry</CardTitle>
              <p className="text-gray-600 mt-2 font-body">Get a customized quote for your business or event</p>
            </CardHeader>
            <CardContent className="pt-0">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700 font-body">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="mt-1 min-h-[44px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-sm font-medium text-gray-700 font-body">Business/Organization</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="mt-1 min-h-[44px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700 font-body">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="mt-1 min-h-[44px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 font-body">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="mt-1 min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="pincode" className="text-sm font-medium text-gray-700 font-body">Pincode *</Label>
                  <Input
                    id="pincode"
                    value={formData.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value)}
                    required
                    className="mt-1 min-h-[44px]"
                  />
                </div>

                <div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700 font-body">Estimated Monthly Volume (liters)</Label>
                    <div className="flex items-center justify-between text-sm text-gray-600 font-body">
                      <span>100L</span>
                      <span>1,000L</span>
                      <span>10,000L+</span>
                    </div>
                  </div>
                  <Slider
                    value={volume}
                    onValueChange={setVolume}
                    max={1000}
                    min={50}
                    step={25}
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="w-full bg-[#003366] hover:bg-[#002244] text-white py-6 text-base font-medium font-body">
                  Request Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}