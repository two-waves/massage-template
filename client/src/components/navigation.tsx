import { useLanguage } from '@/hooks/use-language';
import logoPath from '@assets/Logo Eichler.png';

export default function Navigation() {
  const { language, setLanguage } = useLanguage();

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Menu Container */}
          <div className="flex items-center space-x-12 sm:space-x-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src={logoPath} 
                alt="Salamatee Premium Massage Studio" 
                className="h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 filter brightness-0 invert"
              />
            </div>
            
            {/* Navigation */}
            <div className="flex flex-col space-y-2">
              <a 
                href="#services" 
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium text-base sm:text-lg lg:text-xl"
              >
                Ambiente
              </a>
              <a 
                href="#services" 
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium text-base sm:text-lg lg:text-xl"
              >
                Thai Massage
              </a>
              <a 
                href="#contact" 
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium text-base sm:text-lg lg:text-xl"
              >
                Preise
              </a>
              <a 
                href="#contact" 
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium text-base sm:text-lg lg:text-xl"
              >
                Gutschein kaufen
              </a>
              <a 
                href="#contact" 
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium text-base sm:text-lg lg:text-xl"
              >
                Kontakt
              </a>
            </div>
          </div>
          
          {/* Right Side: Book Button & Language Switcher */}
          <div className="flex items-center space-x-6">
            {/* Book Button */}
            <div className="hidden md:block">
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-cream-white font-medium py-2 px-6 rounded-full transition-all duration-300 border border-cream-white border-opacity-30">
                Massage buchen
              </button>
            </div>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-3 py-2">
              <button 
                onClick={() => setLanguage('de')}
                className={`text-sm font-medium transition-colors duration-300 ${
                  language === 'de' ? 'text-muted-gold' : 'text-cream-white hover:text-muted-gold'
                }`}
              >
                De
              </button>
              <span className="text-cream-white text-opacity-50">|</span>
              <button 
                onClick={() => setLanguage('en')}
                className={`text-sm font-medium transition-colors duration-300 ${
                  language === 'en' ? 'text-muted-gold' : 'text-cream-white hover:text-muted-gold'
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
