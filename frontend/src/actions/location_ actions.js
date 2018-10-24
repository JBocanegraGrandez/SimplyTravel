import * as APIUtils from "../utils/location_util";

export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';

export const getLocation = (Location) => {
  return {
    type: RECEIVE_LOCATION,
    location
  };
};

export const fetchLocation = (location) => {
  return dispatch => {
    return APIUtils.retrieveUserLocation(location).then((location) => {
      return dispatch(getLocation(location));
    });
  };
};

export const pinLocation = (location) => {
  return dispatch => {
    return APIUtils.setUserLocation(location).then((location) => {
      return dispatch(getLocation(location));
    });
  };
};