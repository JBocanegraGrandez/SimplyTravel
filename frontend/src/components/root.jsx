import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import EventsContainer from './events/EventsMapContainer';


const Root = () => {
 return(
  <div>
    <header>
     <Link to="/" className="home-link">
     </Link>
    </header>
    <Switch>
      <Route path="/map" component={EventsContainer}/>
    </Switch>
  </div>
 )
}
export default Root;