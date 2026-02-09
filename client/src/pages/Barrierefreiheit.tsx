import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Accessibility } from "lucide-react";
import heroImg from "@/assets/images/hero-web-abstract.webp";
import { useLanguage } from "@/lib/i18n";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function Barrierefreiheit() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead
        title="Barrierefreiheit | ExtruCon GmbH"
        description="Erklärung zur Barrierefreiheit der ExtruCon GmbH. Informationen zur digitalen Zugänglichkeit unserer Website gemäß BFSG und WCAG 2.1."
        keywords="Barrierefreiheit, Accessibility, WCAG, BFSG, barrierefrei, barrierefreie Website erstellen BFSG 2025, digitale Barrierefreiheit Unternehmen Pflicht"
        canonical="https://extrucon.de/barrierefreiheit"
      />
      <Navbar />
      <main className="pt-24">
        <Breadcrumbs items={[
          { label: "Barrierefreiheit" }
        ]} />
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={heroImg} alt="Barrierefreie Website gemäß BFSG und WCAG 2.1 - digitale Zugänglichkeit für alle Nutzer inklusive Webdesign ExtruCon" className="w-full h-full object-cover opacity-40" fetchPriority="high" decoding="async" width={1920} height={1080} />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                <Accessibility className="w-4 h-4" />
                Barrierefreiheit
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
                Erklärung zur Barrierefreiheit
              </h1>
              <p className="text-lg text-gray-400">
                Digitale Zugänglichkeit für alle Nutzer – gemäß BFSG und WCAG 2.1 Level AA.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {language !== 'de' && (
            <p className="text-amber-400/80 text-sm mb-8 p-3 rounded-lg bg-amber-400/10 border border-amber-400/20">
              {t.legalPages?.legalNotice}
            </p>
          )}

          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Stand der Barrierefreiheit</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Die ExtruCon GmbH ist bemüht, ihre Website im Einklang mit dem Barrierefreiheitsstärkungsgesetz (BFSG) und den Web Content Accessibility Guidelines (WCAG) 2.1 Level AA barrierefrei zugänglich zu machen.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Diese Erklärung zur Barrierefreiheit gilt für die Website <a href="https://extrucon.de" className="text-cyan-400 hover:text-cyan-300 transition-colors">https://extrucon.de</a>.
            </p>
          </section>

          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Maßnahmen zur Barrierefreiheit</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Wir setzen folgende Maßnahmen um, um die Barrierefreiheit unserer Website zu gewährleisten:
            </p>
            <ul className="text-gray-400 space-y-2 list-disc list-inside leading-relaxed">
              <li>Semantische HTML-Struktur mit korrekter Überschriftenhierarchie</li>
              <li>Kontrastreiches Farbschema für gute Lesbarkeit</li>
              <li>Tastaturnavigation für alle interaktiven Elemente</li>
              <li>Alternativtexte für Bilder und Grafiken</li>
              <li>Responsive Design für verschiedene Geräte und Bildschirmgrößen</li>
              <li>ARIA-Labels und -Rollen für Screenreader-Kompatibilität</li>
              <li>Skalierbare Schriftgrößen</li>
              <li>Fokus-Indikatoren für die Tastaturnavigation</li>
            </ul>
          </section>

          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Bekannte Einschränkungen</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Trotz unserer Bemühungen können folgende Bereiche derzeit noch Einschränkungen aufweisen:
            </p>
            <ul className="text-gray-400 space-y-2 list-disc list-inside leading-relaxed">
              <li><strong className="text-gray-200">KI-Chatbot:</strong> Der eingebettete Chatbot kann für Screenreader-Nutzende eingeschränkt zugänglich sein.</li>
              <li><strong className="text-gray-200">Animationen:</strong> Einige dekorative Animationen können für Personen mit Bewegungsempfindlichkeit störend sein. Diese werden bei aktivierter „Reduced Motion"-Einstellung im Betriebssystem reduziert.</li>
              <li><strong className="text-gray-200">Externe Inhalte:</strong> Eingebettete Drittanbieter-Inhalte (z.B. Kalender-Widget) unterliegen nicht vollständig unserer Kontrolle.</li>
            </ul>
          </section>

          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Technische Spezifikationen</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Die Barrierefreiheit dieser Website basiert auf folgenden Technologien:
            </p>
            <ul className="text-gray-400 space-y-2 list-disc list-inside leading-relaxed">
              <li>HTML5</li>
              <li>WAI-ARIA</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Diese Technologien werden verwendet, um die Konformität mit den WCAG 2.1 Level AA Richtlinien sicherzustellen.
            </p>
          </section>

          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Feedback und Kontakt</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Wir begrüßen Ihr Feedback zur Barrierefreiheit unserer Website. Sollten Sie auf Barrieren stoßen oder Verbesserungsvorschläge haben, kontaktieren Sie uns bitte:
            </p>
            <ul className="text-gray-400 space-y-2 leading-relaxed">
              <li>E-Mail: <a href="mailto:info@extrucon.de" className="text-cyan-400 hover:text-cyan-300 transition-colors">info@extrucon.de</a></li>
              <li>Telefon: <a href="tel:+4989444438879" className="text-cyan-400 hover:text-cyan-300 transition-colors">089 444438879</a></li>
              <li>Anschrift: ExtruCon GmbH, Hasenheide 8, 82256 Fürstenfeldbruck</li>
            </ul>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Wir bemühen uns, Ihr Anliegen innerhalb von 2 Wochen zu beantworten und entsprechende Maßnahmen einzuleiten.
            </p>
          </section>

          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Durchsetzungsverfahren</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Sollten Sie nach Ihrer Kontaktaufnahme keine zufriedenstellende Antwort erhalten, können Sie sich an die zuständige Durchsetzungsstelle wenden. In Bayern ist dies:
            </p>
            <p className="text-gray-400 leading-relaxed">
              Landesamt für Digitalisierung, Breitband und Vermessung (LDBV)<br />
              IT-Dienstleistungszentrum des Freistaats Bayern<br />
              St.-Martin-Straße 47<br />
              81541 München<br />
              E-Mail: <a href="mailto:bitv@bayern.de" className="text-cyan-400 hover:text-cyan-300 transition-colors">bitv@bayern.de</a><br />
              Website: <a href="https://www.ldbv.bayern.de" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">www.ldbv.bayern.de</a>
            </p>
          </section>

          <section className="p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Rechtliche Grundlagen</h2>
            <ul className="text-gray-400 space-y-2 list-disc list-inside leading-relaxed">
              <li>Barrierefreiheitsstärkungsgesetz (BFSG) – in Kraft seit 28. Juni 2025</li>
              <li>EU-Richtlinie 2019/882 (European Accessibility Act)</li>
              <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
              <li>Bayerisches Digitalgesetz (BayDiG)</li>
            </ul>
            <p className="text-gray-500 text-sm mt-4">
              Diese Erklärung wurde am 1. Februar 2026 erstellt und wird regelmäßig überprüft und aktualisiert.
            </p>
          </section>

        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
