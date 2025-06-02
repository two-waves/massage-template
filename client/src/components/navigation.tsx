import { useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import logoPath from '@assets/Logo Eichler.png';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Menu Container */}
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src={logoPath} 
                alt="Salamatee Premium Massage Studio" 
                className="h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 filter brightness-0 invert"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-col space-y-2">
              <a 
                href="#services" 
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium text-lg"
              >
                Ambiente
              </a>
              <a 
                href="#services" 
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium text-lg"
              >
                Thai Massage
              </a>
              <a 
                href="#contact" 
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium text-lg"
              >
                Preise
              </a>
              <a 
                href="#contact" 
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium text-lg"
              >
                Gutschein kaufen
              </a>
              <a 
                href="#contact" 
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium text-lg"
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
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden text-cream-white hover:text-muted-gold transition-colors duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-deep-charcoal bg-opacity-95" onClick={toggleMobileMenu}></div>
          <div className="relative bg-deep-charcoal min-h-screen pt-20 px-4">
            <div className="flex flex-col space-y-6">
              <a 
                href="#services" 
                onClick={toggleMobileMenu}
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium text-lg"
              >
                Ambiente
              </a>
              <a 
                href="#services" 
                onClick={toggleMobileMenu}
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium text-lg"
              >
                Thai Massage
              </a>
              <a 
                href="#contact" 
                onClick={toggleMobileMenu}
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium text-lg"
              >
                Preise
              </a>
              <a 
                href="#contact" 
                onClick={toggleMobileMenu}
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium text-lg"
              >
                Gutschein kaufen
              </a>
              <a 
                href="#contact" 
                onClick={toggleMobileMenu}
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium text-lg"
              >
                Kontakt
              </a>
              <div className="pt-4">
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-cream-white font-medium py-2 px-6 rounded-full transition-all duration-300 border border-cream-white border-opacity-30 w-full">
                  Massage buchen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
