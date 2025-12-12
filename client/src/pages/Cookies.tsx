import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/lib/i18n";
import { Cookie, Shield, BarChart3, Megaphone, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function Cookies() {
  const { t } = useLanguage();
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [consentDate, setConsentDate] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    const date = localStorage.getItem("cookie-consent-date");
    if (stored) {
      setPreferences(JSON.parse(stored));
    }
    if (date) {
      setConsentDate(new Date(date).toLocaleDateString());
    }
  }, []);

  const openCookieSettings = () => {
    localStorage.removeItem("cookie-consent");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
              <Cookie className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              {t.cookiePage.title}
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t.cookiePage.subtitle}
            </p>
          </div>

          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <p className="text-gray-400 leading-relaxed">
              {t.cookiePage.intro}
            </p>
          </section>

          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">{t.cookiePage.whatAreCookies}</h2>
            <p className="text-gray-400 leading-relaxed">
              {t.cookiePage.whatAreCookiesDesc}
            </p>
          </section>

          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-6">{t.cookiePage.typesTitle}</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <Shield className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{t.cookieConsent.necessary}</h3>
                  <p className="text-gray-400 text-sm">{t.cookieConsent.necessaryDesc}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{t.cookieConsent.analytics}</h3>
                  <p className="text-gray-400 text-sm">{t.cookieConsent.analyticsDesc}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <Megaphone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{t.cookieConsent.marketing}</h3>
                  <p className="text-gray-400 text-sm">{t.cookieConsent.marketingDesc}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8 p-6 rounded-xl bg-card/30 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">{t.cookiePage.currentSettings}</h2>
            {preferences ? (
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-gray-300">{t.cookieConsent.necessary}</span>
                  <span className="text-green-400 font-medium">{t.cookiePage.enabled}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-gray-300">{t.cookieConsent.analytics}</span>
                  <span className={preferences.analytics ? "text-green-400 font-medium" : "text-gray-500"}>
                    {preferences.analytics ? t.cookiePage.enabled : t.cookiePage.disabled}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-gray-300">{t.cookieConsent.marketing}</span>
                  <span className={preferences.marketing ? "text-green-400 font-medium" : "text-gray-500"}>
                    {preferences.marketing ? t.cookiePage.enabled : t.cookiePage.disabled}
                  </span>
                </div>
                {consentDate && (
                  <p className="text-gray-500 text-sm mt-4">
                    {t.cookiePage.lastUpdated}: {consentDate}
                  </p>
                )}
              </div>
            ) : (
              <p className="text-gray-400 mb-6">{t.cookiePage.notSet}</p>
            )}
          </section>

          <section className="mb-8 p-6 rounded-xl bg-primary/10 border border-primary/20">
            <h2 className="text-xl font-bold text-white mb-2">{t.cookiePage.changeSettings}</h2>
            <p className="text-gray-400 mb-4">{t.cookiePage.changeSettingsDesc}</p>
            <Button
              onClick={openCookieSettings}
              className="bg-primary hover:bg-primary/90 text-background"
              data-testid="button-open-cookie-settings"
            >
              <Settings className="w-4 h-4 mr-2" />
              {t.cookiePage.openSettings}
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
