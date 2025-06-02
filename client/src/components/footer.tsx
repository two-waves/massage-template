import { useLanguage } from '@/hooks/use-language';
import logoPath from '@assets/Logo Eichler.png';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-deep-charcoal text-cream-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img 
              src={logoPath} 
              alt="Salamatee Premium Massage Studio" 
              className="h-16 w-16 mb-4 filter brightness-0 invert"
            />
            <h3 className="font-playfair text-2xl font-semibold mb-4">
              {t('hero.title')}
            </h3>
            <p className="text-cream-white opacity-80 mb-4 max-w-md">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">
              {t('footer.links.title')}
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#services" 
                  className="text-cream-white opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t('footer.links.services')}
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-cream-white opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t('footer.links.about')}
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-cream-white opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t('footer.links.contact')}
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-cream-white opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t('footer.links.booking')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">
              {t('footer.legal.title')}
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-cream-white opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t('footer.legal.privacy')}
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-cream-white opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t('footer.legal.terms')}
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-cream-white opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t('footer.legal.imprint')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cream-white border-opacity-20 mt-8 pt-8 text-center">
          <p className="text-cream-white opacity-60">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
