import React, { Suspense, lazy } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/i18n";

// Critical pages - loaded immediately
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

// Lazy loaded pages - reduces initial bundle by ~200KB
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));
const Impressum = lazy(() => import("@/pages/Impressum"));
const Contact = lazy(() => import("@/pages/Contact"));
const Ratgeber = lazy(() => import("@/pages/Ratgeber"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const KIAgenten = lazy(() => import("@/pages/KIAgenten"));
const Automatisierungen = lazy(() => import("@/pages/Automatisierungen"));
const WebseitenKI = lazy(() => import("@/pages/WebseitenKI"));
const UeberUns = lazy(() => import("@/pages/UeberUns"));
const Chatbot = lazy(() => import("@/pages/Chatbot"));
const Brand = lazy(() => import("@/pages/services/Brand"));
const Content = lazy(() => import("@/pages/services/Content"));
const SocialMedia = lazy(() => import("@/pages/services/SocialMedia"));
const KI = lazy(() => import("@/pages/services/KI"));
const Web = lazy(() => import("@/pages/services/Web"));
const Marketing = lazy(() => import("@/pages/services/Marketing"));
const SEO = lazy(() => import("@/pages/services/SEO"));
const Referenzen = lazy(() => import("@/pages/Referenzen"));
const Cookies = lazy(() => import("@/pages/Cookies"));
const Termin = lazy(() => import("@/pages/Termin"));
const Muenchen = lazy(() => import("@/pages/Muenchen"));
const Antalya = lazy(() => import("@/pages/Antalya"));
const Zagreb = lazy(() => import("@/pages/Zagreb"));
const Bogenhausen = lazy(() => import("@/pages/districts/Bogenhausen"));
const Schwabing = lazy(() => import("@/pages/districts/Schwabing"));
const Nymphenburg = lazy(() => import("@/pages/districts/Nymphenburg"));
const Gruenwald = lazy(() => import("@/pages/districts/Gruenwald"));
const Harlaching = lazy(() => import("@/pages/districts/Harlaching"));
const Starnberg = lazy(() => import("@/pages/umland/Starnberg"));
const Dachau = lazy(() => import("@/pages/umland/Dachau"));
const Germering = lazy(() => import("@/pages/umland/Germering"));
const Puchheim = lazy(() => import("@/pages/umland/Puchheim"));
const Olching = lazy(() => import("@/pages/umland/Olching"));

// Lazy loaded components
const ChatWidget = lazy(() => import("@/components/ChatWidget").then(m => ({ default: m.ChatWidget })));
const CookieConsent = lazy(() => import("@/components/CookieConsent").then(m => ({ default: m.CookieConsent })));
const ChristmasPopup = lazy(() => import("@/components/ChristmasPopup"));
const NewYearPopup = lazy(() => import("@/components/NewYearPopup"));

import { BackButton } from "@/components/BackButton";
import { GlobalBackground } from "@/components/GlobalBackground";

// Simple loading fallback
const PageLoader = () => <div className="min-h-screen" />;

export function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/datenschutz" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/agb" component={Terms} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/kontakt" component={Contact} />
        <Route path="/ratgeber" component={Ratgeber} />
        <Route path="/faq" component={FAQ} />
        <Route path="/ki-agenten" component={KIAgenten} />
        <Route path="/automatisierungen" component={Automatisierungen} />
        <Route path="/webseiten-ki" component={WebseitenKI} />
        <Route path="/ueber-uns" component={UeberUns} />
        <Route path="/ki-bot" component={Chatbot} />
        <Route path="/leistungen/markenaufbau" component={Brand} />
        <Route path="/leistungen/content" component={Content} />
        <Route path="/leistungen/social-media" component={SocialMedia} />
        <Route path="/leistungen/ki-automatisierung" component={KI} />
        <Route path="/leistungen/web" component={Web} />
        <Route path="/leistungen/marketing" component={Marketing} />
        <Route path="/leistungen/seo" component={SEO} />
        <Route path="/referenzen" component={Referenzen} />
        <Route path="/cookies" component={Cookies} />
        <Route path="/termin" component={Termin} />
        <Route path="/muenchen" component={Muenchen} />
        <Route path="/muenchen/bogenhausen" component={Bogenhausen} />
        <Route path="/muenchen/schwabing" component={Schwabing} />
        <Route path="/muenchen/nymphenburg" component={Nymphenburg} />
        <Route path="/muenchen/gruenwald" component={Gruenwald} />
        <Route path="/muenchen/harlaching" component={Harlaching} />
        <Route path="/starnberg" component={Starnberg} />
        <Route path="/dachau" component={Dachau} />
        <Route path="/germering" component={Germering} />
        <Route path="/puchheim" component={Puchheim} />
        <Route path="/olching" component={Olching} />
        <Route path="/antalya" component={Antalya} />
        <Route path="/zagreb" component={Zagreb} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export function AppContent() {
  return (
    <>
      <GlobalBackground />
      <Toaster />
      <AppRouter />
      <BackButton />
      <Suspense fallback={null}>
        <ChatWidget />
        <CookieConsent />
        <ChristmasPopup />
        <NewYearPopup />
      </Suspense>
    </>
  );
}

export function AppShell({ children, client }: { children: React.ReactNode; client?: QueryClient }) {
  return (
    <QueryClientProvider client={client || queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

function App() {
  return (
    <AppShell>
      <AppContent />
    </AppShell>
  );
}

export default App;
