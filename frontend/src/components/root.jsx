import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import MapContainer from './map/map';


const Root = () => {
 return(
  <div>
   <header>
    <Link to="/" className="home-link">
     <h1>SimplyTravel</h1>
    </Link>
   </header>
   <Switch>
     <Route path="/map" component={MapContainer}/>
   </Switch>
  </div>
 )
}
export default Root;