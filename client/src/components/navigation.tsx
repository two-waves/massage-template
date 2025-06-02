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
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logoPath} 
              alt="Salamatee Premium Massage Studio" 
              className="h-16 w-16 sm:h-20 sm:w-20 filter brightness-0 invert"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#services" 
              className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium"
            >
              {t('nav.services')}
            </a>
            <a 
              href="#about" 
              className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium"
            >
              {t('nav.about')}
            </a>
            <a 
              href="#contact" 
              className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium"
            >
              {t('nav.contact')}
            </a>
          </div>
          
          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-3 py-1">
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
              className="md:hidden text-cream-white hover:text-muted-gold transition-colors duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-deep-charcoal bg-opacity-95" onClick={toggleMobileMenu}></div>
          <div className="relative bg-deep-charcoal min-h-screen pt-20 px-4">
            <div className="flex flex-col space-y-6">
              <a 
                href="#services" 
                onClick={toggleMobileMenu}
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium text-lg"
              >
                {t('nav.services')}
              </a>
              <a 
                href="#about" 
                onClick={toggleMobileMenu}
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium text-lg"
              >
                {t('nav.about')}
              </a>
              <a 
                href="#contact" 
                onClick={toggleMobileMenu}
                className="text-cream-white hover:text-muted-gold transition-colors duration-300 font-medium text-lg"
              >
                {t('nav.contact')}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
