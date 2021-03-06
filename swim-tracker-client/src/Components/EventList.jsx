import React from 'react';
import EventResult from './EventResult';
import '../style/Edit.css';
import swimEventApi from '../api/swim-event-api';


class EventList extends React.Component {
    state = {
        swimEvents: []
    };
    updateSwimEvents = (newSwimEvents) => {
        console.log("updated events")
        console.log(newSwimEvents);
        this.setState({swimEvents: newSwimEvents});
    };
    componentDidMount = () => {
        console.log("did mount");
        swimEventApi.getSwimEvents(this.updateSwimEvents);
    };

    eventResultCards = () =>{
        var eventDisplay =                            
            Object.values(this.state.swimEvents.map(event =>
            <div  key={event.id} className="ui row">
                <EventResult onSaveSwimEvent={this.handleSaveSwimEvent} isEditMode={event.id == null} eventResult={event}/>
            </div>)
            );

        return(
            <div className="ui one column grid cards">
                {eventDisplay}
            </div>
        );
    };
    handleAddButtonClick = (evt) =>{
        var newEventArray = [{}].concat(this.state.swimEvents);
        this.setState({swimEvents: newEventArray});
    };  

    handleSaveSwimEvent = (swimEvent) =>{
        swimEventApi.saveSwimEvent(swimEvent);
        this.setState({swimEvents: swimEventApi.getSwimEvents(this.updateSwimEvents)});
    }
    render(){
        return (
            <div className="ui segment"  >
                <div className="ui segment" >
                    <i className="link big plus circle icon" onClick={this.handleAddButtonClick} />
                </div>
                
                    {this.eventResultCards()}
            </div>);
    };
};

export default EventList;