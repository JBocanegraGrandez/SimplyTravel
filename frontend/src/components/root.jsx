import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainHeader from './header/main_header';
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container.jsx";
import Hotels from "./hotels/hotels.jsx";
import FlightPriceContainer from "./flight_price/flight_price_container";
import EventsContainer from './events/EventsMapContainer';


const Root = () => (
    <div>
        <header>
           <MainHeader />
            <Link to="/" className="header-link">
            </Link>
        </header>
        <Switch>
            <Route exact path="/flightprice" component={FlightPriceContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/hotels" component={Hotels} />
            <Route path="/map" component={EventsContainer}/>

        </Switch>
    </div>
);

export default Root;
