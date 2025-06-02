import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
const massageImage = new URL('../../../attached_assets/klassische massage.JPG', import.meta.url).href;

export default function ClassicalMassageSection() {
  const bookMassage = () => {
    // Handle booking logic
    console.log('Massage booking clicked');
  };

  return (
    <section className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-square overflow-hidden">
              <img 
                src={massageImage}
                alt="Klassische Massage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="font-playfair text-4xl lg:text-5xl font-light text-deep-charcoal mb-6">
                Klassische Massage
              </h2>
              
              <p className="text-lg text-deep-charcoal leading-relaxed font-playfair mb-8">
                Die klassische Massage löst Blockaden und entspannt Körper und Geist, schafft eine Atmosphäre der Ruhe. Bei dieser wohltuenden Anwendung geben wir Geist und Körper seine innenwohnenden Energien zurück. Sanfte Klänge, angenehme Düfte und ein luxuriöses Ambiente runden das Erlebnis ab.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-playfair text-lg font-medium text-deep-charcoal mb-2">
                    Bekleidete Ganzkörpermassage
                  </h3>
                  <p className="text-deep-charcoal font-playfair">
                    optional mit Aromaöl oder neutralem Öl<br />
                    ohne Duft- und Zusatzstoffe
                  </p>
                </div>

                <div className="space-y-2">
                  <div>
                    <span className="font-playfair font-medium text-deep-charcoal">Anwendungsdauer</span>
                    <span className="font-playfair text-deep-charcoal ml-2">30, 60, 90 oder 120 Minuten</span>
                  </div>
                  <div>
                    <span className="font-playfair font-medium text-deep-charcoal">Empfehlung</span>
                    <span className="font-playfair text-deep-charcoal ml-2">Ab 60 Minuten</span>
                  </div>
                </div>
              </div>
            </div>

            <Button 
              onClick={bookMassage}
              className="bg-transparent hover:bg-sage-gray/10 text-sage-gray border border-sage-gray font-normal py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center gap-2"
            >
              Massage buchen
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}