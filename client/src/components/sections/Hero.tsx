import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/futuristic_digital_landscape_with_connecting_nodes.png";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Digital Future Background" 
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
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
              Future Ready Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6 leading-tight">
              We Architect Your <br />
              <span className="text-gradient">Digital Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Extrucon GmbH combines cutting-edge AI, strategic marketing, and immersive web experiences to propel your business into the next era.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-background hover:bg-primary/90 font-bold text-lg h-12 px-8">
                Start Project
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white font-medium text-lg h-12 px-8 group">
                View Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
