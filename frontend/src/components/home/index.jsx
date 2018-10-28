import React from 'react'
import LocationSearchInput from '../location_search_bar/location_search_input';

export default function index() {
  return (
    <div className="home-page">
      <div className="modal-background"></div>
        <h1>SimplyTravel</h1>
        <LocationSearchInput />
    </div>
  )
}
