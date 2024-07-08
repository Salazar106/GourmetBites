'use client';

import React, {useEffect} from 'react'
import { Loader } from '@googlemaps/js-api-loader';

export const GoogleMapDirection = () => {

    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
      const initializeMap= async()=>{
        const loader = new Loader({
          apiKey: 'AIzaSyByras6EO6s9gTWq23qMoIaPJ7RT1E5sFI',
          version: 'weekly',
        });

        const {Map} = await loader.importLibrary('maps');
        const locationInMap= {
            lat: 6.164624556920252,
            lng: -75.58425352749889
            
        };

        const options: google.maps.MapOptions = {
            center: locationInMap,
            zoom: 15,
            mapId:'NEXT_MAPS_TUTS'
        };

        const map = new Map(mapRef.current as HTMLDivElement, options);
      }
      initializeMap();
    }, [])
    

    return (
    <div className='h-[600px] ' ref={mapRef}>
        Google Maps
    </div>
)}