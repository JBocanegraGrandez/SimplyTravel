import { RECEIVE_LOCATION } from "../actions/location_actions.js";

const locationReducer = (oldState = {lat: 37.7989666, lng: -122.40135179999999}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_LOCATION:
      return action.location;
    default:
      return oldState;
  }
};

export default locationReducer;