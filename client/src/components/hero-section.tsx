import { useLanguage } from '@/hooks/use-language';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImagePath from '@assets/massage hero2.jpg';

export default function HeroSection() {
  const { t } = useLanguage();

  const handleBooking = () => {
    // Scroll to contact section for now
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const showServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImagePath} 
          alt="Professional massage therapy session" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal from-0% via-transparent via-50% to-sage-gray to-100% opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-32 left-0 right-0 z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="transform -rotate-90 origin-center mb-16">
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-light text-cream-white tracking-widest">
              balance
            </h1>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-cream-white text-opacity-90 font-light max-w-3xl mx-auto leading-relaxed text-center">
            Erleben Sie unsere vielfältigen Massagen in einer Atmosphäre der Ruhe und des Wohlbefindens.
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-cream-white" />
      </div>
    </section>
  );
}
