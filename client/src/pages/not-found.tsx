import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Home, ArrowLeft, Search, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { SEOHead } from "@/components/SEOHead";

export default function NotFound() {
  const { t } = useLanguage();

  const popularLinks = [
    { href: "/ki-agenten", label: "KI-Agenten", icon: "🤖" },
    { href: "/automatisierungen", label: "Automatisierungen", icon: "⚡" },
    { href: "/webseiten-ki", label: "Webseiten mit KI", icon: "🌐" },
    { href: "/kontakt", label: "Kontakt", icon: "📧" },
    { href: "/faq", label: "FAQ", icon: "❓" },
  ];

  return (
    <>
      <SEOHead
        title="404 - Seite nicht gefunden | ExtruCon GmbH"
        description="Die gewünschte Seite wurde nicht gefunden. Nutzen Sie unsere Navigation oder kontaktieren Sie uns direkt."
        canonical="https://extrucon.de/404"
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="text-8xl md:text-9xl font-bold text-gradient mb-4">404</div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seite nicht gefunden
            </h1>
            
            <p className="text-xl text-gray-400 mb-8">
              Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/">
                <a className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors" data-testid="link-home">
                  <Home className="w-5 h-5" />
                  Zur Startseite
                </a>
              </Link>
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors"
                data-testid="button-back"
              >
                <ArrowLeft className="w-5 h-5" />
                Zurück
              </button>
            </div>

            <div className="bg-card/30 border border-white/10 rounded-xl p-6 mb-8">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center justify-center gap-2">
                <Search className="w-5 h-5 text-primary" />
                Beliebte Seiten
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {popularLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a 
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
                      data-testid={`link-${link.href.slice(1)}`}
                    >
                      <span>{link.icon}</span>
                      <span className="text-sm">{link.label}</span>
                    </a>
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-gray-400">
              <p className="mb-2">Brauchen Sie Hilfe?</p>
              <Link href="/kontakt">
                <a className="inline-flex items-center gap-2 text-primary hover:underline" data-testid="link-contact-help">
                  <MessageCircle className="w-4 h-4" />
                  Kontaktieren Sie uns
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
