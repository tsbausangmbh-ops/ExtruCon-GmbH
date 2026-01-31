import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/i18n";
import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Impressum from "@/pages/Impressum";
import Contact from "@/pages/Contact";
import Ratgeber from "@/pages/Ratgeber";
import FAQ from "@/pages/FAQ";
import KIAgenten from "@/pages/KIAgenten";
import Automatisierungen from "@/pages/Automatisierungen";
import WebseitenKI from "@/pages/WebseitenKI";
import UeberUns from "@/pages/UeberUns";
import Chatbot from "@/pages/Chatbot";
import Brand from "@/pages/services/Brand";
import Content from "@/pages/services/Content";
import SocialMedia from "@/pages/services/SocialMedia";
import KI from "@/pages/services/KI";
import Web from "@/pages/services/Web";
import Marketing from "@/pages/services/Marketing";
import SEO from "@/pages/services/SEO";
import Referenzen from "@/pages/Referenzen";
import Cookies from "@/pages/Cookies";
import Termin from "@/pages/Termin";
import Muenchen from "@/pages/Muenchen";
import Bogenhausen from "@/pages/districts/Bogenhausen";
import Schwabing from "@/pages/districts/Schwabing";
import Nymphenburg from "@/pages/districts/Nymphenburg";
import Gruenwald from "@/pages/districts/Gruenwald";
import Harlaching from "@/pages/districts/Harlaching";
import Starnberg from "@/pages/umland/Starnberg";
import Dachau from "@/pages/umland/Dachau";
import Germering from "@/pages/umland/Germering";
import Puchheim from "@/pages/umland/Puchheim";
import Olching from "@/pages/umland/Olching";
import NotFound from "@/pages/not-found";
import { ChatWidget } from "@/components/ChatWidget";
import { CookieConsent } from "@/components/CookieConsent";
import ChristmasPopup from "@/components/ChristmasPopup";
import NewYearPopup from "@/components/NewYearPopup";
import { BackButton } from "@/components/BackButton";

function Router() {
  return (
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
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
          <BackButton />
          <ChatWidget />
          <CookieConsent />
          <ChristmasPopup />
          <NewYearPopup />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
