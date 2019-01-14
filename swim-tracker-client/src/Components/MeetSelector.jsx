import React from 'react';
import swimApi from '../api/swim-event-api';

class MeetSelector extends React.Component {
    state = {swimMeetList: []};

    updateSwimMeetList = (swimMeets) =>{
        this.setState({swimMeetList: swimMeets});
    };
    componentDidMount = () =>{
        swimApi.getSwimMeets(this.updateSwimMeetList);
    };

    getMeetListOptions = () =>{
        var meetList = this.state.swimMeetList;
        var emptyOption = <option value="-1"></option>;
        if(!meetList){return [emptyOption];}

        var meetOptions = Object.values(meetList.map(meetInfo =>
            <option key={meetInfo.id} value={meetInfo.id}>{meetInfo.display}</option>)
        );
        return meetOptions;
    }

    handleMeetChange = (event) => {        
        console.log(event.target.value);
        this.props.onMeetSelected(event.target.value);
    }
    render = () => {
        var meets = this.getMeetListOptions();
        return (            
            <select name="meetSelector" className="ui selection dropdown" value={this.props.selectedMeetId} onChange={this.handleMeetChange}>
                {meets}
            </select>
        );
    };
};

export default MeetSelector;