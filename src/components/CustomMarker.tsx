import React, { useEffect, useRef } from "react";

interface CustomMarkerProps {
  map: google.maps.Map | null; // The map instance
  position: google.maps.LatLngLiteral; // Marker position
  content?: HTMLElement; // Custom marker content
}

const CustomAdvancedMarker: React.FC<CustomMarkerProps> = ({ map, position, content }) => {
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);

  useEffect(() => {
    if (!map || !content || !google?.maps?.marker?.AdvancedMarkerElement) return;

    // Check if marker already exists, update instead of recreating
    if (!markerRef.current) {
      markerRef.current = new google.maps.marker.AdvancedMarkerElement({
        position,
        map,
        content,
      });
    } else {
      markerRef.current.position = position;
      markerRef.current.map = map;
    }

    return () => {
      // Cleanup: Properly remove marker when component unmounts
      if (markerRef.current) {
        markerRef.current.map = null; // Detach from map
        markerRef.current = null;
      }
    };
  }, [map, position, content]);

  return null; // This component doesn't render anything
};

export default CustomAdvancedMarker;
