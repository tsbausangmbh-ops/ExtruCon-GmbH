import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Funnel } from "@/components/sections/Funnel";
import { Problem } from "@/components/sections/Problem";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { References } from "@/components/sections/References";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { Statistics } from "@/components/sections/Statistics";
import { Process } from "@/components/sections/Process";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { SEOHead } from "@/components/SEOHead";
import { ExploreMoreSection } from "@/components/InternalLinks";

// Homepage uses schemas from index.html - no duplicates needed

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <SEOHead
        title="ExtruCon GmbH | KI-Agentur mit GPT-4 & Claude AI | Fürstenfeldbruck"
        description="KI-Agentur Fürstenfeldbruck: GPT-4 Chatbots, Claude AI Agenten, n8n Automatisierung & KI-Websites. Kostenlose Beratung für München & Bayern!"
        keywords="KI Agentur Fürstenfeldbruck, GPT-4 Agentur München, Claude AI Bayern, KI Chatbot, n8n Automatisierung, Midjourney, DALL-E, AI Agency Deutschland, KI Beratung"
        canonical="https://extrucon.de"
        geoRegion="DE-BY"
        geoPlacename="Fürstenfeldbruck"
        ogType="website"
      />
      <Navbar />
      <main>
        <Hero />
        {/* Funnel Logic: 1. Problem Awareness */}
        <Problem />
        {/* Statistics Section */}
        <Statistics />
        {/* Funnel Logic: 2. The System/Solution */}
        <Funnel />
        {/* Funnel Logic: 3. The Execution Tools (Services) */}
        <Services />
        {/* Process Section */}
        <Process />
        {/* References Section */}
        <References />
        {/* Trust Signals */}
        <TrustSignals />
        {/* FAQ Section */}
        <HomeFAQ />
        {/* About Section */}
        <About />
        {/* Funnel Logic: 4. Action */}
        <Contact />
        {/* Explore More Links for SEO */}
        <ExploreMoreSection />
      </main>
      <Footer />
    </div>
  );
}
