import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import LocationSearchInputContainer from "../location_search_bar/location_search_input_container";
import DestinationSearchInputContainer from "../location_search_bar/destination_search_input_container";
import FlightPriceContainer from "../flight_price/flight_price_container";
import HotelsContainer from '../hotels/hotels_container';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      sidebar: false,
      sidebarClass: "open-button-flip"
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.randomDestination = this.randomDestination.bind(this);
  }

  toggleNav() {    
    if (this.state.sidebar === true) {
      document.getElementById("mySidenav").style.transform = "translateX(0)";
      this.setState({ sidebar: false, sidebarClass: "open-button-flip" });
    } else {
      document.getElementById("mySidenav").style.transform = "translateX(-100%)";
      this.setState({ sidebar: true, sidebarClass: "open-button" });
    }
  }

  randomDestination() {
    let sampleDest = [[40.7127753, -74.0059728, 'New York City, USA'], [32.5149469, -117.03824710000004, 'Tijuana, Mexico'], [46.227638, 2.213749000000007, 'France'], [51.5073509, -0.12775829999998223, 'London, England']],
        randomPick = sampleDest[Math.floor(Math.random() * 4)];

    this.props.pinDestination({ lat: randomPick[0], lng: randomPick[1] });
    setTimeout(alert(randomPick[2]), 1000);
  }

  render() {
    return <div className="places-autocomplete">
        <div className="open-button-container">
        <img src="https://www.atipso.com/wp-content/uploads/2014/09/icon_send.png" className={this.state.sidebarClass} onClick={this.toggleNav} id='side-button' />
          <div id="mySidenav" className="sidenav">
            <div className="location-container">
              <span className="sidebar-panel">
                Your destination is one click away!
              </span>
            </div>
            <div className="sidebar-location-search-container">
              <LocationSearchInputContainer />
              <div className="sidebar-destination-input-container">
                <DestinationSearchInputContainer style="width:100%" />
              </div>
            </div>
            <div className="flights-container">
              <FlightPriceContainer />
            </div>
            <div className="hotels-container">
              <HotelsContainer />
              {/* <div className="hotels-inside-container">
                <img src="https://www.bingleywalkersarewelcome.org.uk/wp-content/uploads/2015/06/icon-hotel.png" className="hotel-icon" />
                <span className="hotel-name">Fairmont Hotel</span>
                <span className="hotel-price">$138</span>
              </div>
              <div className="hotels-inside-container-2">
                <span className="hotel-location">
                  950 Mason St, San Francisco, CA 94108, United States
                </span>
                <div className="container-3">
                  <span className="hotel-rating">
                    4 Stars
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Star_rating_4_of_5.png" className="rating-img" />
                  </span>
                  <span className="optional-breakfast">
                    {" "}
                    Breakfast
                    <img src="https://cdn1.iconfinder.com/data/icons/rcons-drink/16/tea-512.png" className="drink-icon" />
                  </span>
                  <span className="optional-wifi">
                    {" "}
                    Free Wifi
                    <img src="https://images.vexels.com/media/users/3/141424/isolated/preview/e0bb2e1b2183a2d1e675f215ce236e21-wifi-icon-by-vexels.png" className="wifi-icon" />
                  </span>
                </div>
              </div> */}
            </div>
            <div className="aboutus-container">
              <div className="dropdown-categories">
                <Link to="/about">About Us</Link>
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
                <div className='aboutus-random' onClick={this.randomDestination}>Take Me Somewhere!</div>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default Sidebar;
