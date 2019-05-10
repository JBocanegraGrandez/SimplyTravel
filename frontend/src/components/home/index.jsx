import React from 'react';
import { Link } from 'react-router-dom';
import LocationSearchInputContainer from '../location_search_bar/location_search_input_container';
import DestinationSearchInputContainer from "../location_search_bar/destination_search_input_container";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      destination: null
    }
  }

  render() {
    return (<div className="home-page">
      <div className="modal-background" />
      <h1>SimplyTravel</h1>
      <div className='main-page-search-bar-container' >
        <DestinationSearchInputContainer />
        <LocationSearchInputContainer class="location-input-container" />
        <Link to="/map" className="link-blank2">
          <button className='world-button'>
            <img className='world-logo' src="http://kabramkrafts.com/wp-content/uploads/2017/04/earth.svg"></img>
          </button>
        </Link>
      </div>
    </div>
    );
  }
}

export default Index;