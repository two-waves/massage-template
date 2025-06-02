import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function ContactSection() {
  const { t } = useLanguage();

  const handleBooking = () => {
    // Placeholder for booking functionality
    console.log('Open booking interface');
  };

  return (
    <section id="contact" className="py-20 bg-soft-taupe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-deep-charcoal mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-deep-charcoal opacity-80 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-cream-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-playfair text-2xl font-semibold text-deep-charcoal mb-6">
                {t('contact.info.title')}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-muted-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-deep-charcoal">
                      {t('contact.address.title')}
                    </p>
                    <p className="text-sage-gray">
                      {t('contact.address.street')}
                    </p>
                    <p className="text-sage-gray">
                      {t('contact.address.city')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-6 h-6 text-muted-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-deep-charcoal">
                      {t('contact.phone.title')}
                    </p>
                    <p className="text-sage-gray">
                      {t('contact.phone.number')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-muted-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-deep-charcoal mb-2">
                      {t('contact.hours.title')}
                    </p>
                    <p className="text-sage-gray text-sm">
                      {t('contact.hours.weekdays')}
                    </p>
                    <p className="text-sage-gray text-sm">
                      {t('contact.hours.weekend')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                onClick={handleBooking}
                className="bg-muted-gold hover:bg-muted-gold/90 text-deep-charcoal font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t('contact.bookButton')}
              </Button>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-cream-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-playfair text-2xl font-semibold text-deep-charcoal mb-6">
              {t('contact.map.title')}
            </h3>
            <div className="bg-soft-taupe rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-muted-gold mx-auto mb-4" />
                <p className="text-sage-gray">
                  {t('contact.map.placeholder')}
                </p>
                <p className="text-sm text-sage-gray mt-2">
                  {t('contact.address.street')}, {t('contact.address.city')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
