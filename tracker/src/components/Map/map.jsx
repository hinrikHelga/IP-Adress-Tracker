import styles from './map.module.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export const DisplayMap = (props) => {
    const { addressData } = props;
    const position = [addressData.location.lat, addressData.location.lng];

    let DefaultIcon = L.icon({
        iconRetinaUrl: iconRetina,
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconSize: [32, 48],
        iconAnchor: [16,48]
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    function ChangeView() {
        const map = useMap();
        map.setView(position, 13);
        map.setMaxBounds([[-90,-180],   [90,180]]);

        return null;
    }

    return (
        <MapContainer center={ position } zoom={13} scrollWheelZoom={false} className={ styles.map }>
            <ChangeView />
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            noWrap={true}
            />
            <Marker position={ position }/>
        </MapContainer>
    );
}