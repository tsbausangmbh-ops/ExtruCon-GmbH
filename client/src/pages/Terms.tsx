import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-3xl font-bold font-display text-white mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">1. Geltungsbereich</h2>
            <p className="text-gray-400 mb-4">
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der Extrucon GmbH (nachfolgend "Anbieter" genannt) und ihren Kunden (nachfolgend "Kunde" genannt) über die Erbringung von Dienstleistungen in den Bereichen Künstliche Intelligenz (KI), Social Media Marketing, Webentwicklung und Content-Erstellung.
            </p>
            <p className="text-gray-400 mb-4">
              Soweit nicht anders vereinbart, gelten diese AGB sowohl für Verbraucher (B2C) als auch für Unternehmer (B2B).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">2. Leistungen im Bereich KI & Bots</h2>
            <p className="text-gray-400 mb-4">
              Der Anbieter entwickelt und implementiert KI-gestützte Lösungen (z.B. Chatbots, Automatisierungen). Der Kunde erkennt an, dass KI-Systeme auf Wahrscheinlichkeiten basieren und keine 100%ige Fehlerfreiheit garantiert werden kann.
            </p>
            <p className="text-gray-400 mb-4">
              Der Kunde ist dafür verantwortlich, dass die Eingabedaten frei von Rechten Dritter sind und nicht gegen geltendes Recht verstoßen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">3. Leistungen im Bereich Social Media</h2>
            <p className="text-gray-400 mb-4">
              Der Anbieter betreut Social-Media-Präsenzen des Kunden. Der Anbieter schuldet das Tätigwerden, nicht jedoch einen bestimmten Erfolg (z.B. bestimmte Anzahl von Followern oder Likes), sofern nicht ausdrücklich anders vereinbart.
            </p>
            <p className="text-gray-400 mb-4">
              Der Kunde stellt dem Anbieter alle notwendigen Inhalte und Zugänge rechtzeitig zur Verfügung.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">4. Mitwirkungspflichten des Kunden</h2>
            <p className="text-gray-400 mb-4">
              Der Kunde unterstützt den Anbieter bei der Erfüllung der vertraglich geschuldeten Leistungen. Dazu gehört insbesondere die rechtzeitige Bereitstellung von Informationen, Datenmaterial sowie Hard- und Software, soweit die Mitwirkungsleistungen des Kunden dies erfordern.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">5. Zahlungsbedingungen</h2>
            <p className="text-gray-400 mb-4">
              Soweit nicht anders vereinbart, sind Rechnungen sofort nach Rechnungserhalt ohne Abzug zahlbar. Für B2B-Kunden gelten die im Angebot vereinbarten Zahlungsziele.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">6. Haftung</h2>
            <p className="text-gray-400 mb-4">
              Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit. Für leichte Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">7. Schlussbestimmungen</h2>
            <p className="text-gray-400 mb-4">
              Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist, soweit gesetzlich zulässig, der Sitz des Anbieters.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
