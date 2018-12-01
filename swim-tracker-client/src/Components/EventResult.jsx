import React from 'react';

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
            return (<input 
                name={inputName} 
                className="ui input" 
                value={domValue} 
                onChange={this.setEventValue} />);
        }

        return <span> {domValue} </span>;
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
                <div className="content">
                    <div >event: 
                        {this.getValueDom(this.state.eventResult.distance,"distance")} 
                        {this.getValueDom(this.state.eventResult.stroke, "stroke")}
                    </div>
                    <div >time: {this.getValueDom(this.state.eventResult.time, "time")}</div>
                    <div>date: {this.getValueDom(this.state.eventResult.eventDate, "eventDate")}</div>
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