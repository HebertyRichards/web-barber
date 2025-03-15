import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "../style.css";

const position = [-23.612441, -46.477341];

function Mapa() {
  return (
    <>
      <div className="maps">
        <h2>Estamos nessa localização</h2>
      </div>
      <MapContainer center={position} zoom={14}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            <a
              href={`https://www.google.com/maps?q=${position[0]},${position[1]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir no Google Maps
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Mapa;
