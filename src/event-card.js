import React from "react";
import moment from "moment";

export default function EventCard({ event }) {
    return (
        <div className="event-card">
            <p>Date: {moment(event.date).format("M MMMM YYYY, HH:mm")}</p>
            <p>Type: {event.type}</p>
            <p>Dangerosity: {event.dangerosity}</p>
        </div>
    );
}
