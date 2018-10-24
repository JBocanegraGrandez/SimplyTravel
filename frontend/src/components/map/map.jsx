import React from 'react';
import { withRouter } from 'react-router-dom';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
  width: '100%',
  height: '100%'
}


class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="map" ref="map">
        <Map google={this.props.google} style={style} zoom={10} onClick={this.MapClicked}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />
          <InfoWindow 
          onClose={this.onInfoWindowClose}>
          <div>
          </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyB-psncbiRuWJZKw-S969VXPabwjuKvXCA")
})(MapContainer);