import { connect} from 'react-redux';
import Map from './map';
import { pinLocation } from '../../actions/location_actions';
import { pinDestination } from '../../actions/destination_actions';

const mapStateToProps = state => {
  // the state of our events, places etc. that we want to pass through
  return {
    location: state.entities.location, // obj of lat and lng
    destination: state.entities.destination
  };
}

const mapDispatchToProps = dispatch => {
  // anything we want to dispatch to our map component
  return  {
    pinLocation: (location) => dispatch(pinLocation(location)),
    // connect geocode user location to pinLocation
    pinDestination: (destination) => dispatch(pinDestination(destination))
    // invoke pin destination on pinDestination
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);