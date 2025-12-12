import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <div id="about" className="py-24 container mx-auto px-4 text-center">
             <span className="text-primary text-sm font-medium uppercase tracking-widest mb-2 block">About Us</span>
             <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">Innovating the Digital Landscape</h2>
             <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
               At Extrucon GmbH, we believe in the power of technology to transform businesses. 
               We are not just a service provider; we are your strategic partner in navigating 
               the complexities of the digital age. From AI-driven automation to captivating 
               content strategies, we deliver results that matter.
             </p>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
