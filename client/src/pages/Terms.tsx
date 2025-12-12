import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/lib/i18n";

export default function Terms() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">{t.legalPages.termsTitle}</h1>
          <p className="text-gray-500 mb-4">{t.legalPages.termsDate}</p>
          {language !== 'de' && (
            <p className="text-amber-400/80 text-sm mb-8 p-3 rounded-lg bg-amber-400/10 border border-amber-400/20">
              {t.legalPages.legalNotice}
            </p>
          )}

          {/* Inhaltsübersicht */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Inhaltsübersicht</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-400">
              <li><a href="#s1" className="text-cyan-400 hover:text-cyan-300 transition-colors">§1 Geltungsbereich</a></li>
              <li><a href="#s2" className="text-cyan-400 hover:text-cyan-300 transition-colors">§2 Vertragsschluss</a></li>
              <li><a href="#s3" className="text-cyan-400 hover:text-cyan-300 transition-colors">§3 Leistungsbeschreibung</a></li>
              <li><a href="#s4" className="text-cyan-400 hover:text-cyan-300 transition-colors">§4 KI & Automatisierung</a></li>
              <li><a href="#s5" className="text-cyan-400 hover:text-cyan-300 transition-colors">§5 Social Media Marketing</a></li>
              <li><a href="#s6" className="text-cyan-400 hover:text-cyan-300 transition-colors">§6 Webentwicklung</a></li>
              <li><a href="#s7" className="text-cyan-400 hover:text-cyan-300 transition-colors">§7 Content-Erstellung</a></li>
              <li><a href="#s8" className="text-cyan-400 hover:text-cyan-300 transition-colors">§8 Preise und Zahlung</a></li>
              <li><a href="#s9" className="text-cyan-400 hover:text-cyan-300 transition-colors">§9 Mitwirkungspflichten</a></li>
              <li><a href="#s10" className="text-cyan-400 hover:text-cyan-300 transition-colors">§10 Nutzungsrechte</a></li>
              <li><a href="#s11" className="text-cyan-400 hover:text-cyan-300 transition-colors">§11 Vertraulichkeit</a></li>
              <li><a href="#s12" className="text-cyan-400 hover:text-cyan-300 transition-colors">§12 Haftung</a></li>
              <li><a href="#s13" className="text-cyan-400 hover:text-cyan-300 transition-colors">§13 Vertragslaufzeit</a></li>
              <li><a href="#s14" className="text-cyan-400 hover:text-cyan-300 transition-colors">§14 B2B-Bestimmungen</a></li>
              <li><a href="#s15" className="text-cyan-400 hover:text-cyan-300 transition-colors">§15 B2C-Bestimmungen</a></li>
              <li><a href="#s16" className="text-cyan-400 hover:text-cyan-300 transition-colors">§16 Datenschutz</a></li>
              <li><a href="#s17" className="text-cyan-400 hover:text-cyan-300 transition-colors">§17 Schlussbestimmungen</a></li>
            </ul>
          </section>

          {/* §1 Geltungsbereich */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="s1">
            <h2 className="text-xl font-bold text-white mb-4">§1 Geltungsbereich und Definitionen</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Verträge zwischen der ExtruCon GmbH, Hasenheide 8, 82256 Fürstenfeldbruck (nachfolgend "Anbieter" oder "wir") und ihren Kunden (nachfolgend "Kunde" oder "Auftraggeber") über die Erbringung von Dienstleistungen in den Bereichen Marketing, Künstliche Intelligenz (KI), Social Media, Content-Erstellung und Webentwicklung.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (2) <strong className="text-gray-200">Verbraucher (B2C)</strong> im Sinne dieser AGB ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können (§ 13 BGB).
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (3) <strong className="text-gray-200">Unternehmer (B2B)</strong> im Sinne dieser AGB ist eine natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt (§ 14 BGB).
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (4) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden nur dann Vertragsbestandteil, wenn und soweit der Anbieter ihrer Geltung ausdrücklich schriftlich zugestimmt hat.
            </p>
            <p className="text-gray-400 leading-relaxed">
              (5) Im Einzelfall getroffene, individuelle Vereinbarungen mit dem Kunden (einschließlich Nebenabreden, Ergänzungen und Änderungen) haben stets Vorrang vor diesen AGB.
            </p>
          </section>

          {/* §2 Vertragsschluss */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="s2">
            <h2 className="text-xl font-bold text-white mb-4">§2 Vertragsschluss</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (1) Die Darstellung unserer Leistungen auf der Website, in Präsentationen oder anderen Medien stellt kein rechtlich bindendes Angebot, sondern eine unverbindliche Aufforderung zur Abgabe eines Angebots dar.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (2) Durch die Anfrage des Kunden gibt dieser ein verbindliches Angebot zum Abschluss eines Vertrages ab. Der Anbieter ist berechtigt, dieses Vertragsangebot innerhalb von 14 Tagen nach Zugang anzunehmen.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (3) Ein Vertrag kommt zustande durch: (a) schriftliche Auftragsbestätigung des Anbieters, (b) Unterzeichnung eines Angebots durch beide Parteien, (c) Beginn der Leistungserbringung nach vorheriger Abstimmung, oder (d) Rechnungsstellung.
            </p>
            <p className="text-gray-400 leading-relaxed">
              (4) Die Vertragssprache ist Deutsch. Der Vertragstext wird vom Anbieter nicht gespeichert und ist nach Vertragsschluss nicht mehr über die Website abrufbar. Dem Kunden wird eine Kopie der Vertragsbedingungen per E-Mail oder auf anderem Wege zur Verfügung gestellt.
            </p>
          </section>

          {/* §3 Leistungsbeschreibung */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="s3">
            <h2 className="text-xl font-bold text-white mb-4">§3 Leistungsbeschreibung</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (1) Der konkrete Umfang der zu erbringenden Leistungen ergibt sich aus dem jeweiligen Angebot, der Auftragsbestätigung oder einer gesonderten Leistungsbeschreibung.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (2) Der Anbieter erbringt seine Leistungen nach dem jeweiligen Stand der Technik und unter Beachtung der anerkannten Regeln der Branche. Soweit nicht ausdrücklich anders vereinbart, schuldet der Anbieter ein Tätigwerden (Dienstleistung), nicht jedoch einen bestimmten Erfolg.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (3) Änderungen des Leistungsumfangs bedürfen einer schriftlichen Vereinbarung. Zusätzliche Leistungen, die über den vereinbarten Umfang hinausgehen, werden nach Aufwand zum jeweils gültigen Stundensatz berechnet.
            </p>
            <p className="text-gray-400 leading-relaxed">
              (4) Der Anbieter ist berechtigt, sich zur Erfüllung seiner vertraglichen Pflichten Dritter (Subunternehmer) zu bedienen. Die Verantwortung gegenüber dem Kunden verbleibt beim Anbieter.
            </p>
          </section>

          {/* §4 KI & Automatisierung */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="s4">
            <h2 className="text-xl font-bold text-white mb-4">§4 Leistungen im Bereich KI & Automatisierung</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (1) Der Anbieter entwickelt und implementiert KI-gestützte Lösungen, einschließlich Chatbots, automatisierter Workflows, KI-generierter Inhalte und intelligenter Datenanalysen.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (2) <strong className="text-gray-200">Technische Grenzen:</strong> Der Kunde erkennt an, dass KI-Systeme auf statistischen Modellen und maschinellem Lernen basieren. Eine 100%ige Fehlerfreiheit, Vollständigkeit oder Richtigkeit der KI-generierten Ergebnisse kann nicht garantiert werden. Der Kunde ist verpflichtet, KI-generierte Inhalte vor der Veröffentlichung zu prüfen.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (3) <strong className="text-gray-200">Drittanbieter-KI:</strong> Soweit der Anbieter KI-Dienste von Drittanbietern (z.B. OpenAI, Google, Microsoft) einsetzt, gelten zusätzlich deren Nutzungsbedingungen. Der Anbieter informiert den Kunden über die eingesetzten Dienste.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (4) <strong className="text-gray-200">Trainingsdaten:</strong> Der Kunde stellt sicher, dass von ihm bereitgestellte Daten zum Training oder zur Anpassung von KI-Systemen frei von Rechten Dritter sind und nicht gegen geltendes Recht (insbesondere Datenschutzrecht, Urheberrecht) verstoßen.
            </p>
            <p className="text-gray-400 leading-relaxed">
              (5) <strong className="text-gray-200">KI-Verordnung (EU AI Act):</strong> Der Anbieter verpflichtet sich, bei der Entwicklung und dem Einsatz von KI-Systemen die Anforderungen der EU-KI-Verordnung (Verordnung (EU) 2024/1689) zu beachten, soweit diese anwendbar sind.
            </p>
          </section>

          {/* §5 Social Media Marketing */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="s5">
            <h2 className="text-xl font-bold text-white mb-4">§5 Leistungen im Bereich Social Media Marketing</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (1) Der Anbieter übernimmt die strategische Beratung, Planung und operative Betreuung von Social-Media-Präsenzen des Kunden auf Plattformen wie Instagram, Facebook, LinkedIn, TikTok, YouTube, X (Twitter) und anderen.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (2) <strong className="text-gray-200">Keine Erfolgsgarantie:</strong> Der Anbieter schuldet das Tätigwerden, nicht jedoch einen bestimmten Erfolg (z.B. Anzahl von Followern, Likes, Reichweite, Umsatzsteigerung), sofern nicht ausdrücklich schriftlich anders vereinbart.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (3) <strong className="text-gray-200">Plattformabhängigkeit:</strong> Die Leistungserbringung ist von den jeweiligen Plattformbetreibern abhängig. Änderungen der Plattformrichtlinien, Algorithmen oder Funktionen können die Leistungserbringung beeinflussen. Der Anbieter haftet nicht für Einschränkungen, Sperrungen oder Änderungen durch die Plattformbetreiber.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (4) <strong className="text-gray-200">Werbebudget:</strong> Werbebudgets für bezahlte Kampagnen (Ads) sind vom Kunden separat bereitzustellen und werden direkt an die Plattformbetreiber gezahlt, sofern nicht anders vereinbart.
            </p>
            <p className="text-gray-400 leading-relaxed">
              (5) <strong className="text-gray-200">Community Management:</strong> Bei der Betreuung von Kommentaren und Nachrichten handelt der Anbieter im Auftrag und im Namen des Kunden. Der Kunde bleibt für alle veröffentlichten Inhalte rechtlich verantwortlich.
            </p>
          </section>

          {/* §6 Webentwicklung */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="s6">
            <h2 className="text-xl font-bold text-white mb-4">§6 Leistungen im Bereich Webentwicklung</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (1) Der Anbieter erstellt Websites, Webanwendungen und digitale Plattformen nach den individuellen Anforderungen des Kunden.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (2) <strong className="text-gray-200">Abnahme:</strong> Nach Fertigstellung wird das Projekt dem Kunden zur Abnahme vorgelegt. Der Kunde ist verpflichtet, das Werk innerhalb von 14 Tagen nach Bereitstellung zu prüfen und abzunehmen. Erfolgt keine Rückmeldung innerhalb dieser Frist, gilt das Werk als abgenommen.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (3) <strong className="text-gray-200">Korrekturrunden:</strong> Im Projektpreis sind, sofern nicht anders vereinbart, bis zu zwei Korrekturrunden enthalten. Weitere Änderungswünsche werden nach Aufwand berechnet.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (4) <strong className="text-gray-200">Hosting und Domain:</strong> Sofern nicht ausdrücklich anders vereinbart, sind Hosting, Domain-Registrierung und laufende Wartung nicht Bestandteil des Projektpreises und werden separat angeboten.
            </p>
            <p className="text-gray-400 leading-relaxed">
              (5) <strong className="text-gray-200">Barrierefreiheit:</strong> Der Anbieter berücksichtigt bei der Entwicklung die Grundsätze der digitalen Barrierefreiheit gemäß WCAG 2.1 (Level AA), soweit dies vereinbart und technisch umsetzbar ist.
            </p>
          </section>

          {/* §7 Content-Erstellung */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="s7">
            <h2 className="text-xl font-bold text-white mb-4">§7 Leistungen im Bereich Content-Erstellung</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (1) Der Anbieter erstellt redaktionelle Inhalte, Grafiken, Videos, Fotografien und andere kreative Werke nach den Vorgaben des Kunden.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (2) <strong className="text-gray-200">Freigabe:</strong> Alle erstellten Inhalte werden dem Kunden vor Veröffentlichung zur Freigabe vorgelegt, sofern nicht anders vereinbart. Mit der Freigabe übernimmt der Kunde die Verantwortung für die rechtliche Zulässigkeit der Inhalte.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (3) <strong className="text-gray-200">KI-generierte Inhalte:</strong> Sofern KI-Tools zur Content-Erstellung eingesetzt werden, wird der Kunde hierüber informiert. Der Kunde ist verpflichtet, KI-generierte Inhalte auf Richtigkeit und rechtliche Zulässigkeit zu prüfen.
            </p>
            <p className="text-gray-400 leading-relaxed">
              (4) <strong className="text-gray-200">Stockmedien:</strong> Bei Verwendung von Stockfotos, -videos oder -grafiken erwirbt der Anbieter die erforderlichen Lizenzen im Namen des Kunden. Die Kosten werden separat ausgewiesen oder sind im Angebot enthalten.
            </p>
          </section>

          {/* §8 Preise und Zahlung */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="s8">
            <h2 className="text-xl font-bold text-white mb-4">§8 Preise und Zahlungsbedingungen</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (1) Es gelten die im jeweiligen Angebot genannten Preise. Alle Preise verstehen sich, sofern nicht anders angegeben, in Euro zuzüglich der gesetzlichen Mehrwertsteuer.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (2) <strong className="text-gray-200">B2B-Kunden:</strong> Rechnungen sind, sofern nicht anders vereinbart, innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig. Bei Projekten über 5.000 € netto kann eine Anzahlung von bis zu 50% vereinbart werden.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (3) <strong className="text-gray-200">B2C-Kunden:</strong> Die Zahlung erfolgt, sofern nicht anders vereinbart, per Vorkasse, PayPal, Kreditkarte oder Sofortüberweisung. Bei laufenden Verträgen kann Lastschrifteinzug vereinbart werden.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (4) <strong className="text-gray-200">Verzug:</strong> Bei Zahlungsverzug ist der Anbieter berechtigt, Verzugszinsen in Höhe von 5 Prozentpunkten über dem Basiszinssatz (bei Verbrauchern) bzw. 9 Prozentpunkten über dem Basiszinssatz (bei Unternehmern) zu berechnen. Die Geltendmachung eines höheren Schadens bleibt vorbehalten.
            </p>
            <p className="text-gray-400 leading-relaxed">
              (5) <strong className="text-gray-200">Preisanpassung:</strong> Bei laufenden Verträgen mit einer Laufzeit von mehr als einem Jahr ist der Anbieter berechtigt, die Preise mit einer Ankündigungsfrist von 6 Wochen zum Ende eines Vertragsjahres anzupassen. Der Kunde hat in diesem Fall ein Sonderkündigungsrecht.
            </p>
          </section>

          {/* §9 Mitwirkungspflichten */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="s9">
            <h2 className="text-xl font-bold text-white mb-4">§9 Mitwirkungspflichten des Kunden</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (1) Der Kunde unterstützt den Anbieter bei der Erfüllung der vertraglich geschuldeten Leistungen. Der Kunde stellt insbesondere rechtzeitig und vollständig zur Verfügung:
            </p>
            <ul className="text-gray-400 mb-4 list-disc list-inside space-y-1">
              <li>Alle erforderlichen Informationen, Daten und Materialien</li>
              <li>Zugangsdaten zu relevanten Systemen und Plattformen</li>
              <li>Einen Ansprechpartner mit Entscheidungsbefugnis</li>
              <li>Rechtzeitige Freigaben und Rückmeldungen</li>
              <li>Bildrechte, Markenlizenzen und sonstige erforderliche Rechte</li>
            </ul>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (2) Der Kunde ist für die Richtigkeit und Vollständigkeit der von ihm bereitgestellten Informationen und Materialien verantwortlich.
            </p>
            <p className="text-gray-400 leading-relaxed">
              (3) Verzögerungen oder Mehraufwand, die durch verspätete, unvollständige oder fehlerhafte Mitwirkung des Kunden entstehen, gehen zu dessen Lasten. Der Anbieter ist berechtigt, den daraus entstehenden Mehraufwand gesondert in Rechnung zu stellen.
            </p>
          </section>

          {/* §10 Nutzungsrechte */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="s10">
            <h2 className="text-xl font-bold text-white mb-4">§10 Nutzungsrechte und geistiges Eigentum</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (1) Mit vollständiger Zahlung erhält der Kunde das einfache, zeitlich und räumlich unbeschränkte Nutzungsrecht an den im Rahmen des Auftrags erstellten Werken für den vertraglich vereinbarten Zweck.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (2) <strong className="text-gray-200">Ausschließliche Nutzungsrechte:</strong> Die Einräumung ausschließlicher Nutzungsrechte bedarf einer gesonderten schriftlichen Vereinbarung und ist mit einem Aufpreis verbunden.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (3) <strong className="text-gray-200">Referenzrecht:</strong> Der Anbieter ist berechtigt, die erbrachten Leistungen zu Präsentationszwecken als Referenz zu nutzen, sofern der Kunde dem nicht ausdrücklich widerspricht.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (4) <strong className="text-gray-200">Vorbestand:</strong> Rechte an vorbestehendem geistigem Eigentum des Anbieters (z.B. Frameworks, Templates, Bibliotheken) verbleiben beim Anbieter. Der Kunde erhält hieran ein einfaches Nutzungsrecht für den vereinbarten Zweck.
            </p>
            <p className="text-gray-400 leading-relaxed">
              (5) <strong className="text-gray-200">Eigentumsvorbehalt:</strong> Bis zur vollständigen Bezahlung verbleiben alle Rechte an den erstellten Werken beim Anbieter.
            </p>
          </section>

          {/* §11 Vertraulichkeit */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="s11">
            <h2 className="text-xl font-bold text-white mb-4">§11 Vertraulichkeit</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (1) Die Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten vertraulichen Informationen der jeweils anderen Partei geheim zu halten und nur für die Zwecke des Vertrages zu verwenden.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (2) Die Vertraulichkeitspflicht gilt nicht für Informationen, die (a) öffentlich bekannt sind oder werden, (b) der empfangenden Partei bereits bekannt waren, (c) von Dritten rechtmäßig erlangt wurden, oder (d) aufgrund gesetzlicher Verpflichtung offengelegt werden müssen.
            </p>
            <p className="text-gray-400 leading-relaxed">
              (3) Die Vertraulichkeitspflicht gilt über die Beendigung des Vertrages hinaus für einen Zeitraum von 3 Jahren, soweit nicht ausdrücklich anders vereinbart.
            </p>
          </section>

          {/* §12 Haftung */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="s12">
            <h2 className="text-xl font-bold text-white mb-4">§12 Haftung und Gewährleistung</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (1) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für Vorsatz und grobe Fahrlässigkeit.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (2) Für leichte Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). Die Haftung ist in diesen Fällen auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (3) <strong className="text-gray-200">Haftungsausschluss:</strong> Der Anbieter haftet nicht für: (a) Schäden aufgrund unrichtiger oder unvollständiger Angaben des Kunden, (b) Schäden durch Handlungen Dritter (z.B. Plattformbetreiber, Hacker), (c) entgangenen Gewinn oder mittelbare Schäden, soweit gesetzlich zulässig, (d) Ergebnisse von KI-Systemen, die trotz angemessener Sorgfalt fehlerhaft sind.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (4) <strong className="text-gray-200">Haftungshöchstgrenze (B2B):</strong> Gegenüber Unternehmern ist die Haftung des Anbieters, soweit gesetzlich zulässig, auf die Höhe des Netto-Auftragswertes bzw. bei laufenden Verträgen auf das Jahresentgelt begrenzt.
            </p>
            <p className="text-gray-400 leading-relaxed">
              (5) <strong className="text-gray-200">Gewährleistung:</strong> Die Gewährleistungsfrist beträgt für Verbraucher 2 Jahre, für Unternehmer 1 Jahr ab Abnahme. Bei Mängeln hat der Anbieter das Recht zur Nachbesserung.
            </p>
          </section>

          {/* §13 Vertragslaufzeit */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="s13">
            <h2 className="text-xl font-bold text-white mb-4">§13 Vertragslaufzeit und Kündigung</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (1) <strong className="text-gray-200">Projektverträge:</strong> Einmalige Projekte enden mit Abnahme und vollständiger Bezahlung der vereinbarten Leistungen.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (2) <strong className="text-gray-200">Laufende Verträge (B2B):</strong> Laufende Verträge werden, sofern nicht anders vereinbart, für eine Mindestlaufzeit von 6 Monaten geschlossen und verlängern sich automatisch um jeweils 3 Monate, wenn sie nicht mit einer Frist von 4 Wochen zum Ende der Laufzeit gekündigt werden.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (3) <strong className="text-gray-200">Laufende Verträge (B2C):</strong> Gegenüber Verbrauchern beträgt die maximale Erstlaufzeit 24 Monate. Nach Ablauf der Mindestlaufzeit kann der Vertrag jederzeit mit einer Frist von einem Monat gekündigt werden.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (4) <strong className="text-gray-200">Außerordentliche Kündigung:</strong> Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt insbesondere vor bei: (a) Zahlungsverzug von mehr als 30 Tagen, (b) wesentlicher Vertragsverletzung trotz Abmahnung, (c) Insolvenzantrag einer Partei.
            </p>
            <p className="text-gray-400 leading-relaxed">
              (5) <strong className="text-gray-200">Form:</strong> Die Kündigung bedarf der Textform (E-Mail genügt).
            </p>
          </section>

          {/* §14 B2B-Bestimmungen */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="s14">
            <h2 className="text-xl font-bold text-white mb-4">§14 Besondere Bestimmungen für Unternehmer (B2B)</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Die folgenden Bestimmungen gelten ausschließlich für Geschäftskunden (Unternehmer im Sinne von § 14 BGB):
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (1) <strong className="text-gray-200">Gerichtsstand:</strong> Ausschließlicher Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis ist der Sitz des Anbieters (Fürstenfeldbruck), sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (2) <strong className="text-gray-200">Mängelrüge:</strong> Der Kunde ist verpflichtet, offensichtliche Mängel innerhalb von 14 Tagen nach Abnahme schriftlich anzuzeigen. Verdeckte Mängel sind unverzüglich nach Entdeckung anzuzeigen.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (3) <strong className="text-gray-200">Aufrechnung:</strong> Der Kunde kann nur mit unbestrittenen oder rechtskräftig festgestellten Forderungen aufrechnen.
            </p>
            <p className="text-gray-400 leading-relaxed">
              (4) <strong className="text-gray-200">Abtretungsverbot:</strong> Die Abtretung von Forderungen gegen den Anbieter an Dritte ist nur mit schriftlicher Zustimmung des Anbieters zulässig.
            </p>
          </section>

          {/* §15 B2C-Bestimmungen */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="s15">
            <h2 className="text-xl font-bold text-white mb-4">§15 Besondere Bestimmungen für Verbraucher (B2C)</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Die folgenden Bestimmungen gelten ausschließlich für Verbraucher im Sinne von § 13 BGB:
            </p>
            
            <h3 className="text-lg font-semibold text-gray-200 mb-3">Widerrufsbelehrung</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <strong className="text-gray-200">Widerrufsrecht:</strong> Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsschlusses.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (ExtruCon GmbH, Hasenheide 8, 82256 Fürstenfeldbruck, E-Mail: info@extrucon.de) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <strong className="text-gray-200">Folgen des Widerrufs:</strong> Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen 14 Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf bei uns eingegangen ist.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <strong className="text-gray-200">Besonderer Hinweis:</strong> Ihr Widerrufsrecht erlischt bei einem Vertrag zur Erbringung von Dienstleistungen vorzeitig, wenn wir die Dienstleistung vollständig erbracht haben und mit der Ausführung der Dienstleistung erst begonnen haben, nachdem Sie dazu Ihre ausdrückliche Zustimmung gegeben haben und gleichzeitig Ihre Kenntnis davon bestätigt haben, dass Sie Ihr Widerrufsrecht bei vollständiger Vertragserfüllung durch uns verlieren.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-200 mb-3 mt-6">Online-Streitbeilegung</h3>
            <p className="text-gray-400 leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">https://ec.europa.eu/consumers/odr</a>. Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          {/* §16 Datenschutz */}
          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5" id="s16">
            <h2 className="text-xl font-bold text-white mb-4">§16 Datenschutz</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (1) Der Anbieter verarbeitet personenbezogene Daten des Kunden gemäß den geltenden datenschutzrechtlichen Bestimmungen, insbesondere der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (2) Einzelheiten zur Datenverarbeitung ergeben sich aus der Datenschutzerklärung des Anbieters, die unter <a href="/privacy" className="text-cyan-400 hover:text-cyan-300">extrucon.de/datenschutz</a> abrufbar ist.
            </p>
            <p className="text-gray-400 leading-relaxed">
              (3) Soweit der Anbieter im Auftrag des Kunden personenbezogene Daten verarbeitet (Auftragsverarbeitung gemäß Art. 28 DSGVO), wird ein gesonderter Auftragsverarbeitungsvertrag abgeschlossen.
            </p>
          </section>

          {/* §17 Schlussbestimmungen */}
          <section className="p-6 rounded-xl bg-card/30 border border-white/5" id="s17">
            <h2 className="text-xl font-bold text-white mb-4">§17 Schlussbestimmungen</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (1) <strong className="text-gray-200">Anwendbares Recht:</strong> Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG). Bei Verbrauchern gilt diese Rechtswahl nur insoweit, als dadurch nicht zwingende Verbraucherschutzvorschriften des Staates eingeschränkt werden, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (2) <strong className="text-gray-200">Schriftform:</strong> Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Dies gilt auch für die Abbedingung dieser Schriftformklausel.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              (3) <strong className="text-gray-200">Salvatorische Klausel:</strong> Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so berührt dies die Wirksamkeit der übrigen Bestimmungen nicht. Die unwirksame Bestimmung ist durch eine wirksame zu ersetzen, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung möglichst nahekommt.
            </p>
            <p className="text-gray-400 leading-relaxed">
              (4) <strong className="text-gray-200">Änderungen der AGB:</strong> Der Anbieter behält sich vor, diese AGB mit Wirkung für die Zukunft zu ändern. Der Kunde wird über Änderungen mindestens 6 Wochen vor Inkrafttreten per E-Mail informiert. Die Änderungen gelten als genehmigt, wenn der Kunde nicht innerhalb von 6 Wochen nach Zugang der Änderungsmitteilung widerspricht. Auf diese Rechtsfolge wird der Kunde in der Änderungsmitteilung hingewiesen.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
