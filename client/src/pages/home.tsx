import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import ServicesPreview from '@/components/services-preview';
import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesPreview />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
