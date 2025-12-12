import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">Datenschutzerklärung</h1>
          
          <section className="mb-10 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4" id="m716">Präambel</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als "Onlineangebot").
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
            <p className="text-gray-500 text-sm">Stand: 12. Dezember 2025</p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Inhaltsübersicht</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-400">
              <li><a href="#m716" className="text-cyan-400 hover:text-cyan-300 transition-colors">Präambel</a></li>
              <li><a href="#m3" className="text-cyan-400 hover:text-cyan-300 transition-colors">Verantwortlicher</a></li>
              <li><a href="#mOverview" className="text-cyan-400 hover:text-cyan-300 transition-colors">Übersicht der Verarbeitungen</a></li>
              <li><a href="#m2427" className="text-cyan-400 hover:text-cyan-300 transition-colors">Maßgebliche Rechtsgrundlagen</a></li>
              <li><a href="#m27" className="text-cyan-400 hover:text-cyan-300 transition-colors">Sicherheitsmaßnahmen</a></li>
              <li><a href="#m25" className="text-cyan-400 hover:text-cyan-300 transition-colors">Übermittlung von Daten</a></li>
              <li><a href="#m24" className="text-cyan-400 hover:text-cyan-300 transition-colors">Internationale Datentransfers</a></li>
              <li><a href="#m12" className="text-cyan-400 hover:text-cyan-300 transition-colors">Datenspeicherung und Löschung</a></li>
              <li><a href="#m10" className="text-cyan-400 hover:text-cyan-300 transition-colors">Rechte der betroffenen Personen</a></li>
              <li><a href="#m317" className="text-cyan-400 hover:text-cyan-300 transition-colors">Geschäftliche Leistungen</a></li>
            </ul>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-card/30 border border-white/5" id="m3">
            <h2 className="text-xl font-bold text-white mb-4">Verantwortlicher</h2>
            <div className="text-gray-400 leading-relaxed space-y-2">
              <p className="font-semibold text-gray-200">Extrucon GmbH</p>
              <p>Richard-Wagner-Platz 13<br />42105 Wuppertal</p>
              <p className="mt-4"><strong className="text-gray-200">Vertretungsberechtigte Personen:</strong> Maral Ibrahim Agha</p>
              <p><strong className="text-gray-200">E-Mail-Adresse:</strong> <a href="mailto:info@extrucon.de" className="text-cyan-400 hover:text-cyan-300">info@extrucon.de</a></p>
              <p><strong className="text-gray-200">Impressum:</strong> <a href="https://extrucon.de" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">https://extrucon.de</a></p>
            </div>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-card/30 border border-white/5" id="mOverview">
            <h2 className="text-xl font-bold text-white mb-4">Übersicht der Verarbeitungen</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.
            </p>

            <h3 className="text-lg font-semibold text-gray-200 mb-3">Arten der verarbeiteten Daten</h3>
            <ul className="text-gray-400 mb-6 grid grid-cols-1 md:grid-cols-2 gap-1 list-disc list-inside">
              <li>Bestandsdaten</li>
              <li>Beschäftigtendaten</li>
              <li>Zahlungsdaten</li>
              <li>Standortdaten</li>
              <li>Kontaktdaten</li>
              <li>Inhaltsdaten</li>
              <li>Vertragsdaten</li>
              <li>Nutzungsdaten</li>
              <li>Meta-, Kommunikations- und Verfahrensdaten</li>
              <li>Protokolldaten</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-200 mb-3">Kategorien betroffener Personen</h3>
            <ul className="text-gray-400 mb-6 grid grid-cols-1 md:grid-cols-2 gap-1 list-disc list-inside">
              <li>Leistungsempfänger und Auftraggeber</li>
              <li>Beschäftigte</li>
              <li>Interessenten</li>
              <li>Kommunikationspartner</li>
              <li>Nutzer</li>
              <li>Geschäfts- und Vertragspartner</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-200 mb-3">Zwecke der Verarbeitung</h3>
            <ul className="text-gray-400 grid grid-cols-1 md:grid-cols-2 gap-1 list-disc list-inside">
              <li>Erbringung vertraglicher Leistungen</li>
              <li>Kommunikation</li>
              <li>Sicherheitsmaßnahmen</li>
              <li>Direktmarketing</li>
              <li>Reichweitenmessung</li>
              <li>Tracking</li>
              <li>Büro- und Organisationsverfahren</li>
              <li>Konversionsmessung</li>
              <li>Marketing</li>
              <li>Bereitstellung unseres Onlineangebotes</li>
            </ul>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-card/30 border border-white/5" id="m2427">
            <h2 className="text-xl font-bold text-white mb-4">Maßgebliche Rechtsgrundlagen</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <strong className="text-gray-200">Maßgebliche Rechtsgrundlagen nach der DSGVO:</strong> Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten.
            </p>
            <ul className="text-gray-400 space-y-4">
              <li>
                <strong className="text-gray-200">Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> – Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
              </li>
              <li>
                <strong className="text-gray-200">Vertragserfüllung (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)</strong> – Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, erforderlich.
              </li>
              <li>
                <strong className="text-gray-200">Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)</strong> – Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt.
              </li>
              <li>
                <strong className="text-gray-200">Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> – Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten notwendig.
              </li>
            </ul>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-card/30 border border-white/5" id="m27">
            <h2 className="text-xl font-bold text-white mb-4">Sicherheitsmaßnahmen</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <strong className="text-gray-200">TLS-/SSL-Verschlüsselung (HTTPS):</strong> Um die Daten der Nutzer, die über unsere Online-Dienste übertragen werden, vor unerlaubten Zugriffen zu schützen, setzen wir auf die TLS-/SSL-Verschlüsselungstechnologie. Diese Technologien verschlüsseln die Informationen, die zwischen der Website und dem Browser des Nutzers übertragen werden, wodurch die Daten vor unbefugtem Zugriff geschützt sind.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-card/30 border border-white/5" id="m25">
            <h2 className="text-xl font-bold text-white mb-4">Übermittlung von personenbezogenen Daten</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass diese an andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt beziehungsweise ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z.B. mit IT-Aufgaben beauftragte Dienstleister gehören oder Anbieter von Diensten und Inhalten, die in eine Website eingebunden sind.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <strong className="text-gray-200">Datenübermittlung innerhalb der Organisation:</strong> Wir können personenbezogene Daten an andere Abteilungen oder Einheiten innerhalb unserer Organisation übermitteln oder ihnen den Zugriff darauf gewähren. Sofern die Datenweitergabe zu administrativen Zwecken erfolgt, beruht sie auf unseren berechtigten unternehmerischen und betriebswirtschaftlichen Interessen.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-card/30 border border-white/5" id="m24">
            <h2 className="text-xl font-bold text-white mb-4">Internationale Datentransfers</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <strong className="text-gray-200">Datenverarbeitung in Drittländern:</strong> Sofern wir Daten in ein Drittland (d.h. außerhalb der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR)) übermitteln, erfolgt dies stets im Einklang mit den gesetzlichen Vorgaben.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Für Datenübermittlungen in die USA stützen wir uns vorrangig auf das Data Privacy Framework (DPF), welches durch einen Angemessenheitsbeschluss der EU-Kommission vom 10.07.2023 als sicherer Rechtsrahmen anerkannt wurde. Zusätzlich haben wir mit den jeweiligen Anbietern Standardvertragsklauseln abgeschlossen.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Weitere Informationen zum DPF finden Sie unter: <a href="https://www.dataprivacyframework.gov/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">www.dataprivacyframework.gov</a>
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-card/30 border border-white/5" id="m12">
            <h2 className="text-xl font-bold text-white mb-4">Allgemeine Informationen zur Datenspeicherung und Löschung</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den gesetzlichen Bestimmungen, sobald die zugrundeliegenden Einwilligungen widerrufen werden oder keine weiteren rechtlichen Grundlagen für die Verarbeitung bestehen.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Insbesondere müssen Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung notwendig ist zur Rechtsverfolgung oder zum Schutz der Rechte anderer natürlicher oder juristischer Personen, entsprechend archiviert werden.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Bei mehreren Angaben zur Aufbewahrungsdauer oder Löschungsfristen eines Datums ist stets die längste Frist maßgeblich.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-card/30 border border-white/5" id="m10">
            <h2 className="text-xl font-bold text-white mb-4">Rechte der betroffenen Personen</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
            </p>
            <ul className="text-gray-400 space-y-3">
              <li>
                <strong className="text-gray-200">Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten Widerspruch einzulegen.
              </li>
              <li>
                <strong className="text-gray-200">Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.
              </li>
              <li>
                <strong className="text-gray-200">Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten.
              </li>
              <li>
                <strong className="text-gray-200">Recht auf Berichtigung:</strong> Sie haben das Recht, die Vervollständigung oder Berichtigung unrichtiger Daten zu verlangen.
              </li>
              <li>
                <strong className="text-gray-200">Recht auf Löschung:</strong> Sie haben das Recht zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden.
              </li>
              <li>
                <strong className="text-gray-200">Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
              </li>
              <li>
                <strong className="text-gray-200">Beschwerde bei Aufsichtsbehörde:</strong> Sie haben das Recht auf Beschwerde bei einer Aufsichtsbehörde.
              </li>
            </ul>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-card/30 border border-white/5" id="m317">
            <h2 className="text-xl font-bold text-white mb-4">Geschäftliche Leistungen</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z.B. Kunden und Interessenten (zusammenfassend als „Vertragspartner" bezeichnet), im Rahmen von vertraglichen und vergleichbaren Rechtsverhältnissen sowie damit verbundenen Maßnahmen und im Hinblick auf die Kommunikation mit den Vertragspartnern.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Wir verwenden diese Daten, um unsere vertraglichen Verpflichtungen zu erfüllen. Dazu gehören insbesondere die Pflichten zur Erbringung der vereinbarten Leistungen, etwaige Aktualisierungspflichten und Abhilfe bei Gewährleistungs- und sonstigen Leistungsstörungen.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten, d.h. grundsätzlich nach vier Jahren, es sei denn, dass die Daten aus gesetzlichen Gründen der Archivierung aufbewahrt werden müssen (etwa für Steuerzwecke im Regelfall zehn Jahre).
            </p>
          </section>

          <section className="p-6 rounded-xl bg-card/30 border border-white/5" id="m605">
            <h2 className="text-xl font-bold text-white mb-4">Einsatz von Online-Plattformen zu Angebots- und Vertriebszwecken</h2>
            <p className="text-gray-400 leading-relaxed">
              Wir bieten unsere Leistungen auf Online-Plattformen, die von anderen Dienstanbietern betrieben werden, an. In diesem Zusammenhang gelten zusätzlich zu unseren Datenschutzhinweisen die Datenschutzhinweise der jeweiligen Plattformen. Dies gilt insbesondere im Hinblick auf die Durchführung des Zahlungsvorgangs und der auf den Plattformen eingesetzten Verfahren zur Reichweitemessung und zum interessensbezogenen Marketing.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
