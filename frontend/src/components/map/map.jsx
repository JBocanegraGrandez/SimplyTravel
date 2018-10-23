import React from 'react';
import { withRouter } from 'react-router-dom';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends React.Component {

  render() {
    return (
      <div className="map">
        <Map google={this.props.google} zoom={4}>

          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyB-psncbiRuWJZKw-S969VXPabwjuKvXCA")
})(MapContainer);