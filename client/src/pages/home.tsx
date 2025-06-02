import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import MassageSection from '@/components/massage-section';
import ClassicalMassageSection from '@/components/classical-massage-section';
import AromaoilMassageSection from '@/components/aromaoil-massage-section';
import PricesSection from '@/components/prices-section';
import VoucherSection from '@/components/voucher-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MassageSection />
      <ClassicalMassageSection />
      <AromaoilMassageSection />
      <PricesSection />
      <VoucherSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
