import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Funnel } from "@/components/sections/Funnel";
import { Problem } from "@/components/sections/Problem";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        {/* Funnel Logic: 1. Problem Awareness */}
        <Problem />
        {/* Funnel Logic: 2. The System/Solution */}
        <Funnel />
        {/* Funnel Logic: 3. The Execution Tools (Services) */}
        <Services />
        
        <div id="about" className="py-24 container mx-auto px-4 text-center">
             <span className="text-primary text-sm font-medium uppercase tracking-widest mb-2 block">Über uns</span>
             <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">Innovation der digitalen Landschaft</h2>
             <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
               Bei der Extrucon GmbH glauben wir an die Kraft der Technologie, Unternehmen zu transformieren. 
               Wir sind nicht nur Dienstleister, sondern Ihr strategischer Partner in der digitalen Ära. 
               Von KI-gesteuerter Automatisierung bis hin zu fesselnden Content-Strategien liefern wir Ergebnisse, die zählen.
             </p>
        </div>
        
        {/* Funnel Logic: 4. Action */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
