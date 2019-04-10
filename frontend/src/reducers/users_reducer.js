import merge from 'lodash/merge';

import { SET_CURRENT_USER } from '../util/session_api_util';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case SET_CURRENT_USER:
            return merge({}, state, { [action.payload.handle]: action.payload });
        default:
            return state;
    }
};

export default usersReducer;
