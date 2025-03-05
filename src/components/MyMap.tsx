import { APIProvider, Map, Marker, useMarkerRef } from '@vis.gl/react-google-maps';
import { useState, memo } from 'react';

const MyMap = () => {
    const [markerRef] = useMarkerRef();
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''} onLoad={() => setIsMapLoaded(true)}>
            {!isMapLoaded && (
                <div className="flex justify-center items-center h-full">
                    <div className="loader border-t-transparent border-solid border-4 border-blue-500 rounded-full w-8 h-8 animate-spin "></div>
                </div>
            )}

            <Map
                style={{ width: '100vw', height: '100vh' }}
                defaultCenter={{ lat: 32.307719, lng: 34.938800 }}
                minZoom={15}
                defaultZoom={15}
                maxZoom={15}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            >
                <Marker ref={markerRef} position={{ lat: 32.318099, lng: 34.933096 }} />
            </Map>
        </APIProvider>
    );
};

export default MyMap;