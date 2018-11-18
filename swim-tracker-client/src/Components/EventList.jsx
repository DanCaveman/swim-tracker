import React from 'react';
import EventResult from './EventResult';


function getEvents(){
    return [
        {distance: "25 yards", stroke: "butterfly", time: "0:25.6", eventDate: "11/1/2018"},
        {distance: "25 yards", stroke: "freestyle", time: "0:22.1", eventDate: "11/12/2018"},
        {distance: "25 yards", stroke: "backstroke", time: "0:23.2", eventDate: "11/6/2018"},
        {distance: "25 yards", stroke: "breaststroke", time: "0:28.5", eventDate: "9/1/2018"}
    ]

};

const eventResultCards = Object.values(getEvents()).map(event => 
    <EventResult eventResult={event} />
)


const EventList = (props) => {
    return (
        <div className="ui cards">            
            {eventResultCards}
        </div>);
};

export default EventList;