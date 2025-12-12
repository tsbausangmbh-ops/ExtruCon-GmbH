import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/lib/i18n";

export default function Privacy() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">{t.legalPages.privacyTitle}</h1>
          {language !== 'de' && (
            <p className="text-amber-400/80 text-sm mb-6 p-3 rounded-lg bg-amber-400/10 border border-amber-400/20">
              {t.legalPages.legalNotice}
            </p>
          )}
          
          {/* Präambel */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4" id="m716">Präambel</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als "Onlineangebot").
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
            <p className="text-gray-500 text-sm">Stand: 12. Dezember 2025</p>
          </section>

          {/* Inhaltsübersicht */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
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
              <li><a href="#m605" className="text-cyan-400 hover:text-cyan-300 transition-colors">Einsatz von Online-Plattformen</a></li>
              <li><a href="#m326" className="text-cyan-400 hover:text-cyan-300 transition-colors">Zahlungsverfahren</a></li>
              <li><a href="#m225" className="text-cyan-400 hover:text-cyan-300 transition-colors">Bereitstellung des Onlineangebots</a></li>
              <li><a href="#m134" className="text-cyan-400 hover:text-cyan-300 transition-colors">Einsatz von Cookies</a></li>
              <li><a href="#m182" className="text-cyan-400 hover:text-cyan-300 transition-colors">Kontakt- und Anfrageverwaltung</a></li>
              <li><a href="#m17" className="text-cyan-400 hover:text-cyan-300 transition-colors">Newsletter</a></li>
              <li><a href="#m638" className="text-cyan-400 hover:text-cyan-300 transition-colors">Werbliche Kommunikation</a></li>
              <li><a href="#m263" className="text-cyan-400 hover:text-cyan-300 transition-colors">Webanalyse und Optimierung</a></li>
              <li><a href="#m264" className="text-cyan-400 hover:text-cyan-300 transition-colors">Onlinemarketing</a></li>
              <li><a href="#mKI" className="text-cyan-400 hover:text-cyan-300 transition-colors">Einsatz von Künstlicher Intelligenz</a></li>
              <li><a href="#m136" className="text-cyan-400 hover:text-cyan-300 transition-colors">Social Media Präsenzen</a></li>
              <li><a href="#mSocialMedia" className="text-cyan-400 hover:text-cyan-300 transition-colors">Social Media Marketing</a></li>
              <li><a href="#m328" className="text-cyan-400 hover:text-cyan-300 transition-colors">Plugins und eingebettete Inhalte</a></li>
            </ul>
          </section>

          {/* Verantwortlicher */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="m3">
            <h2 className="text-xl font-bold text-white mb-4">Verantwortlicher</h2>
            <div className="text-gray-400 leading-relaxed space-y-2">
              <p className="font-semibold text-gray-200">ExtruCon GmbH</p>
              <p>Hasenheide 8<br />82256 Fürstenfeldbruck</p>
              <p className="mt-4"><strong className="text-gray-200">Vertretungsberechtigte Personen:</strong> Maral Ibrahim Agha</p>
              <p><strong className="text-gray-200">E-Mail-Adresse:</strong> <a href="mailto:info@extrucon.de" className="text-cyan-400 hover:text-cyan-300">info@extrucon.de</a></p>
              <p><strong className="text-gray-200">Telefon:</strong> 089 444438879</p>
              <p><strong className="text-gray-200">Impressum:</strong> <a href="https://extrucon.de" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">https://extrucon.de</a></p>
            </div>
          </section>

          {/* Übersicht der Verarbeitungen */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="mOverview">
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
              <li>Event-Daten (Facebook)</li>
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
              <li>Bildungs- und Kursteilnehmer</li>
              <li>Dritte Personen</li>
              <li>Hinweisgeber</li>
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
              <li>Zielgruppenbildung</li>
              <li>Affiliate-Nachverfolgung</li>
              <li>Organisations- und Verwaltungsverfahren</li>
              <li>Servermonitoring und Fehlererkennung</li>
              <li>Feedback</li>
              <li>Marketing</li>
              <li>Profile mit nutzerbezogenen Informationen</li>
              <li>Anmeldeverfahren</li>
              <li>Bereitstellung unseres Onlineangebotes</li>
              <li>Informationstechnische Infrastruktur</li>
              <li>Öffentlichkeitsarbeit</li>
              <li>Absatzförderung</li>
              <li>Geschäftsprozesse und betriebswirtschaftliche Verfahren</li>
            </ul>
          </section>

          {/* Maßgebliche Rechtsgrundlagen */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="m2427">
            <h2 className="text-xl font-bold text-white mb-4">Maßgebliche Rechtsgrundlagen</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <strong className="text-gray-200">Maßgebliche Rechtsgrundlagen nach der DSGVO:</strong> Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können.
            </p>
            <ul className="text-gray-400 space-y-4">
              <li>
                <strong className="text-gray-200">Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> – Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
              </li>
              <li>
                <strong className="text-gray-200">Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)</strong> – Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.
              </li>
              <li>
                <strong className="text-gray-200">Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)</strong> – Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt.
              </li>
              <li>
                <strong className="text-gray-200">Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> – Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten verlangen, nicht überwiegen.
              </li>
            </ul>
            <p className="text-gray-400 mt-4 leading-relaxed">
              <strong className="text-gray-200">Nationale Datenschutzregelungen in Deutschland:</strong> Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG).
            </p>
          </section>

          {/* Sicherheitsmaßnahmen */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="m27">
            <h2 className="text-xl font-bold text-white mb-4">Sicherheitsmaßnahmen</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <strong className="text-gray-200">Sicherung von Online-Verbindungen durch TLS-/SSL-Verschlüsselungstechnologie (HTTPS):</strong> Um die Daten der Nutzer, die über unsere Online-Dienste übertragen werden, vor unerlaubten Zugriffen zu schützen, setzen wir auf die TLS-/SSL-Verschlüsselungstechnologie. Secure Sockets Layer (SSL) und Transport Layer Security (TLS) sind die Eckpfeiler der sicheren Datenübertragung im Internet. Diese Technologien verschlüsseln die Informationen, die zwischen der Website oder App und dem Browser des Nutzers übertragen werden, wodurch die Daten vor unbefugtem Zugriff geschützt sind. TLS, als die weiterentwickelte und sicherere Version von SSL, gewährleistet, dass alle Datenübertragungen den höchsten Sicherheitsstandards entsprechen.
            </p>
          </section>

          {/* Übermittlung von personenbezogenen Daten */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="m25">
            <h2 className="text-xl font-bold text-white mb-4">Übermittlung von personenbezogenen Daten</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass diese an andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt beziehungsweise ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z.B. mit IT-Aufgaben beauftragte Dienstleister gehören oder Anbieter von Diensten und Inhalten, die in eine Website eingebunden sind. In solchen Fällen beachten wir die gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <strong className="text-gray-200">Datenübermittlung innerhalb der Organisation:</strong> Wir können personenbezogene Daten an andere Abteilungen oder Einheiten innerhalb unserer Organisation übermitteln oder ihnen den Zugriff darauf gewähren. Sofern die Datenweitergabe zu administrativen Zwecken erfolgt, beruht sie auf unseren berechtigten unternehmerischen und betriebswirtschaftlichen Interessen oder erfolgt, sofern sie zur Erfüllung unserer vertragsbezogenen Verpflichtungen erforderlich ist beziehungsweise wenn eine Einwilligung der Betroffenen oder eine gesetzliche Erlaubnis vorliegt.
            </p>
          </section>

          {/* Internationale Datentransfers */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="m24">
            <h2 className="text-xl font-bold text-white mb-4">Internationale Datentransfers</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <strong className="text-gray-200">Datenverarbeitung in Drittländern:</strong> Sofern wir Daten in ein Drittland (d.h. außerhalb der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR)) übermitteln oder dies im Rahmen der Nutzung von Diensten Dritter oder der Offenlegung bzw. Übermittlung von Daten an andere Personen, Stellen oder Unternehmen geschieht, erfolgt dies stets im Einklang mit den gesetzlichen Vorgaben.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Für Datenübermittlungen in die USA stützen wir uns vorrangig auf das Data Privacy Framework (DPF), welches durch einen Angemessenheitsbeschluss der EU-Kommission vom 10.07.2023 als sicherer Rechtsrahmen anerkannt wurde. Zusätzlich haben wir mit den jeweiligen Anbietern Standardvertragsklauseln abgeschlossen, die den Vorgaben der EU-Kommission entsprechen und vertragliche Verpflichtungen zum Schutz Ihrer Daten festlegen.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Diese zweifache Absicherung gewährleistet einen umfassenden Schutz Ihrer Daten: Das DPF bildet die primäre Schutzebene, während die Standardvertragsklauseln als zusätzliche Sicherheit dienen. Sollten sich Änderungen im Rahmen des DPF ergeben, greifen die Standardvertragsklauseln als zuverlässige Rückfalloption ein.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Weitere Informationen zum DPF und eine Liste der zertifizierten Unternehmen finden Sie unter: <a href="https://www.dataprivacyframework.gov/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">www.dataprivacyframework.gov</a>
            </p>
          </section>

          {/* Allgemeine Informationen zur Datenspeicherung und Löschung */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="m12">
            <h2 className="text-xl font-bold text-white mb-4">Allgemeine Informationen zur Datenspeicherung und Löschung</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den gesetzlichen Bestimmungen, sobald die zugrundeliegenden Einwilligungen widerrufen werden oder keine weiteren rechtlichen Grundlagen für die Verarbeitung bestehen. Dies betrifft Fälle, in denen der ursprüngliche Verarbeitungszweck entfällt oder die Daten nicht mehr benötigt werden. Ausnahmen von dieser Regelung bestehen, wenn gesetzliche Pflichten oder besondere Interessen eine längere Aufbewahrung oder Archivierung der Daten erfordern.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Insbesondere müssen Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung notwendig ist zur Rechtsverfolgung oder zum Schutz der Rechte anderer natürlicher oder juristischer Personen, entsprechend archiviert werden.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Unsere Datenschutzhinweise enthalten zusätzliche Informationen zur Aufbewahrung und Löschung von Daten, die speziell für bestimmte Verarbeitungsprozesse gelten.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Bei mehreren Angaben zur Aufbewahrungsdauer oder Löschungsfristen eines Datums ist stets die längste Frist maßgeblich. Daten, die nicht mehr für den ursprünglich vorgesehenen Zweck, sondern aufgrund gesetzlicher Vorgaben oder anderer Gründe aufbewahrt werden, verarbeiten wir ausschließlich zu den Gründen, die ihre Aufbewahrung rechtfertigen.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <strong className="text-gray-200">Fristbeginn mit Ablauf des Jahres:</strong> Beginnt eine Frist nicht ausdrücklich zu einem bestimmten Datum und beträgt sie mindestens ein Jahr, so startet sie automatisch am Ende des Kalenderjahres, in dem das fristauslösende Ereignis eingetreten ist.
            </p>
          </section>

          {/* Rechte der betroffenen Personen */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="m10">
            <h2 className="text-xl font-bold text-white mb-4">Rechte der betroffenen Personen</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
            </p>
            <ul className="text-gray-400 space-y-3">
              <li>
                <strong className="text-gray-200">Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung einzulegen.
              </li>
              <li>
                <strong className="text-gray-200">Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.
              </li>
              <li>
                <strong className="text-gray-200">Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
              </li>
              <li>
                <strong className="text-gray-200">Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
              </li>
              <li>
                <strong className="text-gray-200">Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ eine Einschränkung der Verarbeitung der Daten zu verlangen.
              </li>
              <li>
                <strong className="text-gray-200">Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.
              </li>
              <li>
                <strong className="text-gray-200">Beschwerde bei Aufsichtsbehörde:</strong> Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
              </li>
            </ul>
          </section>

          {/* Geschäftliche Leistungen */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="m317">
            <h2 className="text-xl font-bold text-white mb-4">Geschäftliche Leistungen</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z.B. Kunden und Interessenten (zusammenfassend als „Vertragspartner" bezeichnet), im Rahmen von vertraglichen und vergleichbaren Rechtsverhältnissen sowie damit verbundenen Maßnahmen und im Hinblick auf die Kommunikation mit den Vertragspartnern (oder vorvertraglich), etwa zur Beantwortung von Anfragen.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Wir verwenden diese Daten, um unsere vertraglichen Verpflichtungen zu erfüllen. Dazu gehören insbesondere die Pflichten zur Erbringung der vereinbarten Leistungen, etwaige Aktualisierungspflichten und Abhilfe bei Gewährleistungs- und sonstigen Leistungsstörungen. Darüber hinaus verwenden wir die Daten zur Wahrung unserer Rechte und zum Zwecke der mit diesen Pflichten verbundenen Verwaltungsaufgaben sowie der Unternehmensorganisation.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Welche Daten für die vorgenannten Zwecke erforderlich sind, teilen wir den Vertragspartnern vor oder im Rahmen der Datenerhebung, z.B. in Onlineformularen, durch besondere Kennzeichnung (z.B. Farben) bzw. Symbole (z.B. Sternchen o. Ä.), oder persönlich mit.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten, d.h. grundsätzlich nach vier Jahren, es sei denn, dass die Daten in einem Kundenkonto gespeichert werden, z.B., solange sie aus gesetzlichen Gründen der Archivierung aufbewahrt werden müssen (etwa für Steuerzwecke im Regelfall zehn Jahre).
            </p>
          </section>

          {/* Einsatz von Online-Plattformen */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="m605">
            <h2 className="text-xl font-bold text-white mb-4">Einsatz von Online-Plattformen zu Angebots- und Vertriebszwecken</h2>
            <p className="text-gray-400 leading-relaxed">
              Wir bieten unsere Leistungen auf Online-Plattformen, die von anderen Dienstanbietern betrieben werden, an. In diesem Zusammenhang gelten zusätzlich zu unseren Datenschutzhinweisen die Datenschutzhinweise der jeweiligen Plattformen. Dies gilt insbesondere im Hinblick auf die Durchführung des Zahlungsvorgangs und der auf den Plattformen eingesetzten Verfahren zur Reichweitemessung und zum interessensbezogenen Marketing.
            </p>
          </section>

          {/* Zahlungsverfahren */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="m326">
            <h2 className="text-xl font-bold text-white mb-4">Zahlungsverfahren</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Im Rahmen von Vertrags- und sonstigen Rechtsbeziehungen, aufgrund gesetzlicher Pflichten oder sonst auf Grundlage unserer berechtigten Interessen bieten wir den betroffenen Personen effiziente und sichere Zahlungsmöglichkeiten an und setzen hierzu neben Banken und Kreditinstituten weitere Dienstleister ein (zusammenfassend "Zahlungsdienstleister").
            </p>
            <p className="text-gray-400 leading-relaxed">
              Zu den durch die Zahlungsdienstleister verarbeiteten Daten gehören Bestandsdaten, wie z.B. der Name und die Adresse, Bankdaten, wie z.B. Kontonummern oder Kreditkartennummern, Passwörter, TANs und Prüfsummen sowie die Vertrags-, Summen- und empfängerbezogenen Angaben. Die Angaben sind erforderlich, um die Transaktionen durchzuführen.
            </p>
          </section>

          {/* Bereitstellung des Onlineangebots */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="m225">
            <h2 className="text-xl font-bold text-white mb-4">Bereitstellung des Onlineangebots und Webhosting</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu übermitteln.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li><strong className="text-gray-200">Verarbeitete Datenarten:</strong> Nutzungsdaten, Meta-, Kommunikations- und Verfahrensdaten, Protokolldaten, Inhaltsdaten.</li>
              <li><strong className="text-gray-200">Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
              <li><strong className="text-gray-200">Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit, Informationstechnische Infrastruktur, Sicherheitsmaßnahmen.</li>
            </ul>
          </section>

          {/* Einsatz von Cookies */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="m134">
            <h2 className="text-xl font-bold text-white mb-4">Einsatz von Cookies</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Unter dem Begriff „Cookies" werden Funktionen, die Informationen auf Endgeräten der Nutzer speichern und aus ihnen auslesen, verstanden. Cookies können ferner in Bezug auf unterschiedliche Anliegen Einsatz finden, etwa zu Zwecken der Funktionsfähigkeit, der Sicherheit und des Komforts von Onlineangeboten sowie der Erstellung von Analysen der Besucherströme.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <strong className="text-gray-200">Hinweise zur Einwilligung:</strong> Wir setzen Cookies im Einklang mit den gesetzlichen Vorschriften ein. Daher holen wir von den Nutzern eine vorhergehende Einwilligung ein, außer wenn diese gesetzlich nicht gefordert ist.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <strong className="text-gray-200">Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung:</strong> Wir setzen eine Einwilligungs-Management-Lösung ein, bei der die Einwilligung der Nutzer zur Verwendung von Cookies oder zu den im Rahmen der Einwilligungs-Management-Lösung genannten Verfahren und Anbietern eingeholt wird.
            </p>
          </section>

          {/* Kontakt- und Anfrageverwaltung */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="m182">
            <h2 className="text-xl font-bold text-white mb-4">Kontakt- und Anfrageverwaltung</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Bei der Kontaktaufnahme mit uns (z.B. per Post, Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li><strong className="text-gray-200">Verarbeitete Datenarten:</strong> Bestandsdaten, Kontaktdaten, Inhaltsdaten, Nutzungsdaten, Meta-, Kommunikations- und Verfahrensdaten.</li>
              <li><strong className="text-gray-200">Betroffene Personen:</strong> Kommunikationspartner.</li>
              <li><strong className="text-gray-200">Zwecke der Verarbeitung:</strong> Kommunikation, Organisations- und Verwaltungsverfahren, Feedback, Bereitstellung unseres Onlineangebotes.</li>
            </ul>
          </section>

          {/* Newsletter */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="m17">
            <h2 className="text-xl font-bold text-white mb-4">Newsletter und elektronische Benachrichtigungen</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Wir versenden Newsletter, E-Mails und weitere elektronische Benachrichtigungen (nachfolgend „Newsletter") ausschließlich mit der Einwilligung der Empfänger oder aufgrund einer gesetzlichen Grundlage. Sofern im Rahmen einer Anmeldung zum Newsletter dessen Inhalte konkret umschrieben werden, sind sie für die Einwilligung der Nutzer maßgeblich.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <strong className="text-gray-200">Anmeldung und Protokollierung:</strong> Die Anmeldungen zu unserem Newsletter werden protokolliert, um den Anmeldeprozess entsprechend den rechtlichen Anforderungen nachweisen zu können. Hierzu gehört die Speicherung des Anmelde- und des Bestätigungszeitpunkts als auch der IP-Adresse.
            </p>
          </section>

          {/* Werbliche Kommunikation */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="m638">
            <h2 className="text-xl font-bold text-white mb-4">Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Wir verarbeiten personenbezogene Daten zu Zwecken der werblichen Kommunikation, die über diverse Kanäle, wie z.B. E-Mail, Telefon, Post oder Fax, entsprechend den gesetzlichen Vorgaben erfolgen kann.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Die Empfänger haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen oder der werblichen Kommunikation jederzeit kostenlos zu widersprechen.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Nach Widerruf oder Widerspruch speichern wir die zum Nachweis der bisherigen Berechtigung erforderlichen Daten zur Kontaktaufnahme oder Zusendung bis zu drei Jahre nach Ablauf des Jahres des Widerrufs oder Widerspruchs auf der Grundlage unserer berechtigten Interessen.
            </p>
          </section>

          {/* Webanalyse */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="m263">
            <h2 className="text-xl font-bold text-white mb-4">Webanalyse, Monitoring und Optimierung</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Die Webanalyse (auch als „Reichweitenmessung" bezeichnet) dient der Auswertung der Besucherströme unseres Onlineangebots und kann Verhalten, Interessen oder demografische Informationen zu den Besuchern, wie beispielsweise Alter oder Geschlecht, als pseudonyme Werte umfassen.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Mithilfe der Reichweitenanalyse können wir zum Beispiel erkennen, zu welcher Zeit unser Onlineangebot oder dessen Funktionen beziehungsweise Inhalte am häufigsten genutzt werden, oder zur Wiederverwendung einladen. Ebenso ist es uns möglich, nachzuvollziehen, welche Bereiche der Optimierung bedürfen.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Neben der Webanalyse können wir auch Testverfahren einsetzen, um etwa unterschiedliche Versionen unseres Onlineangebots oder seiner Bestandteile zu testen und zu optimieren.
            </p>
          </section>

          {/* Onlinemarketing */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="m264">
            <h2 className="text-xl font-bold text-white mb-4">Onlinemarketing</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Wir verarbeiten personenbezogene Daten zu Zwecken des Onlinemarketings, worunter insbesondere die Vermarktung von Werbeflächen oder Darstellung von werbenden und sonstigen Inhalten (zusammenfassend als „Inhalte" bezeichnet) anhand potentieller Interessen der Nutzer sowie die Messung ihrer Effektivität fallen kann.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Zu diesen Zwecken werden sogenannte Nutzerprofile angelegt und in einer Datei (sogenanntes „Cookie") gespeichert oder ähnliche Verfahren genutzt, mittels derer die für die Darstellung der vorgenannten Inhalte relevanten Angaben zum Nutzer gespeichert werden.
            </p>
          </section>

          {/* Einsatz von Künstlicher Intelligenz */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="mKI">
            <h2 className="text-xl font-bold text-white mb-4">Einsatz von Künstlicher Intelligenz (KI)</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Im Rahmen unserer Dienstleistungen setzen wir Technologien der Künstlichen Intelligenz (KI) ein, um unseren Kunden innovative und effiziente Lösungen anzubieten. Hierzu gehören insbesondere KI-gestützte Chatbots, automatisierte Content-Erstellung, Datenanalysen und Optimierungsverfahren.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <strong className="text-gray-200">Verarbeitung durch KI-Systeme:</strong> Bei der Nutzung von KI-Diensten können personenbezogene Daten verarbeitet werden, etwa Eingaben in Chatbots, Kommunikationsinhalte oder Nutzungsverhalten. Diese Daten werden ausschließlich zur Erbringung der jeweiligen Dienstleistung und zur Verbesserung der KI-Modelle verwendet.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <strong className="text-gray-200">Drittanbieter-KI-Dienste:</strong> Wir nutzen KI-Dienste von Drittanbietern wie OpenAI, Google oder Microsoft. Diese Anbieter verarbeiten Daten gemäß ihrer eigenen Datenschutzrichtlinien. Wir haben mit diesen Anbietern entsprechende Auftragsverarbeitungsverträge abgeschlossen, um den Schutz Ihrer Daten zu gewährleisten.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <strong className="text-gray-200">Automatisierte Entscheidungsfindung:</strong> Soweit wir KI für automatisierte Entscheidungen einsetzen, die rechtliche Wirkung entfalten oder Sie in ähnlicher Weise erheblich beeinträchtigen könnten, werden Sie hierüber gesondert informiert und haben das Recht auf menschliche Überprüfung.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li><strong className="text-gray-200">Verarbeitete Datenarten:</strong> Inhaltsdaten, Nutzungsdaten, Kommunikationsdaten, Meta-Daten.</li>
              <li><strong className="text-gray-200">Betroffene Personen:</strong> Nutzer, Kunden, Interessenten, Kommunikationspartner.</li>
              <li><strong className="text-gray-200">Zwecke der Verarbeitung:</strong> Erbringung von KI-gestützten Dienstleistungen, Automatisierung, Optimierung, Kundenservice.</li>
              <li><strong className="text-gray-200">Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO), Vertragserfüllung (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
            </ul>
          </section>

          {/* Social Media */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="m136">
            <h2 className="text-xl font-bold text-white mb-4">Präsenzen in sozialen Netzwerken (Social Media)</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem Rahmen Nutzerdaten, um mit den dort aktiven Nutzern zu kommunizieren oder Informationen über uns anzubieten.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Wir weisen darauf hin, dass dabei Nutzerdaten außerhalb des Raumes der Europäischen Union verarbeitet werden können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so etwa die Durchsetzung der Nutzerrechte erschwert werden könnte.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li><strong className="text-gray-200">Eingesetzte Plattformen:</strong> Instagram, Facebook, LinkedIn, TikTok, YouTube, X (Twitter).</li>
              <li><strong className="text-gray-200">Verarbeitete Datenarten:</strong> Kontaktdaten, Inhaltsdaten, Nutzungsdaten, Meta-, Kommunikations- und Verfahrensdaten.</li>
              <li><strong className="text-gray-200">Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
            </ul>
          </section>

          {/* Social Media Marketing */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="mSocialMedia">
            <h2 className="text-xl font-bold text-white mb-4">Social Media Marketing und Werbung</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Im Rahmen unserer Social Media Marketing-Dienstleistungen verarbeiten wir personenbezogene Daten zur Planung, Durchführung und Analyse von Werbekampagnen auf sozialen Netzwerken. Dies umfasst die Erstellung und Verwaltung von Werbeanzeigen, Zielgruppenanalysen sowie die Erfolgsmessung von Kampagnen.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <strong className="text-gray-200">Zielgruppenbildung und Targeting:</strong> Wir nutzen die Targeting-Funktionen der sozialen Netzwerke, um Werbeanzeigen gezielt an relevante Zielgruppen auszuspielen. Dabei können demografische Daten, Interessen, Verhaltensweisen und andere Kriterien verwendet werden. Die Verarbeitung erfolgt durch die jeweiligen Plattformbetreiber gemäß deren Datenschutzrichtlinien.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <strong className="text-gray-200">Pixel und Tracking-Technologien:</strong> Zur Messung der Effektivität von Werbekampagnen und zur Erstellung von Custom Audiences können Tracking-Pixel (z.B. Facebook-Pixel, LinkedIn Insight Tag) auf Websites eingesetzt werden. Diese erfassen Nutzerinteraktionen und ermöglichen Retargeting-Maßnahmen. Der Einsatz erfolgt nur mit entsprechender Einwilligung.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <strong className="text-gray-200">Influencer-Marketing:</strong> Bei der Zusammenarbeit mit Influencern können personenbezogene Daten im Rahmen der Kampagnenkoordination und Erfolgsmessung verarbeitet werden. Hierzu gehören Kontaktdaten, Reichweitendaten und Engagement-Metriken.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <strong className="text-gray-200">Community Management:</strong> Im Rahmen des Community Managements verarbeiten wir Daten von Nutzern, die mit unseren Social Media-Präsenzen interagieren, etwa durch Kommentare, Nachrichten oder Reaktionen. Diese Verarbeitung dient der Kommunikation und Kundenbetreuung.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li><strong className="text-gray-200">Verarbeitete Datenarten:</strong> Bestandsdaten, Kontaktdaten, Inhaltsdaten, Nutzungsdaten, Meta-, Kommunikations- und Verfahrensdaten, Event-Daten.</li>
              <li><strong className="text-gray-200">Betroffene Personen:</strong> Nutzer, Interessenten, Kunden, Kommunikationspartner.</li>
              <li><strong className="text-gray-200">Zwecke der Verarbeitung:</strong> Marketing, Zielgruppenbildung, Reichweitenmessung, Konversionsmessung, Kommunikation.</li>
              <li><strong className="text-gray-200">Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
            </ul>
          </section>

          {/* Plugins und eingebettete Inhalte */}
          <section className="p-6 rounded-xl bg-card/30 border border-white/5" id="m328">
            <h2 className="text-xl font-bold text-white mb-4">Plugins und eingebettete Funktionen sowie Inhalte</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Wir binden Funktions- und Inhaltselemente in unser Onlineangebot ein, die von den Servern ihrer jeweiligen Anbieter (nachfolgend als „Drittanbieter" bezeichnet) bezogen werden. Dabei kann es sich zum Beispiel um Grafiken, Videos oder Stadtpläne handeln.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Die Einbindung setzt immer voraus, dass die Drittanbieter dieser Inhalte die IP-Adresse der Nutzer verarbeiten, da sie ohne IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die Darstellung dieser Inhalte oder Funktionen erforderlich.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Wir bemühen uns, nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte nutzen. Drittanbieter können ferner sogenannte Pixel-Tags (unsichtbare Grafiken, auch als „Web Beacons" bezeichnet) für statistische oder Marketingzwecke einsetzen.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
