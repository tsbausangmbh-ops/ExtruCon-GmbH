import { Cpu, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 py-6 mt-0">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <a href="https://extrucon.de" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <Cpu className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold font-display tracking-wider text-white">
                EXTRUCON
              </span>
            </a>
            <p className="text-gray-400 max-w-sm">
              Wir stärken Unternehmen mit KI der nächsten Generation, Marketing und digitalen Lösungen. 
              Wir gestalten die Zukunft heute.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Leistungen</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/leistungen/ki-automatisierung" className="hover:text-primary transition-colors">KI & Automatisierung</a></li>
              <li><a href="/leistungen/marketing" className="hover:text-primary transition-colors">Performance Marketing</a></li>
              <li><a href="/leistungen/web" className="hover:text-primary transition-colors">Web Entwicklung</a></li>
              <li><a href="/leistungen/social-media" className="hover:text-primary transition-colors">Social Media</a></li>
              <li><a href="/leistungen/content" className="hover:text-primary transition-colors">Texting & Postings</a></li>
              <li><a href="/leistungen/markenaufbau" className="hover:text-primary transition-colors">Markenaufbau</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>ExtruCon GmbH</li>
              <li>Hasenheide 8</li>
              <li>82256 Fürstenfeldbruck</li>
              <li className="pt-2">
                <a href="mailto:info@extrucon.de" className="hover:text-primary transition-colors">info@extrucon.de</a>
              </li>
              <li>
                <a href="tel:+4989444438879" className="hover:text-primary transition-colors">089 444438879</a>
              </li>
              <li className="pt-2">
                <a href="/kontakt" className="text-primary hover:underline">→ Kontaktformular</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Extrucon GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Datenschutzerklärung</a>
            <a href="/terms" className="hover:text-white transition-colors">AGB</a>
            <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
