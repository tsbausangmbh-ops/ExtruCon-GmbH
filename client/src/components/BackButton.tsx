import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export function BackButton() {
  const [location] = useLocation();
  
  if (location === "/") return null;
  
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <button
      onClick={handleBack}
      data-testid="button-back"
      className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Zurück"
    >
      <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
    </button>
  );
}
