import { Fragment } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './MapScreen.sass'
import Search from '../components/Search';
import { useSelector } from 'react-redux';
import PrintMarkers from '../components/PrintMarkers';

const MapScreen = () => {

    const { markersList, currentMarker } = useSelector((state: any) => state.markers)

    const googleApiKey: string = process.env.REACT_APP_API_KEY || ''
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: googleApiKey
    })

    const currentMarkerPosition = Object.keys(currentMarker).length === 0 ? { lat: 41.6312758, lng: 2.6741719 } : currentMarker

    return (
        <div className='map'>
            {isLoaded &&
                (
                    <Fragment>
                        <Search />
                        <GoogleMap
                            mapContainerStyle={{ width: '100%', height: '100%' }}
                            center={currentMarkerPosition}
                            zoom={15}
                        >
                            <PrintMarkers markersList={markersList} />
                        </GoogleMap>
                    </Fragment>
                )
            }
        </div>
    )
}

export default MapScreen