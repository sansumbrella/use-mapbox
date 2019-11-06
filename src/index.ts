import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';
import React, {useEffect, useState} from 'react';

type AccessToken = string;

/// Instantiate a Mapbox map inside the referenced element.
export function useMapbox(
    ref: React.RefObject<HTMLDivElement>, accessToken: AccessToken,
    options?: Partial<mapboxgl.MapboxOptions>): mapboxgl.Map|undefined {
  const [mapInstance, setMapInstance] = useState<mapboxgl.Map>();
  useEffect(function initializeMap() {
    const container = ref.current;
    if (mapInstance || !container) {
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
  center: [-77.0305, 38.8868],
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 9
};
