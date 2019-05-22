import React, { useState, useEffect } from "react";

const NewEventContext = React.createContext([null, () => {}]);

const NewEventContextProvider = props => {
  const [newEvent, setNewEvent] = useState(null);

  useEffect(() => {
    setNewEvent();
  }, []);

  return (
    <NewEventContext.Provider value={[newEvent, setNewEvent]}>
      {props.children}
    </NewEventContext.Provider>
  );
};

export { NewEventContext, NewEventContextProvider };
