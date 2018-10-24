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


const Root = () => (
    <div>
        <header>
           <MainHeader />
            <Link to="/" className="header-link">
            </Link>
        </header>
        <Switch>
            <Route exact path="/login" component={LogInFormContainer} />
            <Route exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/hotels" component={Hotels} />

        </Switch>
    </div>
);

export default Root;
