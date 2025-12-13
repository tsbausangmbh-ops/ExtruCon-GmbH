import { LocationPage, type LocationData } from "./LocationPage";

const muenchenData: LocationData = {
  slug: "muenchen",
  name: "München",
  region: "Bayern",
  country: "DE",
  latitude: 48.1351,
  longitude: 11.5820,
  nearbyAreas: ["Starnberg", "Dachau", "Freising", "Erding", "Ebersberg", "Fürstenfeldbruck", "Germering", "Pasing", "Schwabing", "Bogenhausen"]
};

export default function Muenchen() {
  return <LocationPage location={muenchenData} />;
}
