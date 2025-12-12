import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { HelpCircle, ChevronDown, Bot, Share2, Globe, TrendingUp, CreditCard, Users, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const faqCategories = [
  {
    id: "allgemein",
    name: "Allgemein",
    icon: HelpCircle,
    color: "text-primary",
    questions: [
      { q: "Wer ist ExtruCon?", a: "ExtruCon GmbH ist eine Full-Service Marketing- und KI-Agentur mit Sitz in Fürstenfeldbruck bei München. Wir betreuen Kunden deutschlandweit in den Bereichen digitales Marketing, KI-Automatisierung, Webentwicklung und Content Creation." },
      { q: "Arbeitet ihr deutschlandweit?", a: "Ja! Unser Hauptsitz ist in Fürstenfeldbruck, aber wir betreuen Kunden in ganz Deutschland – sowohl remote als auch vor Ort, je nach Bedarf." },
      { q: "Für welche Branchen arbeitet ihr?", a: "Wir arbeiten branchenübergreifend mit KMUs, Startups, Handwerksbetrieben, Dienstleistern, E-Commerce-Unternehmen und mehr. Unsere Strategien passen wir individuell an Ihre Branche an." },
      { q: "Bietet ihr kostenlose Erstgespräche an?", a: "Ja! Das erste Beratungsgespräch ist immer kostenlos und unverbindlich. Wir analysieren Ihre aktuelle Situation und zeigen Ihnen Potenziale auf." },
      { q: "Wie schnell antwortet ihr auf Anfragen?", a: "Wir antworten in der Regel innerhalb von 24 Stunden an Werktagen auf alle Anfragen." },
      { q: "Wie groß ist euer Team?", a: "Wir sind ein agiles Team aus Spezialisten für Marketing, Design, Entwicklung und KI. Je nach Projektgröße arbeiten wir auch mit bewährten Partnern zusammen." },
      { q: "Habt ihr Referenzen?", a: "Ja! Wir haben bereits über 50 Projekte erfolgreich umgesetzt. Gerne zeigen wir Ihnen im Erstgespräch passende Referenzen aus Ihrer Branche." },
      { q: "Wie kann ich euch kontaktieren?", a: "Per E-Mail an info@extrucon.de, telefonisch unter 089 444438879 oder über unser Kontaktformular. Wir melden uns schnellstmöglich bei Ihnen." },
      { q: "Was unterscheidet euch von anderen Agenturen?", a: "Wir kombinieren klassisches Marketing mit modernster KI-Technologie. Dadurch arbeiten wir effizienter und können bessere Ergebnisse zu fairen Preisen liefern." },
      { q: "Seit wann gibt es ExtruCon?", a: "ExtruCon wurde 2020 gegründet und hat seitdem kontinuierlich sein Leistungsportfolio erweitert, um Unternehmen bei der digitalen Transformation zu unterstützen." },
      { q: "Arbeitet ihr auch international?", a: "Unser Fokus liegt auf dem deutschsprachigen Raum (DACH). Internationale Projekte sind nach Absprache möglich." },
      { q: "Kann ich euch auch für nur ein Projekt beauftragen?", a: "Absolut! Wir bieten sowohl Einzelprojekte als auch laufende Betreuung an – ganz nach Ihrem Bedarf." },
      { q: "Wie läuft ein typisches Projekt bei euch ab?", a: "Erstgespräch → Angebot → Kick-off → Umsetzung → Review → Launch → Optional: laufende Betreuung. Wir halten Sie in jeder Phase auf dem Laufenden." },
      { q: "Bietet ihr auch Schulungen an?", a: "Ja! Wir schulen Ihr Team in Social Media, KI-Tools, SEO und anderen Themen – individuell auf Ihr Unternehmen zugeschnitten." },
      { q: "Habt ihr ein Büro, das ich besuchen kann?", a: "Ja, unser Büro befindet sich in der Hasenheide 8, 82256 Fürstenfeldbruck. Termine nach Vereinbarung." },
      { q: "Wie haltet ihr euch über neue Trends auf dem Laufenden?", a: "Unser Team bildet sich kontinuierlich weiter, besucht Konferenzen und testet neue Tools und Technologien, bevor wir sie für Kunden einsetzen." },
      { q: "Arbeitet ihr mit anderen Agenturen zusammen?", a: "Ja, wir kooperieren bei Bedarf mit spezialisierten Partnern für Fotografie, Video-Produktion oder spezielle Entwicklungsthemen." },
      { q: "Kann ich euch weiterempfehlen?", a: "Sehr gerne! Für erfolgreiche Empfehlungen bedanken wir uns mit attraktiven Provisionen. Sprechen Sie uns einfach an." }
    ]
  },
  {
    id: "ki",
    name: "KI & Automatisierung",
    icon: Bot,
    color: "text-cyan-400",
    questions: [
      { q: "Was kostet ein KI-Chatbot?", a: "Ein einfacher Chatbot startet ab 1.500€ einmalig. Komplexere KI-Lösungen mit individueller Anpassung beginnen bei 3.000€. Wir beraten Sie kostenlos zu den Möglichkeiten." },
      { q: "Brauche ich technisches Wissen für KI-Tools?", a: "Nein! Wir übernehmen die komplette technische Umsetzung und schulen Ihr Team. Sie erhalten eine benutzerfreundliche Lösung, die einfach zu bedienen ist." },
      { q: "Wie schnell ist ein KI-Projekt umgesetzt?", a: "Einfache Chatbots sind in 1-2 Wochen einsatzbereit. Komplexere Automatisierungen benötigen 4-8 Wochen je nach Umfang." },
      { q: "Ist KI auch für kleine Unternehmen sinnvoll?", a: "Absolut! Gerade kleine Unternehmen profitieren von Automatisierung, da sie Zeit für das Kerngeschäft freisetzt. Wir haben Lösungen für jedes Budget." },
      { q: "Welche KI-Technologien setzt ihr ein?", a: "Wir arbeiten mit OpenAI/GPT-4, Claude AI, Google Gemini sowie Automatisierungstools wie n8n, Make und Zapier. Die Technologie wählen wir passend zu Ihren Anforderungen." },
      { q: "Kann KI meinen Kundenservice ersetzen?", a: "KI kann repetitive Anfragen automatisieren und Ihr Team entlasten. Für komplexe Fälle bleibt der menschliche Kontakt wichtig – KI ergänzt, ersetzt nicht vollständig." },
      { q: "Wie sicher sind KI-Lösungen?", a: "Wir achten auf DSGVO-Konformität und Datensicherheit. Kundendaten werden verschlüsselt und nur für den vorgesehenen Zweck verwendet." },
      { q: "Gibt es laufende Kosten für KI-Tools?", a: "Je nach Lösung können API-Kosten anfallen (z.B. für OpenAI). Wir kalkulieren dies transparent im Angebot und optimieren auf Kosteneffizienz." },
      { q: "Was ist n8n und warum nutzt ihr es?", a: "n8n ist ein leistungsstarkes Open-Source-Automatisierungstool. Es bietet maximale Flexibilität bei geringeren Kosten als kommerzielle Alternativen." },
      { q: "Kann ich bestehende Systeme mit KI verbinden?", a: "Ja! Wir integrieren KI-Lösungen in Ihre bestehende Software-Landschaft – CRM, ERP, E-Mail, Shop-Systeme und mehr." },
      { q: "Was ist der Unterschied zwischen Chatbot und KI-Assistent?", a: "Ein einfacher Chatbot folgt festen Regeln. Ein KI-Assistent versteht Kontext, lernt und kann komplexere Aufgaben lösen." },
      { q: "Können KI-Chatbots mehrere Sprachen?", a: "Ja! Moderne KI-Modelle beherrschen viele Sprachen. Wir können Ihren Chatbot mehrsprachig konfigurieren." },
      { q: "Wie trainiert man einen KI-Chatbot?", a: "Wir füttern den Bot mit Ihren FAQs, Produktinfos und typischen Kundenanfragen. Der Bot lernt kontinuierlich aus echten Gesprächen." },
      { q: "Was passiert, wenn die KI falsch antwortet?", a: "Wir implementieren Fallback-Mechanismen und übergeben an menschliche Mitarbeiter, wenn die KI unsicher ist. Regelmäßiges Monitoring verbessert die Qualität." },
      { q: "Kann KI auch E-Mails automatisch beantworten?", a: "Ja! Wir können KI-gestützte E-Mail-Automatisierung einrichten, die eingehende Mails analysiert und passend beantwortet oder weiterleitet." },
      { q: "Welche Prozesse kann ich automatisieren?", a: "Kundenanfragen, Terminbuchung, Rechnungsstellung, Datenerfassung, Social Media Posting, Reporting und vieles mehr." },
      { q: "Bietet ihr Support nach der Implementierung?", a: "Ja! Wir bieten Wartungspakete mit kontinuierlicher Optimierung, Updates und Support bei Fragen." },
      { q: "Kann ich die KI-Lösung später erweitern?", a: "Absolut! Wir bauen skalierbare Lösungen, die mit Ihrem Unternehmen wachsen können." }
    ]
  },
  {
    id: "social",
    name: "Social Media",
    icon: Share2,
    color: "text-purple-400",
    questions: [
      { q: "Was kostet Social Media Marketing?", a: "Unsere Pakete starten ab 790€/Monat für die Betreuung eines Kanals. Komplette Multi-Channel-Strategien mit Content-Produktion beginnen bei 1.490€/Monat." },
      { q: "Wie oft sollte man auf Social Media posten?", a: "Das hängt von der Plattform ab. Für Instagram empfehlen wir 3-5 Posts pro Woche plus tägliche Stories. Bei LinkedIn reichen 2-3 qualitative Posts pro Woche." },
      { q: "Welche Plattform ist für mein Unternehmen am besten?", a: "Das analysieren wir in einem kostenlosen Erstgespräch. B2B-Unternehmen profitieren oft von LinkedIn, lokale Dienstleister von Instagram und Google Business." },
      { q: "Erstellt ihr auch den Content für uns?", a: "Ja! Wir übernehmen die komplette Content-Produktion: Texte, Grafiken, Fotos und Videos. Auf Wunsch auch mit Vor-Ort-Shootings." },
      { q: "Wie messt ihr den Erfolg von Social Media?", a: "Wir tracken KPIs wie Reichweite, Engagement, Follower-Wachstum, Website-Traffic und Conversions. Sie erhalten monatliche Reports mit allen wichtigen Zahlen." },
      { q: "Macht ihr auch bezahlte Werbung auf Social Media?", a: "Ja! Wir erstellen und betreuen Kampagnen auf Meta (Facebook/Instagram), TikTok und LinkedIn mit kontinuierlicher Optimierung." },
      { q: "Wie schnell wächst meine Community?", a: "Das hängt von Branche und Budget ab. Organisches Wachstum braucht Zeit – mit bezahlter Reichweite können erste Ergebnisse schon nach Wochen sichtbar sein." },
      { q: "Kann ich den Content vorher freigeben?", a: "Selbstverständlich! Wir arbeiten mit Content-Kalendern und Freigabeprozessen, damit Sie immer die volle Kontrolle behalten." },
      { q: "Übernehmt ihr auch das Community Management?", a: "Ja! Wir beantworten Kommentare und Nachrichten in Ihrem Namen – schnell, freundlich und markenkonform." },
      { q: "Wie funktioniert Influencer Marketing?", a: "Wir identifizieren passende Influencer, verhandeln Konditionen, koordinieren Kampagnen und messen die Ergebnisse." },
      { q: "Ist TikTok auch für B2B geeignet?", a: "In bestimmten Branchen ja! TikTok erreicht zunehmend auch ältere Zielgruppen. Wir analysieren, ob es für Sie sinnvoll ist." },
      { q: "Was ist ein Content-Kalender?", a: "Ein Redaktionsplan, der alle geplanten Posts mit Thema, Text, Bild und Veröffentlichungsdatum enthält – für bessere Planung und Konsistenz." },
      { q: "Wie gehe ich mit negativen Kommentaren um?", a: "Wir entwickeln Guidelines für Krisenmanagement und reagieren professionell auf Kritik – das stärkt oft sogar die Marke." },
      { q: "Brauche ich für jede Plattform anderen Content?", a: "Idealerweise ja. Wir passen Content ans Format an, aber nutzen auch smarte Wiederverwendung für Effizienz." },
      { q: "Was ist der beste Zeitpunkt zum Posten?", a: "Das variiert je nach Zielgruppe. Wir analysieren Ihre Daten und posten zu optimalen Zeiten." },
      { q: "Können Sie meinen bestehenden Account übernehmen?", a: "Ja! Wir analysieren Ihren Account, entwickeln eine Strategie und übernehmen nahtlos die Betreuung." },
      { q: "Was sind Stories und Reels?", a: "Stories sind 24h-Inhalte für schnelle Updates. Reels sind kurze Videos für mehr Reichweite – beide sind wichtig für Instagram-Erfolg." },
      { q: "Wie viele Hashtags sollte ich nutzen?", a: "Auf Instagram empfehlen wir 5-15 relevante Hashtags. Qualität vor Quantität – wir recherchieren die passenden." }
    ]
  },
  {
    id: "web",
    name: "Webentwicklung",
    icon: Globe,
    color: "text-blue-400",
    questions: [
      { q: "Was kostet eine professionelle Website?", a: "Eine moderne Business-Website startet ab 2.500€. Umfangreichere Projekte mit E-Commerce oder individuellen Funktionen beginnen bei 5.000€." },
      { q: "Wie lange dauert die Erstellung einer Website?", a: "Eine Standard-Website ist in 2-4 Wochen fertig. Komplexere Projekte mit individuellen Funktionen können 6-12 Wochen dauern." },
      { q: "Ist die Website für Suchmaschinen optimiert?", a: "Ja! Jede Website wird von uns SEO-optimiert erstellt: schnelle Ladezeiten, mobile Optimierung, strukturierte Daten und technisches SEO sind Standard." },
      { q: "Bietet ihr auch Hosting und Wartung an?", a: "Ja, wir bieten Hosting- und Wartungspakete ab 49€/Monat an, inkl. Updates, Backups, SSL-Zertifikat und technischem Support." },
      { q: "Kann ich die Website selbst bearbeiten?", a: "Ja! Wir richten ein benutzerfreundliches Content-Management-System ein und schulen Sie in der Bedienung." },
      { q: "Welche Technologien verwendet ihr?", a: "Wir arbeiten mit modernen Technologien wie React, Next.js, WordPress und individuellen Lösungen – je nach Anforderung Ihres Projekts." },
      { q: "Ist die Website auch mobil optimiert?", a: "Absolut! Responsive Design ist bei uns Standard. Ihre Website sieht auf Smartphone, Tablet und Desktop perfekt aus." },
      { q: "Können Sie meinen bestehenden Online-Shop verbessern?", a: "Ja! Wir optimieren bestehende Shops für bessere Performance, höhere Conversion-Rates und modernes Design." },
      { q: "Was ist ein SSL-Zertifikat?", a: "SSL verschlüsselt die Verbindung zwischen Website und Besucher (das Schloss in der Adresszeile). Es ist Pflicht für Datenschutz und SEO." },
      { q: "Können Sie meine alte Website auf ein neues System umziehen?", a: "Ja! Wir migrieren Ihre Inhalte sicher auf moderne Systeme – ohne Datenverlust und SEO-Einbußen." },
      { q: "Was ist der Unterschied zwischen Website und Landingpage?", a: "Eine Website hat mehrere Seiten für verschiedene Themen. Eine Landingpage ist eine einzelne Seite mit einem klaren Conversion-Ziel." },
      { q: "Brauche ich einen Cookie-Banner?", a: "Ja, seit der DSGVO ist ein Cookie-Banner Pflicht, wenn Sie Tracking oder Marketing-Cookies einsetzen. Wir implementieren das rechtssicher." },
      { q: "Was kostet ein Online-Shop?", a: "Einfache Shops starten ab 3.500€. Komplexere E-Commerce-Lösungen mit Anbindungen beginnen bei 7.000€. Wir beraten Sie gerne." },
      { q: "Kann ich Zahlungen über die Website annehmen?", a: "Ja! Wir integrieren gängige Zahlungsanbieter wie PayPal, Stripe, Klarna oder Ihre Hausbank." },
      { q: "Was passiert nach dem Website-Launch?", a: "Wir bieten Wartung, Updates und Weiterentwicklung an. Ihre Website bleibt sicher und aktuell." },
      { q: "Wie verbessere ich die Ladezeit meiner Website?", a: "Bildoptimierung, Caching, CDN, sauberer Code – wir analysieren Ihre Website und setzen die nötigen Maßnahmen um." },
      { q: "Kann ich mehrere Sprachen auf meiner Website haben?", a: "Ja! Wir erstellen mehrsprachige Websites mit sauberem URL-Aufbau und SEO für jede Sprache." },
      { q: "Was ist ein CMS?", a: "Ein Content-Management-System ermöglicht es Ihnen, Inhalte ohne Programmierkenntnisse zu bearbeiten. WordPress ist das bekannteste Beispiel." }
    ]
  },
  {
    id: "marketing",
    name: "SEO & Performance Marketing",
    icon: TrendingUp,
    color: "text-orange-400",
    questions: [
      { q: "Wie schnell sehe ich Ergebnisse mit SEO?", a: "Erste Verbesserungen zeigen sich oft nach 4-8 Wochen. Für nachhaltige Top-Rankings planen wir 3-6 Monate ein. SEO ist eine langfristige Investition." },
      { q: "Was kostet SEO-Optimierung?", a: "Unsere SEO-Pakete starten ab 990€/Monat. Der genaue Preis hängt vom Umfang und der Wettbewerbssituation in Ihrer Branche ab." },
      { q: "Macht ihr auch Google Ads?", a: "Ja! Wir erstellen und betreuen Google Ads Kampagnen mit kontinuierlicher Optimierung. Managementgebühren starten ab 15% des Werbebudgets (mind. 300€/Monat)." },
      { q: "Wie unterscheidet sich SEO von bezahlter Werbung?", a: "SEO bringt langfristig kostenlose Besucher, braucht aber Zeit. Bezahlte Werbung bringt sofort Traffic, kostet aber kontinuierlich. Ideal ist eine Kombination." },
      { q: "Bekomme ich regelmäßige Reports?", a: "Ja! Sie erhalten monatliche Reports mit allen wichtigen KPIs: Rankings, Traffic, Conversions, ROI. Auf Wunsch auch wöchentliche Updates." },
      { q: "Was ist Local SEO?", a: "Local SEO optimiert Ihre Sichtbarkeit für lokale Suchanfragen (z.B. 'Friseur in München'). Wichtig für Unternehmen mit lokalem Einzugsgebiet." },
      { q: "Garantiert ihr Rankings?", a: "Seriöse Agenturen geben keine Ranking-Garantien, da Google den Algorithmus kontrolliert. Wir garantieren aber professionelle Arbeit nach Best Practices." },
      { q: "Wie hoch sollte mein Werbebudget sein?", a: "Das hängt von Ihrer Branche und Ihren Zielen ab. Für erste Tests empfehlen wir mindestens 500-1.000€/Monat. Wir beraten Sie gerne individuell." },
      { q: "Was sind Keywords?", a: "Keywords sind Suchbegriffe, für die Ihre Website gefunden werden soll. Wir recherchieren die profitabelsten Keywords für Ihr Business." },
      { q: "Was ist eine Conversion?", a: "Eine Conversion ist eine gewünschte Aktion: Kauf, Anfrage, Newsletter-Anmeldung. Wir optimieren auf die für Sie wichtigen Conversions." },
      { q: "Was ist der Unterschied zwischen Google Ads und Meta Ads?", a: "Google Ads erreichen Menschen, die aktiv suchen. Meta Ads (Facebook/Instagram) erreichen Menschen basierend auf Interessen und Verhalten." },
      { q: "Was ist Retargeting?", a: "Retargeting zeigt Werbung an Personen, die Ihre Website bereits besucht haben. Sehr effektiv für höhere Conversion-Rates." },
      { q: "Was sind Backlinks?", a: "Backlinks sind Links von anderen Websites zu Ihrer. Sie sind ein wichtiger Ranking-Faktor. Wir bauen hochwertige Links nach White-Hat-Methoden auf." },
      { q: "Was ist eine Landingpage-Optimierung?", a: "Wir verbessern Design, Texte und Technik Ihrer Landingpages, damit mehr Besucher zu Kunden werden." },
      { q: "Wie funktioniert Google Analytics?", a: "Google Analytics (GA4) trackt Besucher auf Ihrer Website: Woher sie kommen, was sie tun, ob sie konvertieren. Wir richten es ein und interpretieren die Daten." },
      { q: "Was sind Core Web Vitals?", a: "Googles Metriken für Nutzererfahrung: Ladezeit, Interaktivität, visuelle Stabilität. Wir optimieren diese Werte für bessere Rankings." },
      { q: "Kann ich SEO auch selbst machen?", a: "Grundlagen ja, aber für Wettbewerbsvorteile braucht es Expertise und Zeit. Wir bieten auch SEO-Coaching an, wenn Sie selbst aktiv werden möchten." },
      { q: "Was bringt ein Google Business Profil?", a: "Es macht Sie in der lokalen Suche und auf Google Maps sichtbar. Wir optimieren Ihr Profil für maximale lokale Reichweite." }
    ]
  },
  {
    id: "kosten",
    name: "Preise & Zusammenarbeit",
    icon: CreditCard,
    color: "text-emerald-400",
    questions: [
      { q: "Wie sind eure Zahlungsbedingungen?", a: "Bei Projekten: 50% Anzahlung, 50% bei Fertigstellung. Bei laufenden Leistungen: Monatliche Abrechnung per Rechnung mit 14 Tagen Zahlungsziel." },
      { q: "Gibt es Mindestvertragslaufzeiten?", a: "Für laufende Betreuungen (SEO, Social Media) empfehlen wir mindestens 6 Monate, da Ergebnisse Zeit brauchen. Einzelprojekte haben keine Laufzeit." },
      { q: "Bietet ihr auch Einzelleistungen an?", a: "Ja! Ob nur Social Media, nur Webdesign oder nur SEO – wir schneiden unsere Leistungen auf Ihre Bedürfnisse zu." },
      { q: "Arbeitet ihr auch mit kleinen Budgets?", a: "Ja! Wir haben Einstiegspakete für kleinere Budgets und beraten Sie ehrlich, welche Maßnahmen mit Ihrem Budget am sinnvollsten sind." },
      { q: "Wie läuft die Zusammenarbeit ab?", a: "Nach dem Erstgespräch erstellen wir ein Angebot. Bei Zusage starten wir mit einem Kick-off, in dem wir Ziele und Zeitplan festlegen." },
      { q: "Habe ich einen festen Ansprechpartner?", a: "Ja! Sie bekommen einen persönlichen Projektmanager, der Ihr Hauptansprechpartner ist und alle Fäden zusammenhält." },
      { q: "Kann ich Leistungen jederzeit kündigen?", a: "Bei laufenden Verträgen gelten die vereinbarten Kündigungsfristen (meist 1-3 Monate). Einzelprojekte werden nach Abschluss abgerechnet." },
      { q: "Erstellt ihr auch individuelle Angebote?", a: "Ja! Jedes Angebot wird individuell auf Ihre Anforderungen zugeschnitten. Kontaktieren Sie uns für ein kostenloses Erstgespräch." },
      { q: "Gibt es Rabatte für langfristige Zusammenarbeit?", a: "Ja! Bei Jahresverträgen oder umfangreichen Projekten bieten wir attraktive Konditionen an." },
      { q: "Kann ich Leistungen später erweitern?", a: "Selbstverständlich! Viele Kunden starten mit einer Leistung und erweitern dann Schritt für Schritt." },
      { q: "Was passiert bei Unzufriedenheit?", a: "Wir arbeiten transparent und holen regelmäßig Feedback ein. Bei Problemen finden wir gemeinsam eine Lösung." },
      { q: "Bietet ihr Ratenzahlung an?", a: "Bei größeren Projekten können wir individuelle Zahlungspläne vereinbaren. Sprechen Sie uns einfach an." },
      { q: "Welche Zahlungsmethoden akzeptiert ihr?", a: "Überweisung ist Standard. Auf Wunsch können wir auch andere Zahlungsmethoden anbieten." },
      { q: "Bekomme ich eine detaillierte Rechnung?", a: "Ja! Jede Rechnung enthält eine transparente Aufschlüsselung aller Leistungen und Kosten." },
      { q: "Wie schnell könnt ihr starten?", a: "Nach Auftragserteilung starten wir in der Regel innerhalb einer Woche. Bei eiligen Projekten auch schneller." },
      { q: "Kann ich Teilleistungen beauftragen?", a: "Ja! Sie können einzelne Bausteine wählen, z.B. nur Strategie, nur Umsetzung oder nur Beratung." },
      { q: "Was ist im Preis enthalten?", a: "Das Angebot listet alle inkludierten Leistungen transparent auf. Zusätzliche Kosten (z.B. Werbebudget, Stock-Fotos) werden separat ausgewiesen." },
      { q: "Gibt es versteckte Kosten?", a: "Nein! Wir arbeiten mit transparenten Festpreisen oder klar definierten Stundenkontingenten. Sie wissen immer, was Sie bezahlen." }
    ]
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("allgemein");
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleQuestion = (id: string) => {
    setOpenQuestions(prev => 
      prev.includes(id) ? prev.filter(q => q !== id) : [...prev, id]
    );
  };

  const allQuestions = faqCategories.flatMap(cat => 
    cat.questions.map((q, i) => ({ ...q, category: cat.id, id: `${cat.id}-${i}` }))
  );

  const filteredQuestions = searchQuery 
    ? allQuestions.filter(q => 
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  const currentCategory = faqCategories.find(c => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                <HelpCircle className="w-4 h-4" />
                Hilfe & Support
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
                Häufige Fragen (FAQ)
              </h1>
              <p className="text-lg text-gray-400 mb-8">
                Finden Sie Antworten auf die häufigsten Fragen zu unseren Leistungen, 
                Preisen und der Zusammenarbeit mit ExtruCon.
              </p>
              
              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <Input
                  placeholder="Frage suchen..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white"
                  data-testid="input-search-faq"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search Results */}
        {filteredQuestions && (
          <section className="py-8">
            <div className="container mx-auto px-4">
              <h2 className="text-xl font-bold text-white mb-4">
                Suchergebnisse ({filteredQuestions.length})
              </h2>
              {filteredQuestions.length === 0 ? (
                <p className="text-gray-400">Keine Fragen gefunden. Versuchen Sie einen anderen Suchbegriff.</p>
              ) : (
                <div className="max-w-3xl space-y-3">
                  {filteredQuestions.map((faq) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="rounded-xl bg-card/30 border border-white/5 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(faq.id)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4"
                        data-testid={`faq-${faq.id}`}
                      >
                        <span className="font-medium text-white">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${openQuestions.includes(faq.id) ? 'rotate-180' : ''}`} />
                      </button>
                      {openQuestions.includes(faq.id) && (
                        <div className="px-4 pb-4 text-gray-400">
                          {faq.a}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Category Navigation + Questions */}
        {!filteredQuestions && (
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Category Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 space-y-2">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Kategorien</h3>
                    {faqCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                          activeCategory === cat.id
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-gray-400 hover:bg-white/5"
                        }`}
                        data-testid={`category-${cat.id}`}
                      >
                        <cat.icon className={`w-5 h-5 ${cat.color}`} />
                        <span className="font-medium">{cat.name}</span>
                        <span className="ml-auto text-xs text-gray-500">{cat.questions.length}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Questions */}
                <div className="lg:col-span-3">
                  {currentCategory && (
                    <motion.div
                      key={currentCategory.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <currentCategory.icon className={`w-8 h-8 ${currentCategory.color}`} />
                        <h2 className="text-2xl font-bold text-white">{currentCategory.name}</h2>
                      </div>
                      
                      <div className="space-y-3">
                        {currentCategory.questions.map((faq, i) => {
                          const id = `${currentCategory.id}-${i}`;
                          return (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.02 }}
                              className="rounded-xl bg-card/30 border border-white/5 overflow-hidden"
                            >
                              <button
                                onClick={() => toggleQuestion(id)}
                                className="w-full p-5 text-left flex items-center justify-between gap-4"
                                data-testid={`faq-${id}`}
                              >
                                <span className="font-medium text-white">{faq.q}</span>
                                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${openQuestions.includes(id) ? 'rotate-180' : ''}`} />
                              </button>
                              {openQuestions.includes(id) && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  className="px-5 pb-5 text-gray-400 leading-relaxed"
                                >
                                  {faq.a}
                                </motion.div>
                              )}
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact CTA */}
        <section className="py-10 bg-card/20">
          <div className="container mx-auto px-4 text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Frage nicht dabei?</h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Kontaktieren Sie uns direkt – wir beantworten Ihre Fragen gerne persönlich und unverbindlich.
            </p>
            <a 
              href="/kontakt" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors"
              data-testid="button-contact-faq"
            >
              Jetzt Kontakt aufnehmen
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
