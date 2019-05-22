import React, { useState, useContext } from "react";

import { NewEventContext } from "../../context/NewEventContext";

const NewMarkerForm = ({ handleCloseAfterSubmit }) => {
  const [eventType, setEventType] = useState("");
  const [eventSeverity, setEventSeverity] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const [newEvent, setNewEvent] = useContext(NewEventContext);

  const handleFormSubmit = event => {
    event.preventDefault();

    setNewEvent({
      type: eventType,
      severity: eventSeverity,
      title: eventTitle,
      description: eventDescription
    });
    handleCloseAfterSubmit();
  };

  return (
    <div>
      <div className="dropdown-form__header">
        <h4>Report New Event</h4>
      </div>
      <div className="dropdown-form__body">
        <form onSubmit={event => handleFormSubmit(event)}>
          <select
            required
            onChange={event => setEventType(event.target.value)}
            value={eventType}
          >
            <option>Select event type...</option>
            <option>Crime</option>
            <option>Safety</option>
            <option>Traffic</option>
          </select>
          <select
            required
            onChange={event => setEventSeverity(event.target.value)}
            value={eventSeverity}
          >
            <option>Select event severity...</option>
            <option>Emergency</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <input
            required
            onChange={event => setEventTitle(event.target.value)}
            placeholder="New event title..."
            value={eventTitle}
          />
          <input
            required
            onChange={event => setEventDescription(event.target.value)}
            placeholder="New event description..."
            value={eventDescription}
          />
          <button type="submit" className="button">
            Select Location
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewMarkerForm;
