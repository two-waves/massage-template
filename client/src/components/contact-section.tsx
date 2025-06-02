import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function ContactSection() {
  const callPhone = () => {
    window.location.href = 'tel:+4903055626264';
  };

  const sendEmail = () => {
    window.location.href = 'mailto:info@eichler-massage.de';
  };

  return (
    <section id="contact" className="py-20 bg-deep-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src={new URL('../../../attached_assets/massage praxis außen.jpg', import.meta.url).href}
                alt="Massagepraxis Anke Eichler Außenansicht"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="font-playfair text-lg uppercase tracking-widest text-sage-gray mb-8">
                KONTAKT
              </h3>
              <h2 className="font-playfair text-3xl lg:text-4xl font-light text-cream-white mb-8 leading-relaxed">
                Massagepraxis Anke Eichler<br />
                in Berlin Tempelhof
              </h2>
              
              <div className="space-y-6 text-cream-white">
                <div>
                  <h4 className="font-playfair font-medium mb-2">Massagepraxis Anke Eichler</h4>
                  <p className="font-playfair">Attilastraße 180, 12105 Berlin</p>
                </div>

                <div>
                  <h4 className="font-playfair font-medium mb-2">Öffnungszeiten</h4>
                  <p className="font-playfair">Montag bis Freitag von 07:00-19:00 Uhr</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={callPhone}
                className="bg-transparent hover:bg-cream-white/10 text-cream-white border border-cream-white font-normal py-3 px-6 rounded-full transition-all duration-300 inline-flex items-center gap-2"
              >
                +49. (0)30 55 62 62 64
                <ChevronRight className="w-4 h-4" />
              </Button>
              
              <Button 
                onClick={sendEmail}
                className="bg-transparent hover:bg-cream-white/10 text-cream-white border border-cream-white font-normal py-3 px-6 rounded-full transition-all duration-300 inline-flex items-center gap-2"
              >
                info@eichler-massage.de
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
