import React, { useEffect } from "react";

interface CustomMarkerProps {
  map: google.maps.Map | null; // The map instance
  position: google.maps.LatLngLiteral; // Marker position
  content?: HTMLElement; // Custom marker content
}

const CustomAdvancedMarker: React.FC<CustomMarkerProps> = ({ map, position, content }) => {
  useEffect(() => {
    if (!map || !content) return;

    // Create an AdvancedMarkerElement
    const marker = new google.maps.marker.AdvancedMarkerElement({
      position,
      map,
      content, // Pass the DOM element directly
    });

    return () => {
      // Clean up the marker when the component unmounts
      marker.map = null;
    };
  }, [map, position, content]);

  return null;
};

export default CustomAdvancedMarker;
