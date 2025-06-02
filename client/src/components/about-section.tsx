import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';

export default function AboutSection() {
  const { t } = useLanguage();

  const learnMore = () => {
    // Placeholder for navigation to about page
    console.log('Navigate to about page');
  };

  return (
    <section id="about" className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-sm uppercase tracking-widest text-sage-gray mb-8">
            AMBIENTE
          </h2>
          <p className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-light text-deep-charcoal leading-relaxed max-w-5xl mx-auto">
            In gehobener Atmosphäre bieten wir Ihnen eine individuell an Ihre persönlichen Bedürfnisse angepasste klassische Massage zur Förderung der Selbstheilung, Immunstärkung, zur Stress- und Schmerzminderung.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Elegantes Massage-Studio mit warmer Atmosphäre" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-sage-gray leading-relaxed">
              <strong className="text-deep-charcoal">Salamatee.</strong> Das bedeutet «Haus der Gesundheit und des Wohlbefindens». Ein Ort der Stille, Entspannung und Erholung inmitten der Metropole.
            </p>
            <p className="text-lg text-sage-gray leading-relaxed">
              Genießen Sie Ihre Massage in angenehmen Räumlichkeiten und entspannen Sie in der Lounge bei einem Kännchen thailändischen Wellness-Tee und delikaten Überraschungen bei Salamatee in Berlin im Stadtteil <strong className="text-deep-charcoal">Charlottenburg</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
