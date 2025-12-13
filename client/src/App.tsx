import { Switch, Route } from "wouter";
import { Suspense, lazy } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/i18n";
import { ChatWidget } from "@/components/ChatWidget";
import { CookieConsent } from "@/components/CookieConsent";

const Home = lazy(() => import("@/pages/Home"));
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
const Cookies = lazy(() => import("@/pages/Cookies"));
const Referenzen = lazy(() => import("@/pages/Referenzen"));
const Terminbuchung = lazy(() => import("@/pages/Terminbuchung"));
const NotFound = lazy(() => import("@/pages/not-found"));

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
        <span className="text-white/60 text-sm">Laden...</span>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<LoadingFallback />}>
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
        <Route path="/cookies" component={Cookies} />
        <Route path="/referenzen" component={Referenzen} />
        <Route path="/terminbuchung" component={Terminbuchung} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
          <ChatWidget />
          <CookieConsent />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
