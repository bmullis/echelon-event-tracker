import React from "react";
import { Marker } from "react-map-gl";

import { getMarkerFill, getMarkerBorder } from "../../utils/formatMarkers";

const MapMarker = ({ marker }) => {
  return (
    <Marker
      key={marker.id}
      latitude={marker.latitude}
      longitude={marker.longitude}
    >
      <div
        style={{
          height: "18px",
          width: "18px",
          borderRadius: "500px",
          borderWidth: "3px",
          borderStyle: "solid",
          background: getMarkerFill(marker.type),
          borderColor: getMarkerBorder(marker.severity)
        }}
      />
    </Marker>
  );
};

export default MapMarker;
