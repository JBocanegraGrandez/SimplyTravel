import { RECEIVE_LOCATION } from "../actions/location_actions";
import merge from "lodash/merge";

export const locationReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_LOCATION:
      return action.location;
    default:
      return oldState;
  }
};
