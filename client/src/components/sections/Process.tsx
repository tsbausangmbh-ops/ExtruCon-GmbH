import { motion } from "framer-motion";
import { MessageSquare, Search, Lightbulb, Rocket, HeadphonesIcon } from "lucide-react";
import { useLanguage, Language } from "@/lib/i18n";

const translations: Record<Language, {
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
  steps: { title: string; description: string }[];
}> = {
  de: {
    badge: "So arbeiten wir",
    title: "In 5 Schritten zu Ihrer KI-Lösung",
    subtitle: "Vom ersten Gespräch bis zur fertigen Lösung – wir begleiten Sie durch den gesamten Prozess.",
    cta: "Kostenloses Erstgespräch buchen",
    steps: [
      { title: "Kostenloses Erstgespräch", description: "In einem 30-minütigen Gespräch analysieren wir Ihre aktuellen Herausforderungen und Ziele. Wir hören zu und verstehen Ihr Geschäft." },
      { title: "Analyse & Konzept", description: "Wir identifizieren Automatisierungspotenziale und erstellen ein maßgeschneidertes Konzept mit klaren Meilensteinen und transparenten Kosten." },
      { title: "Entwicklung & Test", description: "Unsere Experten entwickeln Ihre Lösung iterativ. Sie erhalten regelmäßige Updates und können jederzeit Feedback geben." },
      { title: "Live-Schaltung", description: "Nach erfolgreichen Tests geht Ihre Lösung live. Wir schulen Sie und Ihr Team im Umgang mit den neuen Tools." },
      { title: "Betreuung & Optimierung", description: "Wir bleiben an Ihrer Seite: Support, Updates und kontinuierliche Optimierung für maximale Ergebnisse." }
    ]
  },
  en: {
    badge: "How We Work",
    title: "Your AI Solution in 5 Steps",
    subtitle: "From the first conversation to the finished solution – we guide you through the entire process.",
    cta: "Book Free Consultation",
    steps: [
      { title: "Free Consultation", description: "In a 30-minute call, we analyze your current challenges and goals. We listen and understand your business." },
      { title: "Analysis & Concept", description: "We identify automation potential and create a customized concept with clear milestones and transparent costs." },
      { title: "Development & Testing", description: "Our experts develop your solution iteratively. You receive regular updates and can provide feedback at any time." },
      { title: "Go Live", description: "After successful testing, your solution goes live. We train you and your team on the new tools." },
      { title: "Support & Optimization", description: "We stay by your side: support, updates, and continuous optimization for maximum results." }
    ]
  },
  hr: {
    badge: "Kako radimo",
    title: "Vaše AI rješenje u 5 koraka",
    subtitle: "Od prvog razgovora do gotovog rješenja – vodimo vas kroz cijeli proces.",
    cta: "Rezervirajte besplatni razgovor",
    steps: [
      { title: "Besplatna konzultacija", description: "U 30-minutnom razgovoru analiziramo vaše trenutne izazove i ciljeve. Slušamo i razumijemo vaše poslovanje." },
      { title: "Analiza i koncept", description: "Identificiramo potencijal automatizacije i kreiramo prilagođeni koncept s jasnim prekretnicama i transparentnim troškovima." },
      { title: "Razvoj i testiranje", description: "Naši stručnjaci iterativno razvijaju vaše rješenje. Dobivate redovita ažuriranja i možete dati povratne informacije u bilo kojem trenutku." },
      { title: "Pokretanje", description: "Nakon uspješnog testiranja, vaše rješenje postaje aktivno. Obučavamo vas i vaš tim za korištenje novih alata." },
      { title: "Podrška i optimizacija", description: "Ostajemo uz vas: podrška, ažuriranja i kontinuirana optimizacija za maksimalne rezultate." }
    ]
  },
  tr: {
    badge: "Nasıl Çalışıyoruz",
    title: "5 Adımda Yapay Zeka Çözümünüz",
    subtitle: "İlk görüşmeden bitmiş çözüme kadar – tüm süreç boyunca size rehberlik ediyoruz.",
    cta: "Ücretsiz Danışmanlık Randevusu Al",
    steps: [
      { title: "Ücretsiz Danışmanlık", description: "30 dakikalık bir görüşmede mevcut zorluklarınızı ve hedeflerinizi analiz ediyoruz. Dinliyor ve işinizi anlıyoruz." },
      { title: "Analiz ve Konsept", description: "Otomasyon potansiyelini belirliyoruz ve net kilometre taşları ve şeffaf maliyetlerle özelleştirilmiş bir konsept oluşturuyoruz." },
      { title: "Geliştirme ve Test", description: "Uzmanlarımız çözümünüzü yinelemeli olarak geliştiriyor. Düzenli güncellemeler alıyorsunuz ve istediğiniz zaman geri bildirim verebilirsiniz." },
      { title: "Yayına Alma", description: "Başarılı testlerden sonra çözümünüz yayına giriyor. Sizi ve ekibinizi yeni araçlar konusunda eğitiyoruz." },
      { title: "Destek ve Optimizasyon", description: "Yanınızda kalıyoruz: destek, güncellemeler ve maksimum sonuçlar için sürekli optimizasyon." }
    ]
  }
};

export function Process() {
  const { language } = useLanguage();
  const t = translations[language];
  const icons = [MessageSquare, Search, Lightbulb, Rocket, HeadphonesIcon];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium mb-4">
            {t.badge}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
            {t.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 via-cyan-500/50 to-primary/50 -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-5 gap-8">
            {t.steps.map((step, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-primary/50 transition-all h-full">
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto lg:mx-0">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-primary font-bold text-sm mb-2">{`0${index + 1}`}</div>
                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/termin"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-cyan-500 text-background font-semibold rounded-xl hover:opacity-90 transition-opacity"
            data-testid="button-process-cta"
          >
            {t.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
