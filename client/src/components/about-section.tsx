import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AboutSection() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Elegantes Massage-Studio mit warmer Atmosphäre"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Entspannende Massage-Räumlichkeiten"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const learnMore = () => {
    console.log('Navigate to booking page');
  };

  return (
    <section id="about" className="py-20 bg-warm-beige">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-base uppercase tracking-widest text-sage-gray mb-8">
            AMBIENTE
          </h2>
          <p className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-light text-deep-charcoal leading-relaxed max-w-5xl mx-auto">
            In gehobener Atmosphäre bieten wir Ihnen eine individuell an Ihre persönlichen Bedürfnisse angepasste klassische Massage zur Förderung der Selbstheilung, Immunstärkung, zur Stress- und Schmerzminderung.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
          <div>
            {/* Image Slideshow */}
            <div className="relative overflow-hidden">
              <img 
                src={images[currentSlide].src}
                alt={images[currentSlide].alt}
                className="w-full h-auto transition-opacity duration-500"
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-300"
                aria-label="Vorheriges Bild"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-300"
                aria-label="Nächstes Bild"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-8 px-8 sm:px-12 lg:px-16 max-w-lg ml-8 mt-4">
            <p className="text-lg text-deep-charcoal leading-relaxed font-playfair">
              Ein Ort der Stille, Entspannung und Erholung inmitten der Metropole. Hier finden Sie Ihre persönliche Auszeit vom Alltag.
            </p>
            
            <p className="text-lg text-deep-charcoal leading-relaxed font-playfair">
              Genießen Sie Ihre Massage in angenehmen Räumlichkeiten und entspannen Sie in der Lounge bei einem Kännchen Wellness-Tee und delikaten Überraschungen in Berlin im Stadtteil <strong className="text-deep-charcoal">Tempelhof</strong>.
            </p>
            
            <Button 
              onClick={learnMore}
              className="bg-transparent hover:bg-sage-gray/10 text-sage-gray border border-sage-gray font-normal py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center gap-2"
            >
              Termin buchen
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
