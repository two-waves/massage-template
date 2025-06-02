import { useLanguage } from '@/hooks/use-language';
import logoPath from '@assets/Logo Eichler.png';

export default function Navigation() {
  const { language, setLanguage } = useLanguage();

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-start justify-between">
          {/* Logo and Menu Container */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/">
                <img 
                  src={logoPath} 
                  alt="Salamatee Premium Massage Studio" 
                  className="h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 filter brightness-0 invert cursor-pointer"
                />
              </a>
            </div>
            
            {/* Navigation */}
            <div className="flex flex-col space-y-1">
              <a 
                href="#services" 
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-light text-sm sm:text-base lg:text-lg"
              >
                Ambiente
              </a>
              <a 
                href="#services" 
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-light text-sm sm:text-base lg:text-lg"
              >
                Unsere Massagen
              </a>
              <a 
                href="#contact" 
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-light text-sm sm:text-base lg:text-lg"
              >
                Preise
              </a>
              <a 
                href="#contact" 
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-light text-sm sm:text-base lg:text-lg"
              >
                Gutschein kaufen
              </a>
              <a 
                href="#contact" 
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-light text-sm sm:text-base lg:text-lg"
              >
                Kontakt
              </a>
            </div>
          </div>
          
          {/* Right Side: Book Button & Language Switcher */}
          <div className="flex items-center space-x-4 pt-8 sm:pt-12 lg:pt-16">
            {/* Book Button */}
            <div className="hidden md:block">
              <button 
                onClick={() => window.location.href = '/booking'}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-cream-white font-medium py-3 px-8 rounded-full transition-all duration-300 border border-cream-white border-opacity-30"
              >
                Massage buchen
              </button>
            </div>
            
            {/* Language Switcher - Separate Round Buttons */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setLanguage('de')}
                className={`w-12 h-12 rounded-full border-2 border-cream-white transition-all duration-300 ${
                  language === 'de' 
                    ? 'bg-cream-white text-deep-charcoal' 
                    : 'bg-white bg-opacity-20 text-cream-white hover:bg-opacity-30'
                }`}
              >
                De
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={`w-12 h-12 rounded-full border-2 border-cream-white transition-all duration-300 ${
                  language === 'en' 
                    ? 'bg-deep-charcoal text-cream-white border-deep-charcoal' 
                    : 'bg-white bg-opacity-20 text-cream-white hover:bg-opacity-30'
                }`}
              >
                En
              </button>
            </div>

          </div>
        </div>
      </nav>

    </>
  );
}
