import React from 'react'
import LocationSearchInputContainer from '../location_search_bar/location_search_input_container';
import DestinationSearchInputContainer from "../location_search_bar/destination_search_input_container";

export default function index() {
  return <div className="home-page">
      <div className="modal-background" />
      <h1>SimplyTravel</h1>
      <div className='main-page-search-bar-container' >
        <DestinationSearchInputContainer />
        <LocationSearchInputContainer />
      </div>
    </div>;
}
