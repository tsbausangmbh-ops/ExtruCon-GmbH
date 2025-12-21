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

export default function Kroatien() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <SEOHead
        title="ExtruCon GmbH | KI-Agentur für Kroatien"
        description="Ihre KI-Agentur für Kroatien. KI-Agenten, Automatisierungen, Webentwicklung & Marketing mit künstlicher Intelligenz. Kostenlose Beratung!"
        keywords="KI Agentur Kroatien, KI Agentur Hrvatska, AI Agency Croatia, Automatisierung, KI Beratung, Zagreb, Split, Dubrovnik"
        canonical="https://extrucon.de/kroatien"
        geoRegion="HR"
        geoPlacename="Kroatien"
      />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Statistics />
        <Funnel />
        <Services />
        <Process />
        <References />
        <TrustSignals />
        <HomeFAQ />
        <About />
        <Contact />
        <ExploreMoreSection />
      </main>
      <Footer />
    </div>
  );
}
