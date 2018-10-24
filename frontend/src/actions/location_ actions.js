import * as APIUtils from "../util/location_util";

export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';

export const getLocation = (location) => {
  return {
    type: RECEIVE_LOCATION,
    location 
  };
};

export const fetchLocation = () => {
  return dispatch => {
    return APIUtils.retrieveUserLocation().then((location) => {
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