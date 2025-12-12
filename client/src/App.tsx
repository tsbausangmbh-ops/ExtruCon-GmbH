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
import NotFound from "@/pages/not-found";
import { ChatWidget } from "@/components/ChatWidget";
import { CookieConsent } from "@/components/CookieConsent";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
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
          <ChatWidget />
          <CookieConsent />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
