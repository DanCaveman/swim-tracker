import React from 'react';
import MeetSelector from './MeetSelector'

class EventResult extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            onSaveSwimEvent: props.onSaveSwimEvent,
            isEditMode: props.isEditMode,
            eventResult: props.eventResult
        };
    }
    setEventMeet = (meetId) =>{
        var newEvent = Object.assign({}, this.state.eventResult);
        newEvent.meetId = meetId;
        this.setState({eventResult: newEvent});
    }
    setEventValue = (event)=>{
        var newEvent = Object.assign({}, this.state.eventResult);
        if(event.target.name === "distance"){
            newEvent.distance = event.target.value
        }
        else if(event.target.name === "stroke"){
            newEvent.stroke = event.target.value;
        }
        else if(event.target.name === "time"){
            newEvent.time = event.target.value;
        }
        else if(event.target.name === "eventDate"){
            newEvent.eventDate = event.target.value;
        }
        this.setState({eventResult: newEvent });
    }
    getValueDom = (domValue, inputName) =>{
        if(this.state.isEditMode)
        {
            return (
            <div className="ui input">
                <input 
                    name={inputName} 
                    className="ui input" 
                    value={domValue} 
                    onChange={this.setEventValue} />
            </div>);
        }

        return <span > {domValue} </span>;
    };
    toggleEdit = () => {
        if(this.state.isEditMode){
            this.state.onSaveSwimEvent(this.state.eventResult);
        }        
        var newEditMode = !this.state.isEditMode;
        this.setState({isEditMode: newEditMode});
    };

    render(){
        var buttonText = this.state.isEditMode 
        ? "save"
        : "edit";
        return (
            <div className="ui card">
                <div className="ui content">
                    event: 
                        {this.getValueDom(this.state.eventResult.distance,"distance")} 
                        {this.getValueDom(this.state.eventResult.stroke, "stroke")}
                    
                    <div>time: 
                        {this.getValueDom(this.state.eventResult.time, "time")}
                    </div>
                    <div>
                        <MeetSelector onMeetSelected={this.setEventMeet} selectedMeetId={this.state.eventResult.meetId}  meetList={this.props.meetList} />                        
                    </div>
                    <div >date:
                        {this.getValueDom(this.state.eventResult.eventDate, "eventDate")}
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui one buttons">
                        <div className="ui basic green button" onClick={this.toggleEdit}>{buttonText}</div>
                    </div>

                </div>
            </div>        
        );
    }
}

export default EventResult;