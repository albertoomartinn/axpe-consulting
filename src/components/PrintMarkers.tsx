import { Marker } from '@react-google-maps/api';
import { MarkerListProps } from './Search';

interface PrintMarkersProps {
    markersList: any
}

const PrintMarkers: React.FC<PrintMarkersProps> = ({ markersList }) => {
    const items: JSX.Element[] = []
    markersList.map(async (marker: MarkerListProps, key: any) => {
        const { lat, lng } = marker
        items.push(<Marker key={key} position={{ lat, lng }} options={{ label: { text: marker.locationName, className: 'map-marker' } }} />)
    });
    
    return (
        <>
            {items}
        </>
    )
}

export default PrintMarkers