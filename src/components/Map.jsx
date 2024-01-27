import { MapContainer, TileLayer, useMap} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { MarkerPosition } from './MarkerPosition';

function Map({location}) {

  const center = [location.latitude+0.3 , location.longitude];

  
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={true} style={{height: "100vh"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <MarkerPosition location={location}/>
    </MapContainer>
  );
}

export default Map
