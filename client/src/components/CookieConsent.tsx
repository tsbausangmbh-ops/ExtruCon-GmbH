import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie, Settings } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export function CookieConsent() {
  const { t } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    savePreferences({ necessary: true, analytics: true, marketing: true });
  };

  const acceptNecessary = () => {
    savePreferences({ necessary: true, analytics: false, marketing: false });
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
        aria-describedby="cookie-description"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-6">
            {!showSettings ? (
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/20">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {t.cookieConsent.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {t.cookieConsent.description}{" "}
                      <a href="/datenschutz" className="text-primary hover:underline">
                        {t.cookieConsent.privacyLink}
                      </a>
                    </p>
                  </div>
                  <button
                    onClick={acceptNecessary}
                    className="text-gray-500 hover:text-white transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    onClick={acceptAll}
                    className="bg-primary hover:bg-primary/90 text-background font-semibold flex-1"
                    data-testid="button-cookie-accept-all"
                  >
                    {t.cookieConsent.acceptAll}
                  </Button>
                  <Button
                    onClick={acceptNecessary}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 flex-1"
                    data-testid="button-cookie-necessary"
                  >
                    {t.cookieConsent.acceptNecessary}
                  </Button>
                  <Button
                    onClick={() => setShowSettings(true)}
                    variant="ghost"
                    className="text-gray-400 hover:text-white hover:bg-white/10"
                    data-testid="button-cookie-settings"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    {t.cookieConsent.settings}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">
                    {t.cookieConsent.settingsTitle}
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                    <div>
                      <p className="font-semibold text-white">{t.cookieConsent.necessary}</p>
                      <p className="text-sm text-gray-400">{t.cookieConsent.necessaryDesc}</p>
                    </div>
                    <div className="w-12 h-6 bg-primary/50 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-primary rounded-full" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                    <div>
                      <p className="font-semibold text-white">{t.cookieConsent.analytics}</p>
                      <p className="text-sm text-gray-400">{t.cookieConsent.analyticsDesc}</p>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.analytics ? "bg-primary/50 justify-end" : "bg-gray-600 justify-start"
                      }`}
                      data-testid="toggle-analytics"
                    >
                      <div className={`w-4 h-4 rounded-full transition-colors ${
                        preferences.analytics ? "bg-primary" : "bg-gray-400"
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                    <div>
                      <p className="font-semibold text-white">{t.cookieConsent.marketing}</p>
                      <p className="text-sm text-gray-400">{t.cookieConsent.marketingDesc}</p>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.marketing ? "bg-primary/50 justify-end" : "bg-gray-600 justify-start"
                      }`}
                      data-testid="toggle-marketing"
                    >
                      <div className={`w-4 h-4 rounded-full transition-colors ${
                        preferences.marketing ? "bg-primary" : "bg-gray-400"
                      }`} />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    onClick={saveCustomPreferences}
                    className="bg-primary hover:bg-primary/90 text-background font-semibold flex-1"
                    data-testid="button-cookie-save"
                  >
                    {t.cookieConsent.save}
                  </Button>
                  <Button
                    onClick={acceptAll}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 flex-1"
                  >
                    {t.cookieConsent.acceptAll}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
