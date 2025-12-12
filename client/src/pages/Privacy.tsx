import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-3xl font-bold font-display text-white mb-8">Datenschutzerklärung nach DSGVO Verordnung 52025</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Allgemeine Hinweise</h3>
            <p className="text-gray-400 mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">2. Hosting und Content Delivery Networks (CDN)</h2>
            <p className="text-gray-400 mb-4">
              Wir hosten die Inhalte unserer Website bei folgenden Anbietern:
            </p>
            <p className="text-gray-400 mb-4">
              <strong>Externes Hosting</strong><br />
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Datenschutz</h3>
            <p className="text-gray-400 mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p className="text-gray-400 mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              Extrucon GmbH<br />
              Tech Park 1<br />
              12345 Berlin<br />
              Deutschland<br /><br />
              Telefon: +49 (0) 123 456 789<br />
              E-Mail: contact@extrucon.de
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">4. Datenerfassung auf dieser Website</h2>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Cookies</h3>
            <p className="text-gray-400 mb-4">
              Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
            </p>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Kontaktformular</h3>
            <p className="text-gray-400 mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">5. Analyse-Tools und Werbung</h2>
            <p className="text-gray-400 mb-4">
              Soweit Sie Ihre Einwilligung erklärt haben, wird auf dieser Website Google Analytics eingesetzt, ein Webanalysedienst der Google Ireland Limited.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
