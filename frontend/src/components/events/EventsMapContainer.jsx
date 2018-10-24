import React from "react";
import EventsMap from "./EventsMap";

export default class EventsMapContainer extends React.Component {

  render() {
    return <EventsMap events={this.props.events} googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyB-psncbiRuWJZKw-S969VXPabwjuKvXCA&v=3.exp&libraries=geometry,drawing,places`} 
    loadingElement={<div style={{ height: `100%` }} />} 
    containerElement={<div style={{ height: `100vh`, width: `100%` }} />} 
    mapElement={<div style={{ height: `100%` }} />} />;
  }
}