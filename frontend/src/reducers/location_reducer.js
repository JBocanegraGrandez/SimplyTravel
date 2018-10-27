import { RECEIVE_LOCATION } from "../actions/location_actions.js";

const locationReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_LOCATION:
      return action.location;
    default:
      return oldState;
  }
};

export default locationReducer;