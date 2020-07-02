import React from "react";
import moment from "moment";

export default function EventCard({ event }) {
    return (
        <div className="event-card">
            <p>
                <span>Date: </span>
                {moment(event.date).format("M MMMM YYYY, HH:mm")}
            </p>
            <p>
                <span>Type: </span> {event.type}
            </p>
            <p>
                <span>Dangerosity: </span>
                {event.dangerosity}
            </p>
        </div>
    );
}
