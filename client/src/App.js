import React from "react";

import EventMap from "./components/EventMap";
import RadialGraph from "./components/Graphs/RadialGraph";
import RadialGraphSeverity from "./components/Graphs/RadialGraphSeverity";

import { VisibleEventsContextProvider } from "./context/VisibleEventsContext";
import { NewEventContextProvider } from "./context/NewEventContext";

import "./styles/styles.scss";

const App = () => {
  return (
    <VisibleEventsContextProvider>
      <NewEventContextProvider>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <EventMap />
          <div className="graphs">
            <h3>Events by Type</h3>
            <RadialGraph />
            <h3>Events by Severity</h3>
            <RadialGraphSeverity />
          </div>
        </div>
      </NewEventContextProvider>
    </VisibleEventsContextProvider>
  );
};

export default App;
