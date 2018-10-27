import { RECEIVE_HOTELS } from '../actions/hotel_actions';
import merge from 'lodash/merge'

export const hotelsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_HOTELS:
      return merge({}, action.hotels);
    default:
      return state;
  }
}