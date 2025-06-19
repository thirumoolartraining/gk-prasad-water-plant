import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import WhySenbagam from '@/components/WhySenbagam';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import BulkOrderForm from '@/components/BulkOrderForm';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductGrid />
      <WhySenbagam />
      <Stats />
      <Testimonials />
      <BulkOrderForm />
      <Footer />
      <Toaster />
    </main>
  );
}