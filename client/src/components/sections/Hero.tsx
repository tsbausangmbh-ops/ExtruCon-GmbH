import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/futuristic_digital_landscape_with_connecting_nodes.png";
import { ArrowRight, MapPin, Bot, Zap, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-8 pb-8" itemScope itemType="https://schema.org/WebPage">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="KI-Agentur Fürstenfeldbruck - Digitale Automatisierung und Marketing" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Local SEO Badge */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm" itemProp="areaServed">
                <MapPin className="w-3.5 h-3.5" />
                Fürstenfeldbruck · München · Bayern · Deutschlandweit
              </span>
            </div>
            
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6 mt-6 backdrop-blur-sm">
              Zeitersparnis durch intelligente KI-Automatisierung
            </span>
            
            {/* H1 with Problem-Solution Focus + SEO Keywords */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight" itemProp="headline">
              Weniger Routinearbeit.{" "}
              <span className="text-gradient">Mehr Wachstum.</span>
            </h1>
            
            {/* NLP-optimized subheadline addressing pain points */}
            <h2 className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed font-medium">
              KI-Agenten übernehmen Ihre wiederkehrenden Aufgaben – 
              <span className="text-white"> 24/7, fehlerfrei, skalierbar</span>
            </h2>
            
            <p className="text-base text-gray-400 mb-4 max-w-xl mx-auto" itemProp="description">
              Ihre KI-Agentur aus Fürstenfeldbruck entwickelt intelligente Automatisierungen, 
              die Kundenservice, Lead-Generierung und Marketing optimieren. Deutschlandweit.
            </p>
            
            {/* Trust Signals with specific benefits */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> 80% Zeitersparnis</span>
              <span className="flex items-center gap-1.5"><Bot className="w-4 h-4 text-primary" /> 24/7 verfügbar</span>
              <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-primary" /> Kostenlose Beratung</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-30">
              <Link href="/kontakt">
                <span className="inline-flex items-center justify-center h-12 px-8 bg-primary text-background hover:bg-primary/90 font-bold text-lg rounded-md transition-colors cursor-pointer" data-testid="button-hero-cta">
                  Kostenlose Erstberatung
                </span>
              </Link>
              <a href="#services" className="inline-flex items-center justify-center h-12 px-8 border border-white/20 text-white hover:bg-white/10 font-medium text-lg rounded-md transition-colors group cursor-pointer" data-testid="button-hero-secondary">
                KI-Agenten entdecken <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="/ki-bot">
                <span className="inline-flex items-center justify-center h-12 px-8 border border-primary/50 text-primary hover:bg-primary/10 font-medium text-lg rounded-md transition-colors group cursor-pointer" data-testid="button-hero-bot">
                  KI Bot testen <Bot className="ml-2 w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
}
