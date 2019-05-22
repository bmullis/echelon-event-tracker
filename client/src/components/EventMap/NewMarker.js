import React, { useState, useEffect, useRef, Fragment } from "react";

import NewMarkerForm from "./NewMarkerForm";

const NewMarker = () => {
  const [isActive, setIsActive] = useState(false);

  const dropdownEle = useRef(null);

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);
  }, []);

  const handleWindowClick = event => {
    if (
      event.target !== dropdownEle.current &&
      !dropdownEle.current.contains(event.target)
    ) {
      setIsActive(false);
    }
  };

  const handleCloseAfterSubmit = () => {
    setIsActive(false);
  };

  return (
    <div style={{ position: "relative" }} ref={dropdownEle}>
      <button
        className={`button button-round ${isActive ? "active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        +
      </button>
      {isActive && (
        <div className="button-round__dropdown">
          <NewMarkerForm handleCloseAfterSubmit={handleCloseAfterSubmit} />
        </div>
      )}
    </div>
  );
};

export default NewMarker;
