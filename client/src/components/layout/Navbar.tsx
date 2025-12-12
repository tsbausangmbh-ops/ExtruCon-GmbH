import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Bot, Share2, Globe, TrendingUp, Palette, FileText } from "lucide-react";
import { useState } from "react";
import logoImage from "@assets/Logo_Neutral_1765559088189.png";

const services = [
  { name: "KI-Agenten", href: "/ki-agenten", icon: Bot },
  { name: "Automatisierungen", href: "/automatisierungen", icon: Share2 },
  { name: "Webseiten mit KI", href: "/webseiten-ki", icon: Globe },
  { name: "Social Media", href: "/leistungen/social-media", icon: TrendingUp },
  { name: "Content Creation", href: "/leistungen/content", icon: FileText },
  { name: "Performance Marketing", href: "/leistungen/marketing", icon: Palette },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src={logoImage} alt="ExtruCon GmbH" className="h-10" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Leistungen Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-primary transition-colors">
              Leistungen
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-background/95 backdrop-blur-md border border-white/10 rounded-xl p-2 min-w-[220px] shadow-xl">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-primary transition-colors"
                    >
                      <service.icon className="w-4 h-4" />
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="/ratgeber" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            Ratgeber
          </a>
          <a href="/faq" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            FAQ
          </a>
          <a href="/ueber-uns" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            Über uns
          </a>
          <a href="/kontakt" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            Kontakt
          </a>
          <Link href="/ki-bot">
            <Button variant="default" className="bg-primary text-background hover:bg-primary/90 font-bold">
              KI Bot
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-white/10 p-4 absolute w-full">
          <div className="flex flex-col gap-2">
            <div className="border-b border-white/10 pb-2 mb-2">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Leistungen</p>
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="flex items-center gap-3 px-2 py-2 text-gray-300 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <service.icon className="w-4 h-4" />
                  {service.name}
                </a>
              ))}
            </div>
            <a
              href="/ratgeber"
              className="text-lg font-medium text-gray-300 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Ratgeber
            </a>
            <a
              href="/faq"
              className="text-lg font-medium text-gray-300 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <a
              href="/ueber-uns"
              className="text-lg font-medium text-gray-300 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Über uns
            </a>
            <a
              href="/kontakt"
              className="text-lg font-medium text-gray-300 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </a>
            <Link href="/ki-bot" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary text-background font-bold mt-2">
                KI Bot
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
