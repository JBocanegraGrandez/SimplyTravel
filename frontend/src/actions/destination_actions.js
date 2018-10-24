import * as APIUtils from "../utils/destination_util";

export const RECEIVE_DESTINATION = "RECEIVE_DESTINATION";

export const getDestination = destination => {
  return {
    type: RECEIVE_DESTINATION,
    destination
  };
};

export const fetchDestination = destination => {
  return dispatch => {
    return APIUtils.retrieveDestination(destination).then(destination => {
      return dispatch(getDestination(destination));
    });
  };
};

export const pinDestination = destination => {
  return dispatch => {
    return APIUtils.setDestination(destination).then(destination => {
      return dispatch(getDestination(destination));
    });
  };
};
