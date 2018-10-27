import * as APIUtils from "../util/destination_util";

export const RECEIVE_DESTINATION = "RECEIVE_DESTINATION";

const getDestination = destination => {
  return {
    type: RECEIVE_DESTINATION,
    destination
  };
};

// hits backend
// export const fetchDestination = destination => {
//   return dispatch => {
//     return APIUtils.retrieveDestination(destination).then(destination => {
//       return dispatch(getDestination(destination));
//     });
//   };
// };

// export const pinDestination = destination => {
//   return dispatch => {
//     return APIUtils.setDestination(destination).then(destination => {
//       return dispatch(getDestination(destination));
//     });
//   };
// };

//only updates store
export const fetchDestination = () => {
  return (getDestination());
};

export const pinDestination = destination => {
   return (getDestination(destination));
};