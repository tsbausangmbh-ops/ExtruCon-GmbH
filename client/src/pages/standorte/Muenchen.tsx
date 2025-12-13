import { LocationPage, type LocationData } from "./LocationPage";

const muenchenData: LocationData = {
  slug: "muenchen",
  name: "München",
  region: "Bayern",
  country: "DE",
  latitude: 48.1351,
  longitude: 11.5820,
  headline: "Ihre KI-Agentur für München und Umgebung. Wir automatisieren Prozesse, entwickeln KI-Agenten und erstellen moderne Websites.",
  description: "ExtruCon ist Ihre KI-Agentur in München. Wir helfen Unternehmen mit intelligenten Automatisierungslösungen, Chatbots und modernen Websites.",
  seoTitle: "KI-Agentur München | ExtruCon GmbH - Automatisierung & KI-Agenten",
  seoDescription: "ExtruCon: Ihre KI-Agentur in München. KI-Agenten, Workflow-Automatisierung, Chatbots & Webseiten mit KI. Kostenlose Beratung für Münchner Unternehmen.",
  seoKeywords: "KI-Agentur München, KI München, Automatisierung München, Chatbot München, Webentwicklung München, n8n München, KI Beratung München, Digitalisierung München",
  nearbyAreas: ["Starnberg", "Dachau", "Freising", "Erding", "Ebersberg", "Fürstenfeldbruck", "Germering", "Pasing", "Schwabing", "Bogenhausen"],
  localContent: {
    intro: "Als KI-Agentur mit Sitz in der Metropolregion München verstehen wir die Anforderungen bayerischer Unternehmen. Von Start-ups in Schwabing bis zu etablierten Mittelständlern in der Region – wir entwickeln maßgeschneiderte KI-Lösungen, die Ihre Prozesse optimieren und Ihr Wachstum beschleunigen.",
    whyUs: [
      "Lokale Präsenz in der Metropolregion München",
      "Erfahrung mit bayerischen Unternehmen aller Größen",
      "Schnelle Reaktionszeiten und persönliche Betreuung",
      "Deutschsprachiger Support und Dokumentation",
      "Datenschutz-konform nach DSGVO"
    ],
    industries: ["Automotive", "IT & Tech", "Finanzdienstleistungen", "Versicherungen", "Medizintechnik", "Maschinenbau", "Einzelhandel", "Gastronomie", "Immobilien", "Beratung"]
  }
};

export default function Muenchen() {
  return <LocationPage location={muenchenData} />;
}
