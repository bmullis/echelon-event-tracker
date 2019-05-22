const getVisibleMarkers = (markers, bounds) => {
  let visibleMarkers = [];

  markers.forEach(marker => {
    const longInBounds =
      (marker.longitude - bounds._ne.lng) *
        (marker.longitude - bounds._sw.lng) <
      0;
    const latInBounds =
      (marker.latitude - bounds._ne.lat) * (marker.latitude - bounds._sw.lat) <
      0;
    if (longInBounds && latInBounds) visibleMarkers.push(marker);
  });

  return visibleMarkers;
};

export { getVisibleMarkers };
