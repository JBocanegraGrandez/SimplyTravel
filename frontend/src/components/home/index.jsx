import React from 'react'
import LocationSearchInput from '../location_search_bar/location_search_input';

export default function index() {
  return (
    <div>
      <div className="modal-background"></div>
      <div className="home-search-bar-container">
        <LocationSearchInput />
      </div>
    </div>
  )
}
