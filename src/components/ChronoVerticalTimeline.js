import React from 'react';
import { mock } from '../mock/mock';
import { getEventIcon } from '../mock/widget'
import { DateTime } from 'luxon';
import { Chrono } from "react-chrono";
import "./Chrono.css";

const ChronoVerticalTimeline = () => {

    const data = JSON.parse(mock);
    const items = [], icons = [];

    const getElements = (sortedEvents) => {
        const elements = [];
        sortedEvents.forEach((event, i) => {
            elements.push(
                <div key={i}>
                    <h3>{event.text}</h3>
                    <p style={{whiteSpace: "pre-line"}}>{event.eventDetails}</p>
                </div>
            );
            items.push({
                title: DateTime.fromJSDate(new Date(event.startDate)).toLocaleString(
                    DateTime.DATE_SHORT
                )
            });
            icons.push(getEventIcon(event.icon));
        });

        return elements;
    };
    return (
        <div className="Chrono">
            <Chrono
                items={items}
                className="Chrono"
                mode="VERTICAL_ALTERNATING"
                slideShow
                enableDarkToggle
            >
                <div className="chrono-icons">
                    {icons}
                </div>
                {getElements(data)}
            </Chrono>
        </div>
    );
}

export default ChronoVerticalTimeline;