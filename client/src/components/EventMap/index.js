import React, { useState, useEffect, useRef, useContext } from "react";
import ReactMapGL from "react-map-gl";
import Axios from "axios";

import MapMarker from "./MapMarker";
import NewMarker from "./NewMarker";

import useFetch from "../../utils/useFetch";
import usePrevLocation from "../../utils/usePrevLocation";
import { getVisibleMarkers } from "../../utils/getVisibleMarkers";

import { NewEventContext } from "../../context/NewEventContext";
import { VisibleEventsContext } from "../../context/VisibleEventsContext";

import "mapbox-gl/dist/mapbox-gl.css";

const mapboxApiKey = process.env.REACT_APP_MAPBOX_API_KEY;

const EventMap = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [zoom, setZoom] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [visibleEvents, setVisibleEvents] = useContext(VisibleEventsContext);
  const [newEvent, setNewEvent] = useContext(NewEventContext);
  const [isClickable, setIsClickable] = useState(false);
  const [newMarker, setNewMarker] = useState({});
  const mapContainer = useRef(null);

  const prevMapLocation = usePrevLocation();
  const bounds = mapContainer.current
    ? mapContainer.current.getMap().getBounds()
    : null;

  useEffect(() => {
    if (prevMapLocation) {
      setLatitude(prevMapLocation.latitude);
      setLongitude(prevMapLocation.longitude);
      setZoom(prevMapLocation.zoom);
    } else {
      setLatitude(33.42648270139036);
      setLongitude(-117.74208457016326);
      setZoom(8.2);
    }
  }, [prevMapLocation]);

  const events = useFetch("events");

  useEffect(() => {
    if (events) {
      setMarkers(events);
    }
  }, [events]);

  useEffect(() => {
    setVisibleEvents(getVisibleMarkers(markers, bounds));
  }, [markers]);

  const handleMapClick = event => {
    if (!isClickable) {
      return;
    }
    Axios.post("/events", {
      type: newEvent.type,
      title: newEvent.title,
      description: newEvent.description,
      latitude: event.lngLat[1],
      longitude: event.lngLat[0],
      severity: newEvent.severity
    })
      .then(res => {
        setMarkers(markers.concat(res.data));
        setNewEvent(null);
        setIsClickable(false);
      })
      .catch(err => {
        console.log({ err });
      });
  };

  const getCursor = () => {
    return isClickable ? "crosshair" : "pointer";
  };

  useEffect(() => {
    if (newEvent) {
      setIsClickable(true);
    }
  }, [newEvent]);

  return (
    <div>
      {longitude && latitude && zoom && (
        <div>
          <ReactMapGL
            getCursor={getCursor}
            mapboxApiAccessToken={mapboxApiKey}
            height={"100vh"}
            width={"75vw"}
            latitude={latitude}
            longitude={longitude}
            mapStyle={"mapbox://styles/mapbox/dark-v9"}
            ref={mapContainer}
            zoom={zoom}
            onViewportChange={viewport => {
              const { latitude, longitude, zoom } = viewport;
              setLatitude(latitude);
              setLongitude(longitude);
              setZoom(zoom);
              setVisibleEvents(getVisibleMarkers(markers, bounds));
              localStorage.setItem(
                "mapLocation",
                JSON.stringify({ latitude, longitude, zoom })
              );
            }}
            onClick={event => handleMapClick(event)}
          >
            {markers.length > 0 &&
              markers.map(marker => {
                return <MapMarker key={marker.id} marker={marker} />;
              })}
          </ReactMapGL>
          <NewMarker />
        </div>
      )}
    </div>
  );
};

export default EventMap;
