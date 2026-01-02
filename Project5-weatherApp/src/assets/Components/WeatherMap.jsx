import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});
const RecenterMap = ({ lat, lon }) => {
  const map = useMap();
  useEffect(() => {
    if (lat && lon) {
      map.flyTo([lat, lon], 13, { duration: 1 });
    }
  }, [lat, lon, map]);
  return null;
};

const WeatherMap = ({ lat, lon, city }) => {
  if (!lat || !lon) return null;

  return (
    <MapContainer
      center={[lat, lon]}
      zoom={13}
      style={{ height: "300px", width: "500px", borderRadius: "30px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lon]}>
        <Popup>{city}</Popup>
      </Marker>
      <RecenterMap lat={lat} lon={lon} />
    </MapContainer>
  );
};

export default WeatherMap;
