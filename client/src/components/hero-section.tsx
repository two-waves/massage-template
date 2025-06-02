import { useLanguage } from '@/hooks/use-language';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImagePath from '@assets/massage hero.jpg';

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
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-cream-white leading-tight mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-cream-white font-light mb-8">
            {t('hero.tagline')}
          </p>
          <p className="text-lg sm:text-xl text-cream-white text-opacity-90 font-light max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={handleBooking}
            className="bg-muted-gold hover:bg-muted-gold/90 text-deep-charcoal font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t('hero.bookButton')}
          </Button>
          <Button 
            onClick={showServices}
            variant="outline"
            className="border-2 border-cream-white text-cream-white hover:bg-cream-white hover:text-deep-charcoal font-semibold py-4 px-8 rounded-full transition-all duration-300"
          >
            {t('hero.servicesButton')}
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-cream-white" />
      </div>
    </section>
  );
}
