import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import massageImage from '@assets/massage ambiente.jpg';

export default function AromaoilMassageSection() {
  const bookMassage = () => {
    window.location.href = '/booking';
  };

  return (
    <section className="py-20 bg-deep-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-1 lg:order-1 space-y-8">
            <div>
              <h2 className="font-playfair text-4xl lg:text-5xl font-light text-cream-white mb-6">
                Aromaöl-Massage
              </h2>
              
              <p className="text-lg text-cream-white leading-relaxed font-playfair mb-8">
                Die sanfte, individuell angepasste Ganzkörpermassage mit warmen Ölen löst Verspannungen, regt die Durchblutung an und sorgt für tiefe Entspannung. Ätherische Öle unterstützen das Wohlbefinden und machen die Behandlung zu einem besonderen Erlebnis.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-playfair text-lg font-medium text-cream-white mb-2">
                    Bekleidete Ganzkörpermassage
                  </h3>
                  <p className="text-cream-white font-playfair">
                    mit warmen ätherischen Ölen<br />
                    individuell angepasst
                  </p>
                </div>

                <div className="space-y-2">
                  <div>
                    <span className="font-playfair font-medium text-cream-white">Anwendungsdauer</span>
                    <span className="font-playfair text-cream-white ml-2">30, 60, 90 oder 120 Minuten</span>
                  </div>
                  <div>
                    <span className="font-playfair font-medium text-cream-white">Empfehlung</span>
                    <span className="font-playfair text-cream-white ml-2">Ab 60 Minuten</span>
                  </div>
                </div>
              </div>
            </div>

            <Button 
              onClick={bookMassage}
              className="bg-transparent hover:bg-cream-white/10 text-cream-white border border-cream-white font-normal py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center gap-2"
            >
              Massage buchen
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Image */}
          <div className="order-2 lg:order-2">
            <div className="aspect-square overflow-hidden max-w-lg mx-auto">
              <img 
                src={massageImage}
                alt="Aromaöl-Massage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}