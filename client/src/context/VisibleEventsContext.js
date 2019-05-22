import React, { useState, useEffect } from "react";

const VisibleEventsContext = React.createContext([null, () => {}]);

const VisibleEventsContextProvider = props => {
  const [visibleEvents, setVisibleEvents] = useState([]);

  useEffect(() => {
    setVisibleEvents();
  }, []);

  return (
    <VisibleEventsContext.Provider value={[visibleEvents, setVisibleEvents]}>
      {props.children}
    </VisibleEventsContext.Provider>
  );
};

export { VisibleEventsContext, VisibleEventsContextProvider };
