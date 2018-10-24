import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchDestination } from '../actions/destination_actions';
import { fetchLocation } from "../actions/location_actions";
import { fetchFlightPrice, pinFlightPrice } from '../actions/flight_price_actions';

const mapStateToProps = (state) => {
  return {
    location: state.entities.location,
    destination: state.entities.destination
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDestination: () => dispatch(fetchDestination),
    fetchLocation: () => dispatch(fetchLocation),
    fetchFlightPrice: () => dispatch(fetchFlightPrice),
    pinFlightPrice: (flightPrice) => dispatch(pinFlightPrice)
  };
};

module.export(connect(FlightPrice));