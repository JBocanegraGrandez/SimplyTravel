import * as APIUtils from "../utils/flight_price_util";

export const RECEIVE_FLIGHT_PRICE = "RECEIVE_FLIGHT_PRICE";

export const getFlightPrice = (flightPrice) => {
  return {
    type: RECEIVE_FLIGHT_PRICE,
    flightPrice
  };
};

export const fetchFlightPrice = () => {
  return dispatch => {
    return APIUtils.retrieveFlightPrice().then(flightPrice => {
      return dispatch(getFlightPrice(flightPrice));
    });
  };
};

export const pinFlightPrice = flightPrice => {
  return dispatch => {
    return APIUtils.setFlightPrice(flightPrice).then(flightPrice => {
      return dispatch(getFlightPrice(flightPrice));
    });
  };
};
