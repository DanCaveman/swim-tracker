var savedEvents = [
    {id: 1, distance: "25 yards", stroke: "butterfly", time: "0:25.6", eventDate: "11/1/2018"},
    {id: 2, distance: "25 yards", stroke: "freestyle", time: "0:22.1", eventDate: "11/12/2018"},
    {id: 3, distance: "25 yards", stroke: "backstroke", time: "0:23.2", eventDate: "11/6/2018"},
    {id: 4, distance: "25 yards", stroke: "breaststroke", time: "0:28.5", eventDate: "9/1/2018"}
];

class swimEventApi {
    constructor(){
        this.swimEvents = savedEvents;
        this.maxId = 4;
    }  

    getSwimEvents = () =>{
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