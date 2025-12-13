import { LocationPage, type LocationData } from "./LocationPage";

const ffbData: LocationData = {
  slug: "fuerstenfeldbruck",
  name: "Fürstenfeldbruck",
  region: "Bayern",
  country: "DE",
  latitude: 48.1789,
  longitude: 11.2546,
  headline: "Ihr lokaler Partner für KI & Automatisierung im Landkreis Fürstenfeldbruck. Persönliche Beratung vor Ort.",
  description: "ExtruCon hat seinen Hauptsitz in Fürstenfeldbruck. Wir sind Ihr lokaler Ansprechpartner für KI-Lösungen im Münchner Westen.",
  seoTitle: "KI-Agentur Fürstenfeldbruck | ExtruCon GmbH - Ihr lokaler Partner",
  seoDescription: "ExtruCon: KI-Agentur mit Hauptsitz in Fürstenfeldbruck. KI-Agenten, Automatisierung & Webseiten für Unternehmen im Landkreis FFB. Persönliche Beratung vor Ort.",
  seoKeywords: "KI-Agentur Fürstenfeldbruck, KI FFB, Automatisierung Fürstenfeldbruck, Chatbot FFB, Webentwicklung Fürstenfeldbruck, Digitalisierung Landkreis FFB, ExtruCon Fürstenfeldbruck",
  nearbyAreas: ["Germering", "Puchheim", "Gröbenzell", "Olching", "Maisach", "Eichenau", "Emmering", "Alling", "Moorenweis", "Grafrath"],
  localContent: {
    intro: "Mit unserem Hauptsitz in Fürstenfeldbruck sind wir Ihr Partner vor Ort. Wir kennen die lokale Wirtschaft und unterstützen Unternehmen im Landkreis FFB bei der digitalen Transformation. Ob Handwerksbetrieb, Dienstleister oder produzierendes Gewerbe – wir finden die passende KI-Lösung für Ihr Geschäft.",
    whyUs: [
      "Hauptsitz direkt in Fürstenfeldbruck",
      "Persönliche Meetings vor Ort möglich",
      "Kenntnis der lokalen Wirtschaftsstruktur",
      "Kurze Wege und schnelle Reaktionszeiten",
      "Unterstützung vom ersten Gespräch bis zur Umsetzung"
    ],
    industries: ["Handwerk", "Einzelhandel", "Gastronomie", "Dienstleistungen", "Gesundheitswesen", "Bildung", "Immobilien", "Logistik", "Produktion", "Landwirtschaft"]
  }
};

export default function Fuerstenfeldbruck() {
  return <LocationPage location={ffbData} />;
}
