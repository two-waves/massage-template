import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
const voucherImage = new URL('../../../attached_assets/geschenkgutschein.jpg', import.meta.url).href;

export default function VoucherSection() {
  const buyVoucher = () => {
    // Handle voucher purchase logic
    console.log('Voucher purchase clicked');
  };

  return (
    <section className="py-20 bg-warm-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="font-playfair text-sm uppercase tracking-widest text-sage-gray mb-8">
            GUTSCHEINE
          </h3>
          <h2 className="font-playfair text-3xl lg:text-4xl font-light text-deep-charcoal leading-relaxed max-w-4xl mx-auto">
            Schenken Sie Erholung und Wohlbefinden<br />
            für Körper und Seele.
          </h2>
        </div>

        {/* Voucher Image */}
        <div className="mb-12 flex justify-center">
          <div className="w-2/3 max-w-md overflow-hidden rounded-lg">
            <img 
              src={voucherImage}
              alt="Massage Gutschein"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-16">
          <Button 
            onClick={buyVoucher}
            className="bg-transparent hover:bg-sage-gray/10 text-sage-gray border border-sage-gray font-normal py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center gap-2"
          >
            Gutschein kaufen
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Contact Text */}
        <div className="text-center">
          <p className="font-playfair text-lg text-deep-charcoal mb-2">
            Haben Sie noch Fragen?
          </p>
          <p className="font-playfair text-lg text-deep-charcoal">
            Kontaktieren Sie uns telefonisch oder per E-Mail -<br />
            wir helfen Ihnen gerne weiter.
          </p>
        </div>
      </div>
    </section>
  );
}