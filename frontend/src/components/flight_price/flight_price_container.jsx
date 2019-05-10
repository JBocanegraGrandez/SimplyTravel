import { connect } from 'react-redux';
import { pinDestination } from '../../actions/destination_actions';
import { pinFlightPrice } from '../../actions/flight_price_actions';
import { pinLocation } from "../../actions/location_actions";
import FlightPrice from './flight_price';

const mapStateToProps = (state) => {
  console.log(`FLIGHTS STATE:`)
  console.log(state)

  return {
    location: state.entities.location,
    destination: state.entities.destination,
    flightPrice: state.entities.flightPrice
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // pinLocation: (location) => dispatch(pinLocation(location)),
    // pinDestination: (destination) => dispatch(pinDestination(destination)),
    pinFlightPrice: (flightPrice) => dispatch(pinFlightPrice(flightPrice)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightPrice);