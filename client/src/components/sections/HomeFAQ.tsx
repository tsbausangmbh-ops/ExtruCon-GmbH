import { motion } from "framer-motion";
import { HelpCircle, ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export function HomeFAQ() {
  const { t } = useLanguage();
  const [openQuestion, setOpenQuestion] = useState<number[]>([0, 1, 2, 3]);

  const faqs = [
    {
      q: "Was kostet eine Website mit KI-Chatbot?",
      a: "Die Kosten hängen vom Umfang ab. Eine einfache Landingpage mit KI-Chatbot beginnt ab 2.500€. Wir erstellen Ihnen gerne ein individuelles Angebot."
    },
    {
      q: "Wie lange dauert die Entwicklung?",
      a: "Eine Landingpage ist in 1-2 Wochen fertig. Komplexere Projekte mit KI-Integration dauern 3-6 Wochen. Wir halten Sie stets über den Fortschritt informiert."
    },
    {
      q: "Brauche ich technisches Wissen?",
      a: "Nein! Wir kümmern uns um alles Technische. Sie erhalten eine einfache Einweisung und können Inhalte selbst pflegen, wenn gewünscht."
    },
    {
      q: "Funktioniert KI auch für kleine Unternehmen?",
      a: "Absolut! Gerade kleine Unternehmen profitieren von KI-Automatisierung. Sie sparen Zeit und können sich auf Ihr Kerngeschäft konzentrieren."
    }
  ];

  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Häufige Fragen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
            Ihre Fragen, <span className="text-gradient">unsere Antworten</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Die wichtigsten Fragen zu unseren Leistungen
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl bg-card/30 border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenQuestion(openQuestion.includes(i) ? openQuestion.filter(q => q !== i) : [...openQuestion, i])}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                  data-testid={`home-faq-${i}`}
                >
                  <span className="font-medium text-white">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${openQuestion.includes(i) ? 'rotate-180' : ''}`} />
                </button>
                {openQuestion.includes(i) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-5 pb-5 text-gray-400 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <a
              href="/faq"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
              data-testid="link-all-faqs"
            >
              Alle Fragen ansehen <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
