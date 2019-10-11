import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';
import React, {useEffect, useState} from 'react';

type AccessToken = string;

/// Instantiate a Mapbox map inside the referenced element.
export function useMapbox(
    ref: React.RefObject<HTMLDivElement>, accessToken: AccessToken,
    options?: mapboxgl.MapboxOptions): mapboxgl.Map|undefined {
  const [mapInstance, setMapInstance] = useState<mapboxgl.Map>();
  useEffect(function initializeMap() {
    const container = ref.current;
    if (!container) {
      return;
    }
    if (mapInstance) {
      return;
    }
    mapboxgl.accessToken = accessToken;
    const mergedOptions = {container, ...defaultOptions, ...options};
    const map = new mapboxgl.Map(mergedOptions);
    setMapInstance(map);
  }, [ref, accessToken, options]);


  return mapInstance;
}

const defaultOptions: Partial<mapboxgl.MapboxOptions> = {
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-74.50, 40],
  zoom: 9
};
