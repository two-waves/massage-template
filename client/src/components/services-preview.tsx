import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Heart, Lightbulb, Zap } from 'lucide-react';

export default function ServicesPreview() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Heart,
      name: t('services.traditional.name'),
      description: t('services.traditional.description'),
      price: t('services.traditional.price'),
    },
    {
      icon: Lightbulb,
      name: t('services.aromatherapy.name'),
      description: t('services.aromatherapy.description'),
      price: t('services.aromatherapy.price'),
    },
    {
      icon: Zap,
      name: t('services.hotstone.name'),
      description: t('services.hotstone.description'),
      price: t('services.hotstone.price'),
    },
  ];

  const viewAllServices = () => {
    // Placeholder for navigation to services page
    console.log('Navigate to all services');
  };

  return (
    <section id="services" className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6">
            {t('services.title')}
          </h2>
          <p className="text-lg text-sage-gray max-w-3xl mx-auto leading-relaxed">
            {t('services.description')}
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-cream-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-muted-gold bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-muted-gold" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-deep-charcoal mb-3">
                    {service.name}
                  </h3>
                  <p className="text-sage-gray leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="font-semibold text-muted-gold">
                    {service.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={viewAllServices}
            className="bg-muted-gold hover:bg-muted-gold/90 text-deep-charcoal font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            {t('services.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
}
