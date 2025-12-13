import { memo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Funnel } from "@/components/sections/Funnel";
import { Problem } from "@/components/sections/Problem";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { SEOHead } from "@/components/SEOHead";
import { KIWebseitenHighlight } from "@/components/sections/KIWebseitenHighlight";
import { PAGE_KEYWORDS } from "@/lib/seo-keywords";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <SEOHead
        title="KI-Agentur München | Chatbots & Automatisierung ab 2.500€ | ExtruCon"
        description="KI-Agenten & Chatbots für Ihr Unternehmen. 80% Zeitersparnis durch Automatisierung. ✓ Kostenlose Erstberatung ✓ Made in Germany"
        keywords={PAGE_KEYWORDS.home}
        canonical="https://extrucon.de"
      />
      <Navbar />
      <main>
        <Hero />
        {/* Funnel Logic: 1. Problem Awareness */}
        <Problem />
        {/* Funnel Logic: 2. The System/Solution */}
        <Funnel />
        {/* KI Webseiten Highlight */}
        <KIWebseitenHighlight />
        {/* Funnel Logic: 3. The Execution Tools (Services) */}
        <Services />
        {/* About Section */}
        <About />
        {/* Funnel Logic: 4. Action */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default memo(Home);
