import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './MapScreen.sass'


const MapScreen = () => {

    const googleApiKey: string = process.env.REACT_APP_API_KEY || ''
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: googleApiKey
    })
    
    const position = { lat: 41.6312758, lng: 2.6741719 }

    return (
        <div className='map'>
            {isLoaded &&
                (
                    <GoogleMap
                        mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={position}
                        zoom={15}
                    >
                    <Marker position={position} options={{label: {text: 'Posicion test', className: 'map-marker'}}}/>
                    </GoogleMap>
                )
            }
        </div>
    )
}

export default MapScreen