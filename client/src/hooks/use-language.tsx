import { useState, useEffect, createContext, useContext } from 'react';

export type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Navigation
    'nav.services': 'Leistungen',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Salamatee',
    'hero.tagline': 'Entspannung für Körper und Geist',
    'hero.description': 'Erleben Sie traditionelle Thai-Massage in einer Atmosphäre der Ruhe und des Wohlbefindens. Unsere erfahrenen Therapeuten bringen Ihnen authentische Entspannung nach Berlin.',
    'hero.bookButton': 'Massage buchen',
    'hero.servicesButton': 'Unsere Leistungen',
    
    // Services
    'services.title': 'Unsere Leistungen',
    'services.description': 'Entdecken Sie unsere Auswahl an traditionellen Thai-Massagen und wellness Behandlungen, die Körper und Geist in perfekte Harmonie bringen.',
    'services.traditional.name': 'Traditionelle Thai-Massage',
    'services.traditional.description': 'Eine ganzheitliche Massage-Technik, die Akupressur, sanfte Dehnungen und meditative Entspannung vereint.',
    'services.traditional.price': 'Ab 80€',
    'services.aromatherapy.name': 'Aromatherapie-Massage',
    'services.aromatherapy.description': 'Entspannende Massage mit hochwertigen ätherischen Ölen für tiefe Regeneration und Stressabbau.',
    'services.aromatherapy.price': 'Ab 95€',
    'services.hotstone.name': 'Hot Stone Massage',
    'services.hotstone.description': 'Warme Basaltsteine lösen Verspannungen und fördern die Durchblutung für ultimative Entspannung.',
    'services.hotstone.price': 'Ab 110€',
    'services.viewAll': 'Alle Leistungen ansehen',
    
    // About
    'about.title': 'Über Salamatee',
    'about.description': 'Seit über 10 Jahren bringen wir die Kunst der traditionellen Thai-Massage nach Berlin Charlottenburg. Unsere erfahrenen Therapeuten sind in Thailand ausgebildet und verwenden authentische Techniken, um Ihnen eine Auszeit vom Alltag zu schenken.',
    'about.philosophy': 'Bei Salamatee steht Ihr Wohlbefinden im Mittelpunkt. In ruhiger Atmosphäre finden Sie zurück zu innerer Balance und körperlicher Entspannung.',
    'about.learnMore': 'Mehr erfahren',
    
    // Contact
    'contact.title': 'Besuchen Sie uns',
    'contact.subtitle': 'Mitten in Berlin Charlottenburg finden Sie unsere Oase der Ruhe',
    'contact.info.title': 'Kontakt & Öffnungszeiten',
    'contact.address.title': 'Adresse',
    'contact.address.street': 'Kantstraße 42',
    'contact.address.city': '10625 Berlin Charlottenburg',
    'contact.phone.title': 'Telefon',
    'contact.phone.number': '+49 30 123 456 78',
    'contact.hours.title': 'Öffnungszeiten',
    'contact.hours.weekdays': 'Mo - Fr: 9:00 - 20:00',
    'contact.hours.weekend': 'Sa - So: 10:00 - 18:00',
    'contact.bookButton': 'Jetzt Termin buchen',
    'contact.map.title': 'So finden Sie uns',
    'contact.map.placeholder': 'Interactive Map',
    
    // Footer
    'footer.description': 'Ihr Premium Massagestudio in Berlin Charlottenburg. Traditionelle Thai-Massage für Körper und Geist.',
    'footer.links.title': 'Quick Links',
    'footer.links.services': 'Leistungen',
    'footer.links.about': 'Über uns',
    'footer.links.contact': 'Kontakt',
    'footer.links.booking': 'Termin buchen',
    'footer.legal.title': 'Rechtliches',
    'footer.legal.privacy': 'Datenschutz',
    'footer.legal.terms': 'AGB',
    'footer.legal.imprint': 'Impressum',
    'footer.copyright': '© 2024 Salamatee Premium Massage Studio. Alle Rechte vorbehalten.',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Salamatee',
    'hero.tagline': 'Relaxation for Body and Mind',
    'hero.description': 'Experience traditional Thai massage in an atmosphere of tranquility and well-being. Our experienced therapists bring you authentic relaxation to Berlin.',
    'hero.bookButton': 'Book Massage',
    'hero.servicesButton': 'Our Services',
    
    // Services
    'services.title': 'Our Services',
    'services.description': 'Discover our selection of traditional Thai massages and wellness treatments that bring body and mind into perfect harmony.',
    'services.traditional.name': 'Traditional Thai Massage',
    'services.traditional.description': 'A holistic massage technique that combines acupressure, gentle stretching and meditative relaxation.',
    'services.traditional.price': 'From €80',
    'services.aromatherapy.name': 'Aromatherapy Massage',
    'services.aromatherapy.description': 'Relaxing massage with high-quality essential oils for deep regeneration and stress relief.',
    'services.aromatherapy.price': 'From €95',
    'services.hotstone.name': 'Hot Stone Massage',
    'services.hotstone.description': 'Warm basalt stones release tension and promote circulation for ultimate relaxation.',
    'services.hotstone.price': 'From €110',
    'services.viewAll': 'View All Services',
    
    // About
    'about.title': 'About Salamatee',
    'about.description': 'For over 10 years, we have been bringing the art of traditional Thai massage to Berlin Charlottenburg. Our experienced therapists are trained in Thailand and use authentic techniques to give you a break from everyday life.',
    'about.philosophy': 'At Salamatee, your well-being is our focus. In a peaceful atmosphere, you will find your way back to inner balance and physical relaxation.',
    'about.learnMore': 'Learn More',
    
    // Contact
    'contact.title': 'Visit Us',
    'contact.subtitle': 'In the heart of Berlin Charlottenburg, you will find our oasis of tranquility',
    'contact.info.title': 'Contact & Opening Hours',
    'contact.address.title': 'Address',
    'contact.address.street': 'Kantstraße 42',
    'contact.address.city': '10625 Berlin Charlottenburg',
    'contact.phone.title': 'Phone',
    'contact.phone.number': '+49 30 123 456 78',
    'contact.hours.title': 'Opening Hours',
    'contact.hours.weekdays': 'Mon - Fri: 9:00 - 20:00',
    'contact.hours.weekend': 'Sat - Sun: 10:00 - 18:00',
    'contact.bookButton': 'Book Appointment Now',
    'contact.map.title': 'How to Find Us',
    'contact.map.placeholder': 'Interactive Map',
    
    // Footer
    'footer.description': 'Your premium massage studio in Berlin Charlottenburg. Traditional Thai massage for body and mind.',
    'footer.links.title': 'Quick Links',
    'footer.links.services': 'Services',
    'footer.links.about': 'About Us',
    'footer.links.contact': 'Contact',
    'footer.links.booking': 'Book Appointment',
    'footer.legal.title': 'Legal',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.terms': 'Terms & Conditions',
    'footer.legal.imprint': 'Imprint',
    'footer.copyright': '© 2024 Salamatee Premium Massage Studio. All rights reserved.',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('de');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('salamatee-language') as Language;
    if (savedLanguage && ['de', 'en'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('salamatee-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
