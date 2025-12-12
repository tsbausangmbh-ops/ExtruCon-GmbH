import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Bot, Share2, Globe, TrendingUp, Palette, FileText } from "lucide-react";
import { useState } from "react";
import logoImage from "@assets/Logo_mittel_Header_1765567902974.png";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/i18n";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { t } = useLanguage();

  const services = [
    { name: t.nav.kiAgents, href: "/ki-agenten", icon: Bot },
    { name: t.nav.automation, href: "/automatisierungen", icon: Share2 },
    { name: t.nav.websitesKI, href: "/webseiten-ki", icon: Globe },
    { name: t.nav.socialMedia, href: "/leistungen/social-media", icon: TrendingUp },
    { name: t.nav.contentCreation, href: "/leistungen/content", icon: FileText },
    { name: t.nav.marketing, href: "/leistungen/marketing", icon: Palette },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between py-1">
        <Link href="/" className="flex items-center">
          <img src={logoImage} alt="ExtruCon GmbH" className="h-[5.5rem]" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="/ki-agenten" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            {t.nav.kiAgents}
          </a>
          <a href="/webseiten-ki" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            {t.nav.websitesKI}
          </a>
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-primary transition-colors">
              {t.nav.services}
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
            {t.nav.ratgeber}
          </a>
          <a href="/faq" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            {t.nav.faq}
          </a>
          <a href="/ueber-uns" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            {t.nav.about}
          </a>
          <a href="/kontakt" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            {t.nav.contact}
          </a>
          <LanguageSwitcher />
          <Link href="/ki-bot">
            <Button variant="default" className="bg-primary text-background hover:bg-primary/90 font-bold">
              {t.nav.getStarted}
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-white/10 p-4 absolute w-full">
          <div className="flex flex-col gap-2">
            <div className="border-b border-white/10 pb-2 mb-2">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{t.nav.services}</p>
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
              {t.nav.ratgeber}
            </a>
            <a
              href="/faq"
              className="text-lg font-medium text-gray-300 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.faq}
            </a>
            <a
              href="/ueber-uns"
              className="text-lg font-medium text-gray-300 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.about}
            </a>
            <a
              href="/kontakt"
              className="text-lg font-medium text-gray-300 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.contact}
            </a>
            <Link href="/ki-bot" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary text-background font-bold mt-2">
                {t.nav.getStarted}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
