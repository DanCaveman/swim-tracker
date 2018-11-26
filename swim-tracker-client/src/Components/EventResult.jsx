import React from 'react';

class EventResult extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {isEditMode: false};
    }
    getValueDom = (domValue) =>{
        if(this.state.isEditMode)
        {
            return (<input className="ui input" value={domValue} />);
        }

        return <span> {domValue} </span>;
    };
    toggleEdit = () => {
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
                        {this.getValueDom(this.props.eventResult.distance)} 
                        {this.getValueDom(this.props.eventResult.stroke)}
                    </div>
                    <div >time: {this.getValueDom(this.props.eventResult.time)}</div>
                    <div>date: {this.getValueDom(this.props.eventResult.eventDate)}</div>
                </div>
                <div className="extra content">
                    <div className="ui one buttons">
                        <div class="ui basic green button" onClick={this.toggleEdit}>{buttonText}</div>
                    </div>

                </div>
            </div>        
        );
    }
}

export default EventResult;