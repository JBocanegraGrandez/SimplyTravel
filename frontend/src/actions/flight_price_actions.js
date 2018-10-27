import * as APIUtils from "../util/flight_price_util";

export const RECEIVE_FLIGHT_PRICE = "RECEIVE_FLIGHT_PRICE";

const getFlightPrice = (flightPrice) => {
  return {
    type: RECEIVE_FLIGHT_PRICE,
    flightPrice
  };
};
//hits backend
// export const fetchFlightPrice = () => {
//   return dispatch => {
//     return APIUtils.retrieveFlightPrice().then(flightPrice => {
//       return dispatch(getFlightPrice(flightPrice));
//     });
//   };
// };

// export const pinFlightPrice = flightPrice => {
//   return dispatch => {
//     return APIUtils.setFlightPrice(flightPrice).then(flightPrice => {
//       return dispatch(getFlightPrice(flightPrice));
//     });
//   };
// };


//only updates store

export const fetchFlightPrice = () => {
  return (getFlightPrice());
};

export const pinFlightPrice = flightPrice => {
  return (getFlightPrice(flightPrice));
};