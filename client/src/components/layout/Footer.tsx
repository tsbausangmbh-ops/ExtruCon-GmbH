import { MapPin, Mail, Phone, Clock } from "lucide-react";
import logoImg from "@assets/Logo_1765563135323.png";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer 
      className="bg-background border-t border-white/10 py-8 mt-0" 
      itemScope 
      itemType="https://schema.org/LocalBusiness"
      role="contentinfo"
      aria-label="Seitenfuß"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <a href="https://extrucon.de" className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded" itemProp="url" aria-label="ExtruCon GmbH Startseite">
              <img src={logoImg} alt="ExtruCon GmbH Logo" className="h-10 w-10 object-contain" loading="lazy" />
              <span className="text-xl font-bold font-display tracking-wider text-white" itemProp="name">
                ExtruCon GmbH
              </span>
            </a>
            <p className="text-gray-400 max-w-sm mb-4" itemProp="description">
              {t.footer.slogan}
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <a href="/ki-agenten" className="px-2 py-1 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors">{t.nav.kiAgents}</a>
              <a href="/automatisierungen" className="px-2 py-1 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors">{t.nav.automation}</a>
              <a href="/webseiten-ki" className="px-2 py-1 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors">{t.nav.websitesKI}</a>
              <a href="/leistungen/marketing" className="px-2 py-1 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors">{t.nav.marketing}</a>
            </div>
          </div>
          
          <nav aria-label="Leistungen">
            <h3 className="font-bold text-white mb-4" id="footer-services">{t.footer.services}</h3>
            <ul className="space-y-2 text-gray-400 text-sm" aria-labelledby="footer-services">
              <li><a href="/ki-agenten" className="hover:text-primary transition-colors">{t.nav.kiAgents}</a></li>
              <li><a href="/automatisierungen" className="hover:text-primary transition-colors">{t.nav.automation}</a></li>
              <li><a href="/webseiten-ki" className="hover:text-primary transition-colors">{t.nav.websitesKI}</a></li>
              <li><a href="/leistungen/social-media" className="hover:text-primary transition-colors">{t.nav.socialMedia}</a></li>
              <li><a href="/leistungen/marketing" className="hover:text-primary transition-colors">{t.nav.marketing}</a></li>
              <li><a href="/leistungen/content" className="hover:text-primary transition-colors">{t.nav.contentCreation}</a></li>
              <li><a href="/leistungen/seo" className="hover:text-primary transition-colors">{t.nav.seo}</a></li>
              <li><a href="/leistungen/markenaufbau" className="hover:text-primary transition-colors">Branding</a></li>
              <li><a href="/leistungen/web" className="hover:text-primary transition-colors">Webentwicklung</a></li>
              <li><a href="/leistungen/ki-automatisierung" className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">KI-Automatisierung</a></li>
            </ul>
          </nav>

          <nav aria-label="Standorte">
            <h3 className="font-bold text-white mb-4" id="footer-locations">Standorte</h3>
            <ul className="space-y-2 text-gray-400 text-sm" aria-labelledby="footer-locations">
              <li><a href="/muenchen" className="hover:text-primary transition-colors">München</a></li>
              <li><a href="/muenchen/schwabing" className="hover:text-primary transition-colors">Schwabing</a></li>
              <li><a href="/muenchen/bogenhausen" className="hover:text-primary transition-colors">Bogenhausen</a></li>
              <li><a href="/muenchen/nymphenburg" className="hover:text-primary transition-colors">Nymphenburg</a></li>
              <li><a href="/muenchen/gruenwald" className="hover:text-primary transition-colors">Grünwald</a></li>
              <li><a href="/muenchen/harlaching" className="hover:text-primary transition-colors">Harlaching</a></li>
              <li><a href="/starnberg" className="hover:text-primary transition-colors">Starnberg</a></li>
              <li><a href="/dachau" className="hover:text-primary transition-colors">Dachau</a></li>
              <li><a href="/germering" className="hover:text-primary transition-colors">Germering</a></li>
              <li><a href="/puchheim" className="hover:text-primary transition-colors">Puchheim</a></li>
              <li><a href="/olching" className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Olching</a></li>
            </ul>
          </nav>

          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <h3 className="font-bold text-white mb-4">{t.footer.contact}</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span itemProp="name" className="font-medium text-white">ExtruCon GmbH</span><br />
                  <span itemProp="streetAddress">Hasenheide 8</span><br />
                  <span itemProp="postalCode">82256</span> <span itemProp="addressLocality">Fürstenfeldbruck</span>
                  <meta itemProp="addressRegion" content="Bayern" />
                  <meta itemProp="addressCountry" content="DE" />
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@extrucon.de" className="hover:text-primary transition-colors" itemProp="email">info@extrucon.de</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+4989444438879" className="hover:text-primary transition-colors" itemProp="telephone">089 444438879</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{t.footer.openingHours}</span>
                <meta itemProp="openingHours" content="Mo-Fr 08:00-17:00" />
              </li>
            </ul>
            <div className="mt-4">
              <a href="/kontakt" className="text-primary hover:underline text-sm font-medium">→ {t.footer.contactLink}</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 mb-4">
          <p className="text-xs text-gray-500 text-center">
            ExtruCon GmbH · HRB 18623 · Amtsgericht München · {t.footer.legalInfo}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ExtruCon GmbH. {t.footer.allRights}</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="/ueber-uns" className="hover:text-white transition-colors">{t.footer.about}</a>
            <a href="/referenzen" className="hover:text-white transition-colors">{t.nav.referenzen}</a>
            <a href="/faq" className="hover:text-white transition-colors">{t.footer.faq}</a>
            <a href="/ratgeber" className="hover:text-white transition-colors">{t.footer.ratgeber}</a>
            <a href="/ki-bot" className="hover:text-white transition-colors">KI-Chatbot</a>
            <a href="/termin" className="hover:text-white transition-colors">Termin buchen</a>
            <a href="/datenschutz" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="/agb" className="hover:text-white transition-colors">{t.footer.terms}</a>
            <a href="/impressum" className="hover:text-white transition-colors">{t.footer.impressum}</a>
            <a href="/cookies" className="hover:text-white transition-colors">{t.footer.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
