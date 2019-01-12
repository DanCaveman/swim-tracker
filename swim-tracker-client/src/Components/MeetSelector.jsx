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
    render = () => {
        var meets = this.getMeetListOptions();
        return (            
            <select className="ui selection dropdown" value={this.props.selectedMeetId}>
                {meets}
            </select>
        );
    };
};

export default MeetSelector;