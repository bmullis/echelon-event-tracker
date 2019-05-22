import { useState, useEffect } from "react";

const usePrevLocation = () => {
  const [prevLocation, setPrevLocation] = useState(null);

  useEffect(() => {
    const mapLocationStorage = localStorage.getItem("mapLocation");
    const mapLocation = JSON.parse(mapLocationStorage);

    setPrevLocation(mapLocation);
  }, []);

  return prevLocation;
};

export default usePrevLocation;
