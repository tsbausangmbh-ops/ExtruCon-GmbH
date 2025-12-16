import { motion } from "framer-motion";
import { Shield, Lock, Award, Globe, Headphones, CheckCircle } from "lucide-react";
import { useLanguage, Language } from "@/lib/i18n";

const translations: Record<Language, {
  badge: string;
  title: string;
  subtitle: string;
  items: { title: string; description: string }[];
  certifications: string[];
}> = {
  de: {
    badge: "Vertrauen & Sicherheit",
    title: "Warum Sie uns vertrauen können",
    subtitle: "Sicherheit und Datenschutz stehen bei uns an erster Stelle. Wir arbeiten nach höchsten Standards.",
    items: [
      { title: "DSGVO-konform", description: "Alle Lösungen erfüllen die strengen deutschen und europäischen Datenschutzrichtlinien." },
      { title: "Sichere Infrastruktur", description: "Hosting in deutschen Rechenzentren mit Enterprise-Grade Sicherheit." },
      { title: "Zertifizierte Experten", description: "Unser Team besteht aus zertifizierten KI- und Automatisierungsspezialisten." },
      { title: "Mehrsprachiger Support", description: "Support in Deutsch, Englisch, Kroatisch und Türkisch." },
      { title: "Persönlicher Ansprechpartner", description: "Ein fester Projektmanager begleitet Sie durch alle Phasen." },
      { title: "Transparente Preise", description: "Keine versteckten Kosten. Festpreis-Angebote für alle Projekte." }
    ],
    certifications: ["n8n Partner", "OpenAI Integration", "ISO 27001 konform"]
  },
  en: {
    badge: "Trust & Security",
    title: "Why You Can Trust Us",
    subtitle: "Security and data protection are our top priorities. We work according to the highest standards.",
    items: [
      { title: "GDPR Compliant", description: "All solutions comply with strict German and European data protection regulations." },
      { title: "Secure Infrastructure", description: "Hosting in German data centers with enterprise-grade security." },
      { title: "Certified Experts", description: "Our team consists of certified AI and automation specialists." },
      { title: "Multilingual Support", description: "Support in German, English, Croatian, and Turkish." },
      { title: "Personal Contact", description: "A dedicated project manager guides you through all phases." },
      { title: "Transparent Pricing", description: "No hidden costs. Fixed-price offers for all projects." }
    ],
    certifications: ["n8n Partner", "OpenAI Integration", "ISO 27001 Compliant"]
  },
  hr: {
    badge: "Povjerenje i sigurnost",
    title: "Zašto nam možete vjerovati",
    subtitle: "Sigurnost i zaštita podataka naši su glavni prioriteti. Radimo prema najvišim standardima.",
    items: [
      { title: "GDPR sukladno", description: "Sva rješenja u skladu su sa strogim njemačkim i europskim propisima o zaštiti podataka." },
      { title: "Sigurna infrastruktura", description: "Hosting u njemačkim podatkovnim centrima s poslovnom razinom sigurnosti." },
      { title: "Certificirani stručnjaci", description: "Naš tim čine certificirani stručnjaci za AI i automatizaciju." },
      { title: "Višejezična podrška", description: "Podrška na njemačkom, engleskom, hrvatskom i turskom jeziku." },
      { title: "Osobni kontakt", description: "Posvećeni voditelj projekta vodi vas kroz sve faze." },
      { title: "Transparentne cijene", description: "Nema skrivenih troškova. Ponude s fiksnom cijenom za sve projekte." }
    ],
    certifications: ["n8n Partner", "OpenAI integracija", "ISO 27001 sukladno"]
  },
  tr: {
    badge: "Güven ve Güvenlik",
    title: "Neden Bize Güvenebilirsiniz",
    subtitle: "Güvenlik ve veri koruma en önemli önceliklerimizdir. En yüksek standartlara göre çalışıyoruz.",
    items: [
      { title: "KVKK Uyumlu", description: "Tüm çözümler katı Alman ve Avrupa veri koruma düzenlemelerine uygundur." },
      { title: "Güvenli Altyapı", description: "Kurumsal düzeyde güvenlikle Alman veri merkezlerinde barındırma." },
      { title: "Sertifikalı Uzmanlar", description: "Ekibimiz sertifikalı yapay zeka ve otomasyon uzmanlarından oluşuyor." },
      { title: "Çok Dilli Destek", description: "Almanca, İngilizce, Hırvatça ve Türkçe destek." },
      { title: "Kişisel İletişim", description: "Özel bir proje yöneticisi tüm aşamalarda size rehberlik eder." },
      { title: "Şeffaf Fiyatlandırma", description: "Gizli maliyet yok. Tüm projeler için sabit fiyat teklifleri." }
    ],
    certifications: ["n8n Partner", "OpenAI Entegrasyonu", "ISO 27001 Uyumlu"]
  }
};

export function TrustSignals() {
  const { language } = useLanguage();
  const t = translations[language];
  const icons = [Shield, Lock, Award, Globe, Headphones, CheckCircle];

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-4">
            {t.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gray-800/30 border border-gray-700/30 rounded-xl hover:border-green-500/30 transition-all"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {t.certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full"
            >
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-gray-300 text-sm font-medium">{cert}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
