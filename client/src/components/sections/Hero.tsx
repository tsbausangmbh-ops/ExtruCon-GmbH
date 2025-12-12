import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/futuristic_digital_landscape_with_connecting_nodes.png";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-8 pb-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Digitale Zukunft - ExtruCon Marketing Agentur Fürstenfeldbruck" 
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
              <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5" />
                Deutschlandweit · Sitz in Fürstenfeldbruck
              </span>
            </div>
            
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6 backdrop-blur-sm">
              Das ExtruCon Funnel-System für messbaren Erfolg
            </span>
            
            {/* H1 with SEO Keywords */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight">
              Ihre Marketing & KI Agentur{" "}
              <span className="text-gradient">deutschlandweit</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
              Wir verwandeln Besucher in zahlende Kunden. Unser spezialisiertes SEO- & Geo-System 
              platziert Ihr Unternehmen genau dort, wo Ihre Kunden suchen – in ganz Deutschland.
            </p>
            
            {/* Trust Signals */}
            <p className="text-sm text-gray-500 mb-8">
              ✓ Deutschlandweiter Service · ✓ 50+ zufriedene Kunden · ✓ Kostenlose Erstberatung
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-background hover:bg-primary/90 font-bold text-lg h-12 px-8" data-testid="button-hero-cta">
                Kostenlose Analyse anfordern
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white font-medium text-lg h-12 px-8 group" data-testid="button-hero-secondary">
                System ansehen <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
}
