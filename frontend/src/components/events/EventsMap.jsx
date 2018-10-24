import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import EventsMarker from './EventsMarker';

const EventsMap = withScriptjs(withGoogleMap((props) => {

  // const markers = props.events.map(event => <EventsMarker
  //   key={event.uid}
  //   event={event}
  //   location={{ lat: event.closestPractice.lat, lng: event.closestPractice.lon }}
  // />);

  return <GoogleMap defaultZoom={10} center={{ lat: 37.799, lng: -122.4014 }}>
      {/* {markers} */}
    </GoogleMap>;
}
))

export default EventsMap;