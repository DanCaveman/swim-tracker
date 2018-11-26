import React, { Component } from 'react';
import './App.css';
import EventList from './Components/EventList';
class App extends Component {
  render() {
    return (
      <div className="App ui container">
          <EventList className="content" />
      </div>
    );
  }
}

export default App;
