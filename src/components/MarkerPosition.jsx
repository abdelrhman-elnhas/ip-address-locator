import { Marker, Popup, useMap} from 'react-leaflet';
import icon from './Icon'
import { useEffect } from 'react';


export const MarkerPosition = ({location}) => {
  const position = [location.latitude,location.longitude];
  const map = useMap();

  useEffect(()=>{
    map.flyTo(position,13, {
      animate: true,
    })
  }, [map , position]);

  return (
    <Marker icon={icon}  position={position}>
      <Popup>
        The IP Address is here in <br /> lat:{location.latitude},lng:{location.longitude}
      </Popup>
    </Marker>
  )
}
