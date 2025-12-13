import { LocationPage, type LocationData } from "./LocationPage";

const bayernData: LocationData = {
  slug: "bayern",
  name: "Bayern",
  region: "Bayern",
  country: "DE",
  latitude: 48.7904,
  longitude: 11.4979,
  nearbyAreas: ["München", "Nürnberg", "Augsburg", "Regensburg", "Ingolstadt", "Würzburg", "Fürth", "Erlangen", "Bamberg", "Landshut", "Passau", "Rosenheim"]
};

export default function Bayern() {
  return <LocationPage location={bayernData} />;
}
