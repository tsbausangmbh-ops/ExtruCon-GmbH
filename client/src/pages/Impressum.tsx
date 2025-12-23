import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/lib/i18n";
import { SEOHead } from "@/components/SEOHead";

export default function Impressum() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead
        title="Impressum | ExtruCon GmbH – GPT-4 KI-Agentur Fürstenfeldbruck"
        description="Impressum ExtruCon GmbH: KI-Agentur für GPT-4 & Claude AI in Fürstenfeldbruck bei München. § 5 TMG. HRB 18623 Amtsgericht München. Tel: 089 444438879."
        keywords="Impressum ExtruCon, ExtruCon GmbH, HRB 18623, KI-Agentur Fürstenfeldbruck, Kontakt München, Hasenheide 8"
        canonical="https://extrucon.de/impressum"
        geoRegion="DE-BY"
        geoPlacename="Fürstenfeldbruck"
      />
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">{t.legalPages.impressumTitle}</h1>
          {language !== 'de' && (
            <p className="text-amber-400/80 text-sm mb-8 p-3 rounded-lg bg-amber-400/10 border border-amber-400/20">
              {t.legalPages.legalNotice}
            </p>
          )}

          {/* Angaben gemäß § 5 TMG */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-gray-400 leading-relaxed">
              ExtruCon GmbH<br />
              Hasenheide 8<br />
              82256 Fürstenfeldbruck
            </p>
          </section>

          {/* Vertreten durch */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Vertreten durch</h2>
            <p className="text-gray-400 leading-relaxed">
              Geschäftsführer: Maral Ibrahim Agha
            </p>
          </section>

          {/* Kontakt */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Kontakt</h2>
            <p className="text-gray-400 leading-relaxed">
              E-Mail: <a href="mailto:info@extrucon.de" className="text-cyan-400 hover:text-cyan-300 transition-colors">info@extrucon.de</a><br />
              Telefon: <a href="tel:+4989444438879" className="text-cyan-400 hover:text-cyan-300 transition-colors">089 444438879</a><br />
              Website: <a href="https://extrucon.de" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">https://extrucon.de</a>
            </p>
          </section>

          {/* Registereintrag */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Registereintrag</h2>
            <p className="text-gray-400 leading-relaxed">
              Eintragung im Handelsregister<br />
              Registergericht: Amtsgericht München<br />
              Registernummer: HRB 18623
            </p>
          </section>

          {/* Umsatzsteuer-ID */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Umsatzsteuer-ID</h2>
            <p className="text-gray-400 leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE [Nummer eintragen]
            </p>
          </section>

          {/* Verantwortlich für den Inhalt */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p className="text-gray-400 leading-relaxed">
              Maral Ibrahim Agha<br />
              Hasenheide 8<br />
              82256 Fürstenfeldbruck
            </p>
          </section>

          {/* EU-Streitschlichtung */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">EU-Streitschlichtung</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">https://ec.europa.eu/consumers/odr</a>
            </p>
            <p className="text-gray-400 leading-relaxed">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          {/* Verbraucherstreitbeilegung */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p className="text-gray-400 leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          {/* Haftung für Inhalte */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Haftung für Inhalte</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          {/* Haftung für Links */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Haftung für Links</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          {/* Urheberrecht */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Urheberrecht</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          {/* KI-Hinweis gemäß EU AI Act */}
          <section className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
            <h2 className="text-xl font-bold text-white mb-4">KI-Hinweis gemäß EU AI Act (Art. 50)</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <strong className="text-cyan-400">Transparenzhinweis:</strong> ExtruCon GmbH setzt zur Unterstützung der Geschäftsprozesse KI-basierte Systeme ein. Diese werden u.a. bei der Angebotserstellung, Kommunikation und Dokumentenverarbeitung genutzt. Alle endgültigen Entscheidungen werden von qualifizierten Mitarbeitern getroffen und verantwortet.
            </p>
            <p className="text-gray-500 text-sm">
              <strong>Rechtsgrundlage:</strong> Verordnung (EU) 2024/1689 (EU AI Act), Art. 22 DSGVO
            </p>
          </section>

        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
