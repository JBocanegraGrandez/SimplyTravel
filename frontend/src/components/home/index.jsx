import React from 'react'
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

  componentWillUpdate() {

  }

  render() {
    return (<div className="home-page">
      <div className="modal-background" />
      <h1>SimplyTravel</h1>
      <div className='main-page-search-bar-container' >
        <DestinationSearchInputContainer />
        <LocationSearchInputContainer />
      </div>
    </div>
    );
  }
}

export default Index;