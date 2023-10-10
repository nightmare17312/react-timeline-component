import React from 'react';
import { mock } from '../mock/mock';
import { getEventIcon } from '../mock/widget'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { DateTime } from 'luxon';
import 'react-vertical-timeline-component/style.min.css';

const VerticalTL = () => {
    const data = JSON.parse(mock);

    const getElements = (sortedEvents) => {
        const elements = [];
        sortedEvents.forEach((event, i) => {
            elements.push(
                <VerticalTimelineElement
                    key={i}
                    className="vertical-timeline-element-work"
                    contentStyle={{ background: event.color }}
                    contentArrowStyle={{ borderRight: `7px solid ${event.color}` }}
                    date={DateTime.fromJSDate(new Date(event.startDate)).toLocaleString(
                        DateTime.DATE_SHORT
                    )}
                    iconStyle={{ background: event.color, color: '#fff' }}
                    icon={getEventIcon(event.icon)}
                >
                    <h3 className="vertical-timeline-element-title">{event.text}</h3>
                    <p className="vertical-timeline-element-detail" style={{whiteSpace: "pre-line"}}>{event.eventDetails}</p>
                </VerticalTimelineElement>
            );
        });

        return elements;
    };

    return (
        <VerticalTimeline>{getElements(data)}</VerticalTimeline>
    );
}

export default VerticalTL;