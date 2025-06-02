import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';

export default function AboutSection() {
  const { t } = useLanguage();

  const learnMore = () => {
    // Placeholder for navigation to about page
    console.log('Navigate to about page');
  };

  return (
    <section id="about" className="py-20 bg-cream-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-deep-charcoal mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-sage-gray leading-relaxed mb-6">
              {t('about.description')}
            </p>
            <p className="text-lg text-sage-gray leading-relaxed mb-8">
              {t('about.philosophy')}
            </p>
            <Button 
              onClick={learnMore}
              className="bg-deep-charcoal hover:bg-deep-charcoal/90 text-cream-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
            >
              {t('about.learnMore')}
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Peaceful spa interior with natural lighting" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-muted-gold rounded-full opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-sage-gray rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
