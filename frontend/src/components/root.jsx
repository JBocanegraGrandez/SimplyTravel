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
import LogInFormContainer from "./session_form/login_form_container";
import Hotels from "./hotels/hotels.jsx";
import FlightPriceContainer from "./flight_price/flight_price_container";
import MapContainer from './map/map_container';
import IndexContainer from "./home/index_container";
import AboutUs from './about_us/about_us';


const Root = () => (
  <div>
    <header>
      <MainHeader />
      <Link to="/" className="header-link" />
    </header>
    <Switch>
      <Route exact path="/" component={IndexContainer} />
      <Route exact path="/flightprice" component={FlightPriceContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/hotels" component={Hotels} />
      <Route exact path="/map" component={MapContainer} />
      <Route exact path="/about" component={AboutUs}/>
    </Switch>
  </div>
);

export default Root;
