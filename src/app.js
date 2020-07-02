import React from "react";
import ReactDOM from "react-dom";
import events from "./events";
import EventCard from "./event-card";

ReactDOM.render(<App />, document.querySelector("main"));

function App() {
    return (
        <>
            <h1 className="title">Events</h1>
            <div className="events-container">
                {events.map(event => (
                    <EventCard event={event} key={event.id} />
                ))}
            </div>
        </>
    );
}
