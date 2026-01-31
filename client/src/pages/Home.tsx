import { lazy, Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { SEOHead } from "@/components/SEOHead";

// Lazy load below-the-fold sections to reduce initial DOM size
const Services = lazy(() => import("@/components/sections/Services").then(m => ({ default: m.Services })));
const Funnel = lazy(() => import("@/components/sections/Funnel").then(m => ({ default: m.Funnel })));
const About = lazy(() => import("@/components/sections/About").then(m => ({ default: m.About })));
const Contact = lazy(() => import("@/components/sections/Contact").then(m => ({ default: m.Contact })));
const References = lazy(() => import("@/components/sections/References").then(m => ({ default: m.References })));
const HomeFAQ = lazy(() => import("@/components/sections/HomeFAQ").then(m => ({ default: m.HomeFAQ })));
const Statistics = lazy(() => import("@/components/sections/Statistics").then(m => ({ default: m.Statistics })));
const Process = lazy(() => import("@/components/sections/Process").then(m => ({ default: m.Process })));
const TrustSignals = lazy(() => import("@/components/sections/TrustSignals").then(m => ({ default: m.TrustSignals })));
const ExploreMoreSection = lazy(() => import("@/components/InternalLinks").then(m => ({ default: m.ExploreMoreSection })));
const LocationLinks = lazy(() => import("@/components/InternalLinks").then(m => ({ default: m.LocationLinks })));

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
        <Problem />
        <Suspense fallback={null}>
          <Statistics />
          <Funnel />
          <Services />
          <Process />
          <References />
          <TrustSignals />
          <HomeFAQ />
          <About />
          <Contact />
          <LocationLinks />
          <ExploreMoreSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
