import { Marker } from '@react-google-maps/api';
import { getLatLng } from 'use-places-autocomplete';
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
    // markersList.map(async (marker: any, key: any) => {
    //     console.log(marker)
    //     const coords: google.maps.LatLng | google.maps.LatLngLiteral = await getLatAndLng(marker)
    //     console.log(coords)
    //     items.push(<Marker key={key} position={{ lat: 37.2430548, lng: -115.7930198 }} options={{ label: { text: 'marker.formatted_address', className: 'map-marker' } }} />)
    // })
    
    return (
        <>
            {items}
        </>
    )
}

export default PrintMarkers