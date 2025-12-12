import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Was kostet digitales Marketing?",
    answer: "Die Kosten variieren je nach Umfang und Zielen. Einzelne Kampagnen starten ab 500€/Monat, umfassende Betreuung ab 1.500€/Monat. In der kostenlosen Erstberatung erstellen wir ein individuelles Angebot basierend auf Ihren Zielen und Budget."
  },
  {
    question: "Wie schnell sehe ich Ergebnisse?",
    answer: "Bei bezahlter Werbung (Google Ads, Social Ads) sehen Sie erste Ergebnisse oft innerhalb von Tagen. SEO-Maßnahmen benötigen 3-6 Monate für nachhaltige Rankings. Wir setzen auf eine Kombination für schnelle und langfristige Erfolge."
  },
  {
    question: "Was ist der Unterschied zwischen SEO und SEA?",
    answer: "SEO (Suchmaschinenoptimierung) verbessert Ihre organischen Rankings langfristig – kostenloser Traffic, aber zeitintensiv. SEA (Suchmaschinenwerbung) bringt sofort Besucher durch bezahlte Anzeigen. Beides zusammen ist die effektivste Strategie."
  },
  {
    question: "Brauche ich Social Media für mein Unternehmen?",
    answer: "Das hängt von Ihrer Zielgruppe ab. B2C-Unternehmen profitieren stark von Instagram und Facebook. B2B-Firmen erreichen Entscheider über LinkedIn. Wir analysieren, welche Plattformen für Ihr Business sinnvoll sind."
  },
  {
    question: "Was bringt mir ein KI-Chatbot?",
    answer: "Ein KI-Chatbot beantwortet Kundenanfragen 24/7, qualifiziert Leads automatisch und bucht Termine. Unsere Kunden sparen durchschnittlich 15+ Stunden pro Woche und verpassen keine Anfrage mehr – auch nachts und am Wochenende."
  },
  {
    question: "Wie messe ich den Erfolg von Marketing?",
    answer: "Wir setzen auf messbare KPIs: Website-Traffic, Conversion-Rate, Cost-per-Lead, ROI. Mit Analytics-Dashboards sehen Sie transparent, welche Maßnahmen funktionieren. Monatliche Reports zeigen Ihre Fortschritte."
  },
  {
    question: "Kann ich Marketing auch selbst machen?",
    answer: "Grundsätzlich ja, aber professionelles Marketing erfordert Know-how, Zeit und Tools. Viele Unternehmer unterschätzen den Aufwand. Wir übernehmen die Arbeit oder schulen Ihr Team – je nach Ihren Ressourcen."
  },
  {
    question: "Was ist Marketing-Automatisierung?",
    answer: "Automatisierung übernimmt wiederkehrende Aufgaben: E-Mail-Sequenzen, Lead-Nurturing, Social-Media-Posting, Reporting. Statt manuell zu arbeiten, laufen Prozesse im Hintergrund – skalierbar und fehlerlos."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 bg-background" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Häufige Fragen zu digitalem Marketing
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Antworten auf die wichtigsten Fragen rund um Marketing, SEO, Social Media und KI-Automatisierung.
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border-b border-white/10"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-5 flex items-center justify-between text-left hover:text-primary transition-colors group"
                data-testid={`faq-toggle-${index}`}
              >
                <h3 className="text-base font-medium text-white group-hover:text-primary pr-4" itemProp="name">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="pb-5 text-gray-400 text-sm leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm mb-4">
            Haben Sie weitere Fragen?
          </p>
          <a 
            href="/kontakt" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors"
            data-testid="button-faq-contact"
          >
            Kostenlose Beratung anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
