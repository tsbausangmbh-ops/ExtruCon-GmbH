import { ArrowLeft, Home } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function BackToHome() {
  const { language } = useLanguage();
  
  const labels = {
    de: "Zurück zur Startseite",
    en: "Back to Home",
    hr: "Povratak na naslovnu",
    tr: "Ana Sayfaya Dön"
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <a 
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-300 group"
        data-testid="button-back-home"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <Home className="w-4 h-4" />
        <span className="font-medium">{labels[language]}</span>
      </a>
    </div>
  );
}
