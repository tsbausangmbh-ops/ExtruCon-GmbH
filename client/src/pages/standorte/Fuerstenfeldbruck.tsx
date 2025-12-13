import { LocationPage, type LocationData } from "./LocationPage";

const ffbData: LocationData = {
  slug: "fuerstenfeldbruck",
  name: "Fürstenfeldbruck",
  region: "Bayern",
  country: "DE",
  latitude: 48.1789,
  longitude: 11.2546,
  nearbyAreas: ["Germering", "Puchheim", "Gröbenzell", "Olching", "Maisach", "Eichenau", "Emmering", "Alling", "Moorenweis", "Grafrath"]
};

export default function Fuerstenfeldbruck() {
  return <LocationPage location={ffbData} />;
}
