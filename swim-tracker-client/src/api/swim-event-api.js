var savedEvents = [
    {id: 1, meetId: 1, distance: "25 yards", stroke: "butterfly", time: "0:25.6", eventDate: "11/1/2018"},
    {id: 2, meetId: 1, distance: "25 yards", stroke: "butterfly", time: "0:25.6", eventDate: "11/1/2018"},
    {id: 3, meetId: 2, distance: "25 yards", stroke: "butterfly", time: "0:25.6", eventDate: "11/1/2018"},
    {id: 4, meetId: 2, distance: "25 yards", stroke: "butterfly", time: "0:25.6", eventDate: "11/1/2018"},
    {id: 5, meetId: 2, distance: "25 yards", stroke: "freestyle", time: "0:22.1", eventDate: "11/12/2018"},
    {id: 6, meetId: 2, distance: "25 yards", stroke: "backstroke", time: "0:23.2", eventDate: "11/6/2018"},
    {id: 7, meetId: 2, distance: "25 yards", stroke: "breaststroke", time: "0:28.5", eventDate: "9/1/2018"}
];

var meetList = [
    {id: 1, display: "Norski Open", location: "Sun Prairie"},
    {id: 2, display: "Star", location: "Stoughton"},
    {id: 3, display: "OCSC", location: "Oregon"},
    {id: 4, display: "Test", location: "Test Location"}

]

class swimEventApi {
    constructor(){
        this.swimEvents = savedEvents;
        this.maxId = 7;
        this.meetList = meetList;
    }  

    getSwimMeets = (successCallback) =>{
        console.log("got swim meets");
        successCallback(this.meetList);
        return this.meetList;
    }
    getSwimEvents = (successCallback) =>{
        successCallback(this.swimEvents);
        return this.swimEvents;
    }

    saveSwimEvent = (swimEvent) => {
        if(swimEvent.id){
            var existingIndex = this.swimEvents.findIndex(se => se.id === swimEvent.id);
            this.swimEvents[existingIndex] = swimEvent;
        }
        else{
            this.maxId ++;
            swimEvent.id = this.maxId;
            this.swimEvents = this.swimEvents.concat([swimEvent]);
        }
    }
}


export default (new swimEventApi());