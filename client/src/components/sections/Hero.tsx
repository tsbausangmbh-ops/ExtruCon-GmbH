import heroBg from "@assets/generated_images/optimized/hero-bg.webp";
import { ArrowRight, MapPin, Bot, Zap, Clock } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-8 pb-8" itemScope itemType="https://schema.org/WebPage">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="KI-Agentur Fürstenfeldbruck - Digitale Automatisierung und Marketing" 
          className="w-full h-full object-cover opacity-60"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-4 z-40 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm" itemProp="areaServed">
                <MapPin className="w-3.5 h-3.5" />
                {t.hero.location}
              </span>
            </div>
            
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6 mt-6 backdrop-blur-sm">
              {t.hero.badge}
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight" itemProp="headline">
              {t.hero.title1}{" "}
              <span className="text-gradient">{t.hero.title2}</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed font-medium">
              {t.hero.subtitle}
              <span className="text-white"> {t.hero.subtitleHighlight}</span>
            </h2>
            
            <p className="text-base text-gray-400 mb-4 max-w-xl mx-auto" itemProp="description">
              {t.hero.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> {t.hero.timeSaving}</span>
              <span className="flex items-center gap-1.5"><Bot className="w-4 h-4 text-primary" /> {t.hero.available}</span>
              <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-primary" /> {t.hero.freeConsultation}</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-30">
              <a href="/kontakt" className="inline-flex items-center justify-center h-12 px-8 bg-primary text-background hover:bg-primary/90 font-bold text-lg rounded-md transition-colors cursor-pointer" data-testid="button-hero-cta">
                {t.hero.ctaPrimary}
              </a>
              <a href="#services" className="inline-flex items-center justify-center h-12 px-8 border border-white/20 text-white hover:bg-white/10 font-medium text-lg rounded-md transition-colors group cursor-pointer" data-testid="button-hero-secondary">
                {t.hero.ctaSecondary} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/ki-bot" className="inline-flex items-center justify-center h-12 px-8 border border-primary/50 text-primary hover:bg-primary/10 font-medium text-lg rounded-md transition-colors group cursor-pointer" data-testid="button-hero-bot">
                {t.hero.ctaBot} <Bot className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
}
