import { combineReducers } from 'redux';

import users from './users_reducer';
import location from "./location_reducer";
import destination from "./destination_reducer";
import flightPrice from "./flight_price_reducer";


export default combineReducers({users, destination, location, flightPrice});