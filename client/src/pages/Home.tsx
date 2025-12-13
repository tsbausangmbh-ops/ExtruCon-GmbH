import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Funnel } from "@/components/sections/Funnel";
import { Problem } from "@/components/sections/Problem";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { References } from "@/components/sections/References";
import { SEOHead } from "@/components/SEOHead";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <SEOHead
        title="ExtruCon GmbH | KI-Agentur Fürstenfeldbruck bei München"
        description="Ihre KI-Agentur in Fürstenfeldbruck. KI-Agenten, Automatisierungen, Webentwicklung & Marketing mit künstlicher Intelligenz. Kostenlose Beratung!"
        keywords="KI Agentur Fürstenfeldbruck, KI Agentur München, künstliche Intelligenz Bayern, AI Agency, Automatisierung"
        canonical="https://extrucon.de"
      />
      <Navbar />
      <main>
        <Hero />
        {/* Funnel Logic: 1. Problem Awareness */}
        <Problem />
        {/* Funnel Logic: 2. The System/Solution */}
        <Funnel />
        {/* Funnel Logic: 3. The Execution Tools (Services) */}
        <Services />
        {/* References Section */}
        <References />
        {/* About Section */}
        <About />
        {/* Funnel Logic: 4. Action */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
