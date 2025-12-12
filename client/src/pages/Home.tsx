import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Funnel } from "@/components/sections/Funnel";
import { Problem } from "@/components/sections/Problem";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";

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
        {/* About Section */}
        <About />
        {/* FAQ Section */}
        <FAQ />
        {/* Funnel Logic: 4. Action */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
