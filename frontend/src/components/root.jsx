import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import MainHeader from './header/main_header';
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container.jsx";
import Hotels from "./hotels/hotels.jsx";
import FlightPriceContainer from "./flight_price/flight_price_container";
import MapContainer from './map/map_container';



const Root = () => (
    <div>
        <header>
           <MainHeader />
            <Link to="/" className="header-link">
            </Link>
        </header>
        <Switch>
            <Route exact path="/flightprice" component={FlightPriceContainer} />
            <Route exact path="/login" component={LogInFormContainer} />
            <Route exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/hotels" component={Hotels} />
            <Route path="/map" component={MapContainer}/>

        </Switch>
    </div>
);

export default Root;
