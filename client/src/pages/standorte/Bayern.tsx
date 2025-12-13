import { LocationPage, type LocationData } from "./LocationPage";

const bayernData: LocationData = {
  slug: "bayern",
  name: "Bayern",
  region: "Bayern",
  country: "DE",
  latitude: 48.7904,
  longitude: 11.4979,
  headline: "Ihre KI-Agentur für ganz Bayern. Von München bis Nürnberg, von Augsburg bis Regensburg – wir sind für Sie da.",
  description: "ExtruCon betreut Unternehmen in ganz Bayern mit KI-Lösungen, Automatisierung und modernen Websites.",
  seoTitle: "KI-Agentur Bayern | ExtruCon GmbH - KI & Automatisierung bayernweit",
  seoDescription: "ExtruCon: Ihre KI-Agentur für Bayern. KI-Agenten, Workflow-Automatisierung & Webseiten für Unternehmen in München, Nürnberg, Augsburg und ganz Bayern.",
  seoKeywords: "KI-Agentur Bayern, KI Bayern, Automatisierung Bayern, Chatbot Bayern, Digitalisierung Bayern, KI München, KI Nürnberg, KI Augsburg, n8n Bayern",
  nearbyAreas: ["München", "Nürnberg", "Augsburg", "Regensburg", "Ingolstadt", "Würzburg", "Fürth", "Erlangen", "Bamberg", "Landshut", "Passau", "Rosenheim"],
  localContent: {
    intro: "Bayern ist ein Wirtschaftsstandort mit vielfältigen Branchen – von der Automobilindustrie über den Maschinenbau bis hin zu innovativen Start-ups. Als bayerische KI-Agentur verstehen wir die Bedürfnisse der regionalen Wirtschaft und entwickeln Lösungen, die zu Ihrem Unternehmen passen.",
    whyUs: [
      "Bayerisches Unternehmen mit lokalem Know-how",
      "Betreuung in ganz Bayern – vor Ort oder remote",
      "Verständnis für regionale Wirtschaftsstrukturen",
      "Netzwerk zu bayerischen Partnern und Förderungen",
      "Deutsche Qualität und DSGVO-Konformität"
    ],
    industries: ["Automotive", "Maschinenbau", "Elektrotechnik", "IT & Software", "Tourismus", "Landwirtschaft", "Einzelhandel", "Handwerk", "Gesundheitswesen", "Logistik", "Finanzwesen", "Energie"]
  }
};

export default function Bayern() {
  return <LocationPage location={bayernData} />;
}
