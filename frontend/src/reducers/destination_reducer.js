import { RECEIVE_DESTINATION } from "../actions/destination_actions";
import merge from "lodash/merge";

const destinationReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_DESTINATION:
      return action.destination;
    default:
      return oldState;
  }
};

export default destinationReducer;