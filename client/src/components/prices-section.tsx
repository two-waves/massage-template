export default function PricesSection() {
  return (
    <section className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="font-playfair text-lg uppercase tracking-widest text-sage-gray mb-8">
            PREISE
          </h3>
          <h2 className="font-playfair text-3xl lg:text-4xl font-light text-deep-charcoal leading-relaxed max-w-4xl mx-auto">
            Genießen Sie in unseren Räumlichkeiten<br />
            die exklusive Massage Ihrer Wahl.
          </h2>
        </div>

        {/* Price Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Klassische Ganzkörpermassage */}
          <div className="text-center">
            <h3 className="font-playfair text-xl font-medium text-deep-charcoal mb-2">
              Klassische Ganzkörpermassage
            </h3>
            <p className="font-playfair text-sm text-sage-gray mb-6">
              Traditionelle Entspannungsmassage
            </p>
            <div className="w-12 h-px bg-sage-gray mx-auto mb-6"></div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-playfair text-deep-charcoal">30 Minuten</span>
                <span className="font-playfair text-deep-charcoal">40 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-playfair text-deep-charcoal">60 Minuten</span>
                <span className="font-playfair text-deep-charcoal">70 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-playfair text-deep-charcoal">90 Minuten</span>
                <span className="font-playfair text-deep-charcoal">100 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-playfair text-deep-charcoal">120 Minuten</span>
                <span className="font-playfair text-deep-charcoal">130 €</span>
              </div>
            </div>
          </div>

          {/* Aromaölmassage */}
          <div className="text-center">
            <h3 className="font-playfair text-xl font-medium text-deep-charcoal mb-2">
              Aromaölmassage
            </h3>
            <p className="font-playfair text-sm text-sage-gray mb-6">
              Ganzkörpermassage mit ätherischen Ölen
            </p>
            <div className="w-12 h-px bg-sage-gray mx-auto mb-6"></div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-playfair text-deep-charcoal">30 Minuten</span>
                <span className="font-playfair text-deep-charcoal">45 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-playfair text-deep-charcoal">60 Minuten</span>
                <span className="font-playfair text-deep-charcoal">80 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-playfair text-deep-charcoal">90 Minuten</span>
                <span className="font-playfair text-deep-charcoal">110 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-playfair text-deep-charcoal">120 Minuten</span>
                <span className="font-playfair text-deep-charcoal">140 €</span>
              </div>
            </div>
          </div>

          {/* Hot Stone Massage */}
          <div className="text-center">
            <h3 className="font-playfair text-xl font-medium text-deep-charcoal mb-2">
              Hot Stone Massage
            </h3>
            <p className="font-playfair text-sm text-sage-gray mb-6">
              Ganzkörpermassage mit warmen Vulkansteinen
            </p>
            <div className="w-12 h-px bg-sage-gray mx-auto mb-6"></div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-playfair text-deep-charcoal">60 Minuten</span>
                <span className="font-playfair text-deep-charcoal">90 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-playfair text-deep-charcoal">90 Minuten</span>
                <span className="font-playfair text-deep-charcoal">120 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-playfair text-deep-charcoal">120 Minuten</span>
                <span className="font-playfair text-deep-charcoal">150 €</span>
              </div>
            </div>
          </div>

          {/* Fußreflexzonenmassage */}
          <div className="text-center">
            <h3 className="font-playfair text-xl font-medium text-deep-charcoal mb-2">
              Fußreflexzonenmassage
            </h3>
            <p className="font-playfair text-sm text-sage-gray mb-6">
              Entspannung durch Druckpunktmassage
            </p>
            <div className="w-12 h-px bg-sage-gray mx-auto mb-6"></div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-playfair text-deep-charcoal">30 Minuten</span>
                <span className="font-playfair text-deep-charcoal">35 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-playfair text-deep-charcoal">45 Minuten</span>
                <span className="font-playfair text-deep-charcoal">50 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-playfair text-deep-charcoal">60 Minuten</span>
                <span className="font-playfair text-deep-charcoal">65 €</span>
              </div>
            </div>
          </div>

          {/* Schulter- und Nackenmassage */}
          <div className="text-center">
            <h3 className="font-playfair text-xl font-medium text-deep-charcoal mb-2">
              Schulter- und Nackenmassage
            </h3>
            <p className="font-playfair text-sm text-sage-gray mb-6">
              Gezielte Entspannung für Schulter und Nacken
            </p>
            <div className="w-12 h-px bg-sage-gray mx-auto mb-6"></div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-playfair text-deep-charcoal">20 Minuten</span>
                <span className="font-playfair text-deep-charcoal">30 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-playfair text-deep-charcoal">30 Minuten</span>
                <span className="font-playfair text-deep-charcoal">40 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-playfair text-deep-charcoal">45 Minuten</span>
                <span className="font-playfair text-deep-charcoal">55 €</span>
              </div>
            </div>
          </div>

          {/* Sportmassage */}
          <div className="text-center">
            <h3 className="font-playfair text-xl font-medium text-deep-charcoal mb-2">
              Sportmassage
            </h3>
            <p className="font-playfair text-sm text-sage-gray mb-6">
              Regeneration für aktive Menschen
            </p>
            <div className="w-12 h-px bg-sage-gray mx-auto mb-6"></div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-playfair text-deep-charcoal">30 Minuten</span>
                <span className="font-playfair text-deep-charcoal">45 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-playfair text-deep-charcoal">60 Minuten</span>
                <span className="font-playfair text-deep-charcoal">75 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-playfair text-deep-charcoal">90 Minuten</span>
                <span className="font-playfair text-deep-charcoal">105 €</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}