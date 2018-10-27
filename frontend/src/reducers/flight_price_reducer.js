import { RECEIVE_FLIGHT_PRICE } from "../actions/flight_price_actions";

const flightPriceReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_FLIGHT_PRICE:
      return action.flightPrice;
    default:
      return oldState;
  }
};

export default flightPriceReducer;